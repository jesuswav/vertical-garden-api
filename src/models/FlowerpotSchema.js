const mongoose = require('mongoose')

const FlowepotSchema = mongoose.Schema({
  humidity: {
    type: Number,
    default: true,
  },
  temperature: {
    type: Number,
    default: true,
  },
  registration_date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Flowerpot', FlowepotSchema)
