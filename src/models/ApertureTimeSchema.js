const mongoose = require('mongoose')

const ApertureTimeSchema = mongoose.Schema({
  hour: {
    type: Number,
    required: true,
  },
  minute: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('ApertureTime', ApertureTimeSchema)
