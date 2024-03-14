const express = require('express')
// schema import
const FlowerpotSchema = require('../models/FlowerpotSchema')

const multer = require('multer')
const fs = require('node:fs')

const upload = multer({ dest: 'uploads/' })
const router = express.Router()

router.post('/flowepots', (req, res) => {
  const flowerpot = FlowerpotSchema(req.body)
  flowerpot
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

router.get('/flowerpots', (req, res) => {
  res.send('Flowerpots end point')
})

module.exports = router
