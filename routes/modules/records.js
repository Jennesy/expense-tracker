// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Record = require('../../models/record')

// 定義首頁路由
router.get('/new', (req, res) => {
	res.render('new')
})

router.post('/', (req, res) => {
	const userId = req.user._id
	const { name, date, category, merchant, amount } = req.body
	return Record.create({
		name,
		date: date ? date : new Date(),
		category,
		merchant,
		amount,
		userId,
	})
		.then(() => {
			res.redirect('/')
		})
		.catch((error) => {
			console.log(error)
			req.flash('warning_msg', '新增失敗，請稍後再試。')
			res.redirect('/')
		})
})

router.get('/:id/edit', (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	return Record.findOne({ _id, userId })
		.lean()
		.then((record) => {
			res.render('edit', { record })
		})
		.catch((error) => console.log(error))
})

router.put('/:id', (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	const { name, date, category, merchant, amount } = req.body
	console.log('date', date)
	return Record.findOne({ _id, userId })
		.then((record) => {
			record.name = name
			record.date = date ? date : record.date
			record.category = category
			record.merchant = merchant
			record.amount = amount
			return record.save()
		})
		.then(() => res.redirect(`/`))
		.catch((error) => {
			console.log(error)
			req.flash('warning_msg', '更新失敗，請稍後再試。')
			res.redirect(`/records/${_id}/edit`)
		})
})

router.delete('/:id', (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	return Record.findOne({ _id, userId })
		.then((record) => record.remove())
		.then(() => res.redirect('/'))
		.catch((error) => {
			console.log(error)
			req.flash('warning_msg', '刪除失敗，請稍後再試。')
			res.redirect('/')
		})
})
// 匯出路由模組
module.exports = router
