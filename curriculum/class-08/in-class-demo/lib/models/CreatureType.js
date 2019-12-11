const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  powers: [String],
  habitat: {
    type: String,
    required: true
  },
  weakness: [String],
  humanoid: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('CreatureType', schema);
