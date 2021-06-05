const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
require('./config/mongoose')
const routes = require('./routes')
const getCategories = require('./models/getCategories')// [ { category1 }, { category2 }, ...]
const getIconList = require('./models/getIconList') // { categoryName: iconClass }

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(async (req, res, next) => {
  res.locals.categories = await getCategories()
  console.log(res.locals.categories)
  Object.defineProperty(global, "icon", {
    value: await getIconList()
  })
  next()
})
// set template engine
app.engine('hbs', exphbs({
  defaultLayout: 'main', extname: '.hbs',
  helpers: {
    getIcon(category) {
      return icon[category]
    },
    eq(a, b) {
      return a === b
    }
  }
}))
app.set('view engine', 'hbs')
app.use(routes)
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

