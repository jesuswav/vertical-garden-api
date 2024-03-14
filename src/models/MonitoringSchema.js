const mongoose = require('mongoose')

const MonitoringSchema = mongoose.Schema({
  humidity: {
    type: Number,
    required: true,
  },

  floorHumidity: {
    type: Number,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  coTwo: {
    type: Number,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Monitoring', MonitoringSchema)
