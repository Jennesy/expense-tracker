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
// 匯出路由模組
module.exports = router