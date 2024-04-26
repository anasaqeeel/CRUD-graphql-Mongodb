const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  status: Boolean
});

const Todo = mongoose.model('Todo', todoSchema, 'details');

module.exports = Todo;