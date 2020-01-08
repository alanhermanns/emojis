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
  color: {
    type: String,
    enum: ['red', 'blue', 'yellow', 'white', 'brown']
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  }
});

module.exports = mongoose.model('Box', schema);
