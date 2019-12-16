const mongoose = require('mongoose');
const { getQuote: getSimpsonQuote } = require('../services/simpsons');
const { getQuote: getFuturamaQuote } = require('../services/futurama');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tvShow: {
    type: String,
    required: true,
    enum: ['simpsons', 'futurama']
  },
  tagline: {
    type: String,
    required: true
  }
});

schema.statics.refreshTagline = function(id) {
  // find profile
  return this
    .findById(id)
    .then(profile => {
      // get new quote
      if(profile.tvShow === 'simpsons') {
        return getSimpsonQuote();
      } else if(profile.tvShow === 'futurama') {
        return getFuturamaQuote();
      }
    })
    .then(quote => {
      // update profile
      return this
        .findByIdAndUpdate(id, { tagline: quote }, { new: true });
    });
};

module.exports = mongoose.model('Profile', schema);
