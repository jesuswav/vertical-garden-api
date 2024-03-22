const bcrypt = require('bcrypt')
const express = require('express')
// schema import
const User = require('../models/User')

const fs = require('node:fs')

// const upload = multer({ dest: 'uploads/' })
const router = express.Router()

router.get('/users', (req, res) => {
  res.send('Users end point')
})

router.post('/users', async (req, res) => {
  const {body} = req
  const {username, name, password} = body

  const passwordHash = await bcrypt.hash(password, 10)
  const user = new User({
    username,
    name,
    passwordHash
  })

  const savedUser = await user.save()

  res.json(savedUser)
})

module.exports = router
