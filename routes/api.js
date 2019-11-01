const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Dog = require('../models/dog');
const config = require('../config/cloudinaryConfig');
const Datauri = require('datauri');
const path = require('path');
const multer = require('multer');
const KEY = 'secretKey';

const mongoose = require('mongoose');
const db =
  'mongodb+srv://admin:derek@users-nbgnd.mongodb.net/test?retryWrites=true&w=majority';
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
mongoose.connect(db, options, err => {
  if (err) {
    console.error('Datebase ERROR!: ' + err);
  } else {
    console.log('Database connection sucessful');
  }
});

router.get('/', (req, res) => {
  res.send('From API routes');
});

// the active/logged-in user
router.get('/user', verifyToken, (req, res) => {
  const userId = req.userId;
  User.findById(userId).exec((err, data) => {
    if (err) {
      res.status(401).json('user not found');
    } else {
      res.status(200).json(data);
    }
  });
});

router.get('/users', (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.status(401).send('Error');
    } else {
      res.status(200).json(users);
    }
  });
});

router.get('/userById', (req, res) => {
  const userId = String(req.query.id);
  console.log('userById: ' + userId);
  User.findById(userId).exec((err, data) => {
    if (err) {
      console.log('User find by Id: ' + err);
      res.status(401).send(err);
    } else {
      console.log(data);
      res.status(200).json(data);
    }
  });
});

router.get('/pet', (req, res) => {
  const petId = String(req.query.id);

  Dog.findById(petId).exec((err, data) => {
    if (err) {
      console.log('Dog findByID: ' + err);
      res.status(401).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

router.get('/pets', (req, res) => {
  Dog.find((err, dogs) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).json(dogs);
    }
  });
});

const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('image');

router.post('/uploadImage', verifyToken, multerUploads, (req, res) => {
  if (req.file) {
    console.log('Uploading image...');
    const duri = new Datauri();
    const file = duri.format(
      path.extname(req.file.originalname).toString(),
      req.file.buffer
    ).content;
    config.uploader
      .upload(file)
      .then(result => {
        const image = result.url;
        console.log('IMAGE-URL: ' + image) + 'Image Upload Successful!';
        res.send({ image });
      })
      .catch(err => {
        console.log(err);
        res.status(401).send(err);
      });
  }
});

router.post('/updateCart', (req, res) => {
  const id = req.body.id;
  console.log(id);

  const newCart = req.body.cart;
  User.findByIdAndUpdate(id, {
    $set: {
      cartItems: newCart
    }
  }).exec((err, data) => {
    if (err) {
      console.log(err);
      res.status(401).send(err);
    } else {
      console.log('Cart updated: ' + data.cartItems);
      res.status(200).send(data);
    }
  });
});

router.post('/addDog', verifyToken, (req, res) => {
  const dog = new Dog(req.body);
  console.log('add dog: ' + req.body);
  dog.save((error, dog) => {
    if (error) {
      res.status(401).send(error);
      console.log(error);
    } else {
      console.log(dog);

      res.status(200).send(dog);
    }
  });
});

router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      res.send(401).send(error);
      console.log(error);
    } else {
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, KEY);
      res.status(200).send({ token });
    }
  });
});

router.post('/login', (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send({ message: 'Invalid email' });
      } else {
        if (user.password !== userData.password) {
          res.status(401).send({ message: 'Invalid password' });
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign({ payload }, KEY);
          res.status(200).send({ token, user });
        }
      }
    }
  });
});

// Middleware to verify token
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorised request');
  }
  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.status(401).send('Unauthorised request');
  }
  let payload = jwt.verify(token, KEY);
  if (!payload) {
    return res.status(401).send('Unauthorised request');
  }

  req.userId = payload.payload.subject;
  next();
}

module.exports = router;
