const express = require('express')
// schema import
const RisksSchema = require('../models/RisksSchema')

const multer = require('multer')
const fs = require('node:fs')

const upload = multer({ dest: 'uploads/' })
const router = express.Router()

// Get all the registers
router.get('/risks', (req, res) => {
  RisksSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Get one register
router.get('/risks/:id', (req, res) => {
  const { id } = req.params
  RisksSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Create a new register
router.post('/risks', (req, res) => {
  const data = RisksSchema(req.body)
  data
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Udate a register by id
router.put('/risks', (req, res) => {
  const { id } = req.params
  const { apertureTime, closeTime, spentWater } = req.body
  RisksSchema.updateOne(
    { _id: id },
    { $set: { apertureTime, closeTime, spentWater } }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// Delete a register
router.delete('/risks', (req, res) => {
  const { id } = req.params
  RisksSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

module.exports = router
