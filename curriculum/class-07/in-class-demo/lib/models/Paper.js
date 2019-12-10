const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  height: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true
  }
});

const schema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: [sizeSchema],
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Paper', schema);
