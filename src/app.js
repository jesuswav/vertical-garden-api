const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const userRoutes = require('./routes/users')
const risksRoutes = require('./routes/risks')
const plantsRoutes = require('./routes/plants')
const flowerpotRoutes = require('./routes/flowerpots')
const monitoringRoutes = require('./routes/monitoring')

const app = express()
const PORT = process.env.port || 3000
const LAN_IP = '192.168.0.106'

// -- Middlewares
app.use(express.json())
app.use(
  '/api',
  userRoutes,
  risksRoutes,
  plantsRoutes,
  flowerpotRoutes,
  monitoringRoutes
)

app.get('/', (req, res) => {
  res.send('Welcome to the Garden API')
})

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error(error))

app.listen(PORT, LAN_IP, () =>
  console.log(`Servidor API corriendo en http://${LAN_IP}:${PORT}`)
)
