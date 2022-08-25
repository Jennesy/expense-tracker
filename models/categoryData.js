const Category = require('./category')

module.exports = {
	getIconList: function () {
		const categories = {}
		// { categoryName: iconClass }
		return new Promise((resolve, reject) => {
			Category.find()
				.lean()
				.then((categoryList) => {
					categoryList.forEach((item) => {
						categories[`${item.name}`] = item.icon
					})
				})
				.catch((err) => reject(err))
			resolve(categories)
		})
	},
	getCategories: function () {
		const categories = []
		//[ { category1 }, { category2 }, ...]
		return new Promise((resolve, reject) => {
			Category.find()
				.lean()
				.sort({ _id: 'asc' })
				.then((categoryList) => {
					categoryList.forEach((item) => {
						categories.push(item)
					})
					resolve(categories)
				})
		})
	},
}
