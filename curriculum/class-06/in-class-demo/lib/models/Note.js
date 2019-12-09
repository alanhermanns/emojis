const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 10
  },
  body: {
    type: String,
    required: true,
    maxlength: 200
  }
});

module.exports = mongoose.model('Note', schema);
