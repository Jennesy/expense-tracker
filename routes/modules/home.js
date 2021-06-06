// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Record = require('../../models/record')
const getTotalAmount = require('../../models/getTotalAmount')
const checkDate = require('../../middleware/checkDate')


// 定義首頁路由
router.get('/', checkDate, (req, res) => {
  const errors = res.locals.errors
  const userId = req.user._id
  const filter = req.query.filter || ''
  const startDate = req.query.startDate || ''
  const endDate = req.query.endDate || ''
  Record.find({ userId })
    .lean()
    .sort({ date: 'desc' })
    .then(records => {
      const recordList = []
      if (startDate && endDate) {
        if (filter === '') {
          recordList.push(...records.filter(record => { return record.date >= new Date(startDate) && record.date <= new Date(endDate) }))
        } else {
          recordList.push(...records.filter(record => { return record.date >= new Date(startDate) && record.date <= new Date(endDate) && record.category === filter }))
        }
      } else {
        if (filter === '') {
          recordList.push(...records)
        } else {
          recordList.push(...records.filter(record => { return record.category === filter }))
        }
        if ((startDate && !endDate) || (!startDate && endDate)) {
          errors.push({ message: '起訖時間皆須填寫。' })
        }
      }
      const totalAmount = getTotalAmount(recordList)
      res.render('index', { recordList, totalAmount, filter, startDate, endDate, errors })
    })
})
// 匯出路由模組
module.exports = router