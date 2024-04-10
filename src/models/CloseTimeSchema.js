const mongoose = require('mongoose')

const CloseTimeSchema = mongoose.Schema({
  hour: {
    type: Number,
    required: true,
  },
  minute: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('CloseTime', CloseTimeSchema)
