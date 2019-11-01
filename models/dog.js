const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const dogSchema = new Schema({
  user: String,
  breed: String,
  dob: String,
  sex: String,
  image: String,
  street: String,
  city: String,
  state: String,
  pincode: Number,
  amount: Number
});
module.exports = mongoose.model('dog', dogSchema, 'dogs');
