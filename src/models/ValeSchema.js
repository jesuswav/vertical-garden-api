const mongoose = require('mongoose')

const ValeSchema = mongoose.Schema({
  valeState: {
    type: Boolean,
    default: true,
  },
})

module.exports = mongoose.model('Vale', ValeSchema)
