const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  goal: {
    type: Number,
    required: true
  },
  current: {
    type: Number,
    required: true,
    default: 0,
    validate: {
      validator: function(value) {
        return value <= this.goal;
      }
    }
  }
});

module.exports = mongoose.model('Habit', schema);
