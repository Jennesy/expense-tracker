const { results: categories } = require('./seeds/categories.json')

function getTotalAmount(records) {
	let totalAmount = 0
	records.forEach((record) => {
		totalAmount += record.amount
	})
	return totalAmount
}

function getPercentage(records) {
	const data = {}
	records.forEach((record) => {
		if (!data[record.category]) {
			const { color } = categories.find(
				(category) => category.name === record.category
			)
			data[record.category] = { amount: record.amount, color }
		} else {
			data[record.category].amount += record.amount
		}
	})
	return data
}
module.exports = { getTotalAmount, getPercentage }
