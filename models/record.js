const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: Date.now
  },
  date: {
    type: Date,
    default: "其他"
  },
  amount: {
    type: Number,
    required: true
  }
})
module.exports = mongoose.model('Record', recordSchema)