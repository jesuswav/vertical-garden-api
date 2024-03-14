const express = require('express')
// schema import
const MonitoringSchema = require('../models/MonitoringSchema')

const router = express.Router()

// Get all registers
router.get('/monitoring', (req, res) => {
  MonitoringSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Get one register by id
router.get('/monitoring/:id', (req, res) => {
  const { id } = req.params
  MonitoringSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Create a new register
router.post('/monitoring', (req, res) => {
  const data = MonitoringSchema(req.body)
  data
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Update a register by id
router.put('/monitoring/:id', (req, res) => {
  const { id } = req.params
  const { humidity, floorHumidity, temperature, coTwo } = req.body
  MonitoringSchema.updateOne(
    { _id: id },
    { $set: { humidity, floorHumidity, temperature, coTwo } }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Delete one register
router.delete('/monitoring', (req, res) => {
  const { id } = req.params
  MonitoringSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

module.exports = router
