// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Category = require('../../models/category')
const Record = require('../../models/record')

// 定義首頁路由
router.get('/', (req, res) => {
  //從資料庫提取資料
  //使用partial template "index"
})
// 匯出路由模組
module.exports = router