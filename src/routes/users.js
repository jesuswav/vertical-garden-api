const express = require('express')
// schema import

const multer = require('multer')
const fs = require('node:fs')

const upload = multer({ dest: 'uploads/' })
const router = express.Router()

router.get('/users', (req, res) => {
  res.send('Users end point')
})

module.exports = router
