const mongoose = require('mongoose')

const RisksSchema = mongoose.Schema({
  apertureTime: {
    type: String,
    required: true,
  },
  closeTime: {
    type: String,
    required: true,
  },
  // statusVale: {
  //   type: Boolean,
  //   required: true,
  // },
  spentWater: {
    type: Number,
    required: true,
  },
  registerDate: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Risk', RisksSchema)
