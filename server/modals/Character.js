const mongoose = require('mongoose')

const CharacterSchema = mongoose.Schema({
  character: String,
  dateCreated: Date
})

const Character = mongoose.model('Character', CharacterSchema)

module.exports = Character
