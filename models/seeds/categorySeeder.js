const db = require('../../config/mongoose')
const Category = require('../category')
const categories = require('./categories.json')

db.once('open', () => {
  Category.create(...categories.results).then(() => {
    console.log('Add categories done!')
    return db.close()
  }).then(() => {
    console.log('Database connection closed.')
  })
})