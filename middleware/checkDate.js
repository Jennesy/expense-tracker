module.exports = (req, res, next) => {
  const errors = []
  if (req.query.allDate) {
    req.query.startDate = ''
    req.query.endDate = ''
  }
  if (new Date(req.query.startDate) > new Date(req.query.endDate)) {
    req.query.startDate = ''
    req.query.endDate = ''
    errors.push({ message: '起始日期須早於終止日期。' })
  }
  res.locals.errors = errors
  return next()
}