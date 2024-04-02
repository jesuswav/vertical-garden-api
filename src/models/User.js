const { Schema, model } = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator')

const UserSchemaTest = new Schema({
  username: String,
  name: String,
  passwordHash: String,
})

UserSchemaTest.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject._v

    delete returnedObject.passwordHash
  },
})

const User = model('User', UserSchemaTest)

// UserSchemaTest.plugin(uniqueValidator)

module.exports = User
