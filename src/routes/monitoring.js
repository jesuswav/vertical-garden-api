const express = require('express')
// schema import
const MonitoringSchema = require('../models/MonitoringSchema')

const router = express.Router()

// Get all registers
router.get('/monitoring', (req, res) => {
  MonitoringSchema.find()
    .then((data) => {
      res.json(data)
    })
    .catch((error) => res.json({ message: error }))
})

router.get('/monitoring/chart', (req, res) => {
  MonitoringSchema.find()
    .sort({ registerDate: -1 })
    .limit(3)
    .exec()
    .then((data) => {
      let chartData = []
      data.map((item) => {
        chartData.push({
          date: item.registerDate,
          humidity: item.humidity,
          floorHumidity: item.floorHumidity,
          temperature: item.temperature,
          coTwo: item.coTwo,
        })
      })
      res.json(chartData)
    })
})

router.get('/monitoring/chart/temperature', (req, res) => {
  MonitoringSchema.find()
    .sort({ registerDate: -1 })
    .limit(15)
    .exec()
    .then((data) => {
      let chartData = []
      data.map((item) => {
        chartData.push({
          date: item.registerDate,
          temperature: item.temperature,
        })
      })
      res.json(chartData)
    })
})

router.get('/monitoring/chart/humidity', (req, res) => {
  MonitoringSchema.find()
    .sort({ registerDate: -1 })
    .limit(15)
    .exec()
    .then((data) => {
      let chartData = []
      data.map((item) => {
        chartData.push({
          date: item.registerDate,
          humidity: item.humidity,
        })
      })
      res.json(chartData)
    })
})

router.get('/monitoring/chart/floor-humidity', (req, res) => {
  MonitoringSchema.find()
    .sort({ registerDate: -1 })
    .limit(15)
    .exec()
    .then((data) => {
      let chartData = []
      data.map((item) => {
        chartData.push({
          date: item.registerDate,
          floorHumidity: item.floorHumidity,
        })
      })
      res.json(chartData)
    })
})

router.get('/monitoring/chart/coTwo', (req, res) => {
  MonitoringSchema.find()
    .sort({ registerDate: -1 })
    .limit(15)
    .exec()
    .then((data) => {
      let chartData = []
      data.map((item) => {
        chartData.push({
          date: item.registerDate,
          coTwo: item.coTwo,
        })
      })
      res.json(chartData)
    })
})

router.get('/monitoring/chart-data', (req, res) => {
  MonitoringSchema.find()
    .sort({ registerDate: -1 })
    .limit(30)
    .exec()
    .then((data) => {
      console.log(data)
      let chartData = {
        humidity: [],
        floorHumidity: [],
        temperature: [],
        coTwo: [],
      }
      data.map((item) => {
        chartData.humidity.push(item.temperature)
        chartData.floorHumidity.push(item.floorHumidity)
        chartData.temperature.push(item.temperature)
        chartData.coTwo.push(item.coTwo)
      })
      res.json(chartData)
    })
})

router.get('/last-monitoring', async (req, res) => {
  try {
    const lastRegister = await MonitoringSchema.findOne()
      .sort({ _id: -1 })
      .exec()
    res.json(lastRegister)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
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
