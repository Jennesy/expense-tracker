const Category = require('./category')
const categories = {}

function getIconList() {
  Category.find()
    .lean()
    .then(categoryList => {
      categoryList.forEach((item) => { categories[`${item.name}`] = item.icon })
    })
  return categories
}

module.exports = getIconList