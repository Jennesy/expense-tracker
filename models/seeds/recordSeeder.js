const bcrypt = require('bcryptjs')
const db = require('../../config/mongoose')
const Record = require('../record')
const User = require('../user')
const records = require('./records.json')
const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}

db.once('open', () => {
  const { name, email, password } = SEED_USER
  bcrypt
    .genSalt(10)
    .then(salt => { return bcrypt.hash(password, salt) })
    .then(hash => { return User.create({ name, email, password: hash }) })
    .then(user => {
      return Promise.all(records.results.map(record => {
        const { name, category, date, merchant, amount } = record
        const userId = user._id
        return Record.create({ name, category, date, merchant, amount, userId })
      }))
        .then(() => {
          console.log('Add records done!')
          return db.close()
        }).then(() => {
          console.log('Database connection closed.')
        })
    })
})