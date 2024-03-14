const express = require('express')
// schema import
const RisksSchema = require('../models/RisksSchema')

const multer = require('multer')
const fs = require('node:fs')

const upload = multer({ dest: 'uploads/' })
const router = express.Router()

router.get('/risks', (req, res) => {
  res.send('Risks end point')
})

module.exports = router
