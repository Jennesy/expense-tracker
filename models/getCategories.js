const Category = require('./category')
//[ { category1 }, { category2 }, ...]
function getCategories() {
  const categories = []
  return new Promise((resolve, reject) => {
    Category.find()
      .lean()
      .sort({ _id: 'asc' })
      .then(categoryList => {
        categoryList.forEach((item) => { categories.push(item) })
        resolve(categories)
      })
  })

}
module.exports = getCategories