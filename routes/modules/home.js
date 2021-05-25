// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Category = require('../../models/category')
const Record = require('../../models/record')
const getTotalAmount = require('../../models/getTotalAmount')

const categories = []
Category.find()
  .lean()
  .sort({ _id: 'asc' })
  .then(categoryList => { categoryList.forEach((item) => { categories.push(item) }) })

// 定義首頁路由
router.get('/', (req, res) => {
  const filter = req.query.filter || ''
  Record.find()
    .lean()
    .sort({ date: 'desc' })
    .then(records => {
      const recordList = []
      if (filter === '') {
        recordList.push(...records)
      } else {
        recordList.push(...records.filter(record => { return record.category === filter }))
      }
      const totalAmount = getTotalAmount(recordList)
      res.render('index', { recordList, categories, totalAmount, filter })
    })
})
// 匯出路由模組
module.exports = router