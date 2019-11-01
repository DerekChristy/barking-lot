const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
dotenv.config();
const uploader = cloudinary.uploader;
const cloudinaryConfig = (req, res, next) => {
  cloudinary.config({
    cloud_name: 'derekchristy',
    api_key: '557126682261428',
    api_secret: 'JYpWXhzv2oQAOKAePkv_O_PlgYk'
  });
  next();
};
module.exports = { cloudinaryConfig: cloudinaryConfig, uploader: uploader };
