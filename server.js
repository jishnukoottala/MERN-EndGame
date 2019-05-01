require('dotenv').config()
require('./server/db-conn')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('./client/endgameapp/build/'))

// Mounting the routes
app.use('/api/characters/', require('./server/routes/character-routes'))

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/client/endgameapp/build/' })
})

const { PORT } = process.env
app.listen(PORT, () => {
  console.log('app started on port ', PORT)
})
