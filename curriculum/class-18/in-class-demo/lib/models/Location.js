const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    maxlength: 256
  }
});

module.exports = mongoose.model('Location', schema);
