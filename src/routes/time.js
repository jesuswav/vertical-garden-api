const express = require('express')
// schema import
const ApertureTimeSchema = require('../models/ApertureTimeSchema')
const CloseTimeSchema = require('../models/CloseTimeSchema')

const router = express.Router()

// let apertureTime = {
//   hour: 0,
//   minute: 0,
// }

// let closeTime = {
//   hour: 0,
//   minute: 0,
// }

// ROUTES FOR APERTURE TIME
router.post('/aperture-time', (req, res) => {
  const data = ApertureTimeSchema(req.body)
  data
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Update aperture time by id
router.put('/aperture-time/:id', (req, res) => {
  const { id } = req.params
  const { hour, minute } = req.body
  ApertureTimeSchema.updateOne({ _id: id }, { $set: { hour, minute } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

router.get('/aperture-time', async (req, res) => {
  try {
    const lastApertureTime = await ApertureTimeSchema.findOne()
      .sort({ _id: -1 })
      .exec()
    res.json(lastApertureTime)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ROUTES FOR CLOSE TIME
router.post('/close-time', (req, res) => {
  const data = CloseTimeSchema(req.body)
  data
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Update close time by id
router.put('/close-time/:id', (req, res) => {
  const { id } = req.params
  const { hour, minute } = req.body
  CloseTimeSchema.updateOne({ _id: id }, { $set: { hour, minute } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

router.get('/close-time', async (req, res) => {
  try {
    const lastCloseTime = await CloseTimeSchema.findOne()
      .sort({ _id: -1 })
      .exec()
    res.json(lastCloseTime)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
