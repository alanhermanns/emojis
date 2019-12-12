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
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});

schema.virtual('pages', {
  ref: 'Page',
  localField: '_id',
  foreignField: 'bookId',
  options: {
    limit: 10
  }
});

module.exports = mongoose.model('Book', schema);
