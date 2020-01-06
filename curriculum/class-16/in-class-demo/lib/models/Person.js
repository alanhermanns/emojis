const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  dogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dog',
    required: true
  }
});
