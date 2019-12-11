const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  headerText: {
    type: String,
    required: true
  },
  bodyText: {
    type: String,
    required: true
  },
  footerText: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Page', schema);
