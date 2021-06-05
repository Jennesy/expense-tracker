// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const User = require('../../models/user')

// 定義首頁路由
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
      User.create({ name, email, password, confirmPassword })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    })
})
// 匯出路由模組
module.exports = router