const mongoose = require('mongoose')

const PlantSchema = mongoose.Schema({
  plantName: {
    type: String,
    required: true,
  },
  requiredWeather: {
    type: String,
    required: true,
  },
  fertilizer: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Plant', PlantSchema)
