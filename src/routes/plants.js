const express = require('express')
// schema import
const PlantSchema = require('../models/PlantSchema')

const multer = require('multer')
const fs = require('node:fs')

const upload = multer({ dest: 'uploads/' })
const router = express.Router()

// Get all plants
router.get('/plants', (req, res) => {
  PlantSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Create a new plant
router.post('/plants', (req, res) => {
  const plant = PlantSchema(req.body)
  plant
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Get just one plant
router.get('/plants/:id', (req, res) => {
  const { id } = req.params
  PlantSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Update a plant
router.put('/plants/:id', (req, res) => {
  const { id } = req.params
  const { plantName, requiredWeather, fertilizer, details } = req.body
  PlantSchema.updateOne(
    { _id: id },
    { $set: { plantName, requiredWeather, fertilizer, details } }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Delete a plant
router.delete('/plants/:id', (req, res) => {
  const { id } = req.params
  PlantSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

module.exports = router
