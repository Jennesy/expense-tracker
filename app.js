const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}
var path = require('path')
const session = require('express-session')
const favicon = require('serve-favicon')
const flash = require('connect-flash')
const methodOverride = require('method-override')
require('./config/mongoose')
const usePassport = require('./config/passport')
const routes = require('./routes')
const categoryData = require('./models/categoryData')

// get category data from db once
;(async () => {
	Object.defineProperty(global, 'iconList', {
		value: await categoryData.getIconList(),
	})
	Object.defineProperty(global, 'categories', {
		value: await categoryData.getCategories(),
	})

	const port = process.env.PORT
	const app = express()

	app.use(express.static(path.join(__dirname, 'public')))
	app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(methodOverride('_method'))
	app.use(
		session({
			secret: process.env.SESSION_SECRET,
			resave: false,
			saveUninitialized: true,
		})
	)
	usePassport(app)
	app.use(flash())
	app.use(async (req, res, next) => {
		res.locals.user = req.user
		res.locals.categories = categories
		res.locals.isAuthenticated = req.isAuthenticated()
		res.locals.success_msg = req.flash('success_msg')
		res.locals.warning_msg = req.flash('warning_msg')
		next()
	})
	// set template engine
	app.engine(
		'hbs',
		exphbs({
			defaultLayout: 'main',
			extname: '.hbs',
			helpers: {
				getIcon(category) {
					return iconList[category]
				},
				eq(a, b) {
					return a === b
				},
				toString(date) {
					return date ? date.toLocaleDateString('en-CA') : ''
				},
			},
		})
	)
	app.set('view engine', 'hbs')
	app.use(routes)
	app.listen(port, () => {
		console.log(`Server running on http://localhost:${port}`)
	})
})()
