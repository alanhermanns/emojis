const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  weight: {
    type: String,
    required: true
  }
});

schema.virtual('age')
  .get(function() {
    const now = new Date();
    return now.getFullYear() - this.dob.getFullYear();
  })
  .set(function(val) {
    const currentBirthYear = this.dob.getFullYear();
    const diff = val - this.age;
    this.dob.setYear(currentBirthYear - diff);
  });

module.exports = mongoose.model('Dog', schema);
