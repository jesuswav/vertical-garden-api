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
  spentWater: {
    type: Number,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Risk', RisksSchema)

// statusVale: {
//   type: Boolean,
//   required: true,
// },
