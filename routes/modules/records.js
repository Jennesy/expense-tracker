// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Category = require('../../models/category')
const Record = require('../../models/record')

const categories = []
Category.find()
  .lean()
  .sort({ _id: 'asc' })
  .then(categoryList => { categoryList.forEach((item) => { categories.push(item) }) })

// 定義首頁路由
router.get('/new', (req, res) => {
  res.render('new', { categories })
})

router.post('/', (req, res) => {
  const { name, date, category, amount } = req.body
  return Record.create({ name, date, category, amount })
    .then(() => { res.redirect('/') })
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  //@資料的編輯頁
  //partial template "edit"
})

router.put('/:id', (req, res) => {
  //儲存修改資料
  //redirect
})

router.delete('/:id', (req, res) => {
  //刪除資料
  //redirect
})
// 匯出路由模組
module.exports = router