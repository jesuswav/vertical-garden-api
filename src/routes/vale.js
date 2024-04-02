const express = require('express')
// Schema import

const router = express.Router()

let valeState = 'false'

router.post('/vale', (req, res) => {
  const valeData = req.query.valeState
  console.log('Valor req', valeData)
  const booleanValue = valeData === 'true' ? true : false
  try {
    valeState = booleanValue
    console.log('Valor', valeState)
    res.send('Vale updated')
  } catch (error) {
    res.send(error)
  }
})

router.get('/vale', (req, res) => {
  // Configura los encabezados SSE
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  // Envía datos al cliente cada segundo
  const intervalId = setInterval(() => {
    console.log(valeState)
    res.json(valeState) // Envía el valor al cliente
  }, 2000)

  // Maneja la desconexión del cliente
  req.on('close', () => {
    clearInterval(intervalId) // Detiene el intervalo cuando el cliente se desconecta
    console.log('Cliente desconectado')
  })
})

module.exports = router
