const db = require('../../config/mongoose')
const Record = require('../record')
const records = require('./records.json')

db.once('open', () => {
  Record.create(...records.results).then(() => {
    console.log('Add records done!')
    return db.close()
  }).then(() => {
    console.log('Database connection closed.')
  })
})