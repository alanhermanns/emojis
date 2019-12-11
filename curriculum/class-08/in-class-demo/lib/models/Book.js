const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  coverUrl: {
    type: String,
    required: true
  },
  copyright: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Book', schema);
