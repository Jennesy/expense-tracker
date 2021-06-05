const Category = require('./category')
const categories = {}
// { categoryName: iconClass }
function getIconList() {
  return new Promise((resolve, reject) => {
    Category.find()
      .lean()
      .then(categoryList => {
        categoryList.forEach((item) => { categories[`${item.name}`] = item.icon })
      })
      .catch(err => reject(err))
    resolve(categories)
  })
}

module.exports = getIconList