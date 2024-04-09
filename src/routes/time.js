const express = require('express')
// schema import

const router = express.Router()

let apertureTime = {
  hour: 0,
  minute: 0,
}

let closeTime = {
  hour: 0,
  minute: 0,
}

router.post('/aperture-time', (req, res) => {
  const hour = req.body.hour
  const minute = req.body.minute

  apertureTime.hour = hour
  apertureTime.minute = minute

  console.log(apertureTime)

  res.send(apertureTime)
})

router.get('/aperture-time', (req, res) => {
  res.send(apertureTime)
})

// CLOSE TIME

router.post('/close-time', (req, res) => {
  const hour = req.body.hour
  const minute = req.body.minute

  closeTime.hour = hour
  closeTime.minute = minute

  console.log(closeTime)

  res.send(closeTime)
})

router.get('/close-time', (req, res) => {
  res.send(closeTime)
})

module.exports = router
