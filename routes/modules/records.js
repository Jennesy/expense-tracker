// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Category = require('../../models/category')
const Record = require('../../models/record')

// 定義首頁路由
router.get('/new', (req, res) => {
  //@新增資料頁面
  //partial template "new"
})

router.post('/', (req, res) => {
  //新增資料到資料庫
  //redirect
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