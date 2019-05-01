const mongoose = require('mongoose')
const { DB_CONNSTR, DB_USER, DB_PW } = process.env

console.log(' DB CONN is ')
mongoose
  .connect(
    DB_CONNSTR,
    { auth: { user: DB_USER, password: DB_PW }, useNewUrlParser: true }
  )
  .then(() => console.log('Successfully connected to Mongo DB .. '))
  .catch(err => console.log(err))
