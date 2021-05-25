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
  .catch(error => console.log(error))

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
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then(record => {
      res.render('edit', { record, categories })
    })
    .catch(error => console.log(error))

  //@資料的編輯頁
  //partial template "edit"
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, date, category, amount } = req.body
  return Record.findById(id)
    .then(record => {
      record.name = name
      record.date = date
      record.category = category
      record.amount = amount
      return record.save()
    })
    .then(() => res.redirect(`/`))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
// 匯出路由模組
module.exports = router