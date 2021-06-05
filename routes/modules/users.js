const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../../models/user')

router.get('/login', (req, res) => {
  res.render('login')
})
router.post('/login', (req, res) => {

})
router.get('/register', (req, res) => {
  res.render('register')
})
router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  User.findOne({ email })
    .then(user => {
      if (user) {
        console.log('User already exists.')
        res.render('register', { name, email, password, confirmPassword })
      }
      bcrypt
        .genSalt(10)
        .then(salt => { return bcrypt.hash(password, salt) })
        .then(hash => {
          User.create({ name, email, password: hash })
        })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    })
})
// 匯出路由模組
module.exports = router