const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const getTokenRouter = require('express').Router()

getTokenRouter.post('/token', (req, res) => {
  const { name } = req.body

  const authorization = req.get('Authorization')
  let token = ''
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  const decodedToken = jwt.verify(token, process.env.SECRET)

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'Token missing or invalid' })
  } else {
    console.log(decodedToken)
    return res.send('Token correct: ')
  }
})

module.exports = getTokenRouter
