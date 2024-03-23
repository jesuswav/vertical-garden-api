const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true, 
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cellphone_number: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  porfile_pic: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', UserSchema)
