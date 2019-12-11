const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  challengeRating: {
    type: Number,
    required: true,
    min: 1,
    max: 20
  },
  creatureType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CreatureType',
    required: true
  }
});

module.exports = mongoose.model('Creature', schema);
