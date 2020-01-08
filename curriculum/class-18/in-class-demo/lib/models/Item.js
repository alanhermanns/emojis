const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    maxlength: 256
  },
  box: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Box',
    required: true
  }
});

module.exports = mongoose.model('Item', schema);
