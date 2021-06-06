const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')
const User = require('../../models/user')

router.get('/login', (req, res) => {
  return res.render('login')
})
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '你已經成功登出。')
  res.redirect('/users/login')
})
router.get('/register', (req, res) => {
  return res.render('register')
})
router.post('/register', (req, res) => {
  const errors = []
  const { name, email, password, confirmPassword } = req.body
  if (!name || !email || !password || !confirmPassword) {
    errors.push({ message: '所有欄位都必須填寫！' })
  }
  if (password !== confirmPassword) {
    errors.push({ message: 'Password 與 Confirm Password不相符。' })
  }
  if (errors.length) {
    return res.render('register', { name, email, password, confirmPassword, errors })
  }
  User.findOne({ email })
    .then(user => {
      if (user) {
        errors.push({ message: '此 Email 已被使用' })
        return res.render('register', { name, email, password, confirmPassword, errors })
      }
      return bcrypt
        .genSalt(10)
        .then(salt => { return bcrypt.hash(password, salt) })
        .then(hash => {
          return User.create({ name, email, password: hash })
        })
        .then(() => {
          req.flash('success_msg', '你已註冊成功！')
          req.flash('warning_msg', '請先登入！')
          res.redirect('/users/login')
        })
        .catch(err => console.log(err))
    })
})
// 匯出路由模組
module.exports = router