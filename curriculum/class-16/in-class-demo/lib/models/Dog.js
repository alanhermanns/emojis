const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  weight: String,
  settings: Object
}, {
  toJSON: {
    virtuals: true
  }
});

// get -> Dog.findById('someID').then(myDog => myDog.firstLetter);
// set -> Dog.findById('someID').then(myDog => myDog.firstLetter = 'b');
schema.virtual('firstLetter')
  .get(function() {
    return this.name[0];
  })
  .set(function(newFirstLetter) {
    this.name = `${newFirstLetter}${this.name.slice(1)}`;
  });

// $lookup
// Dog.findById('someID').then(myDog => myDog.owners);
schema.virtual('owner', {
  ref: 'Person',
  localField: '_id',
  foreignField: 'dogId'
});

// Dog.findByName('spot').then(allSpots => console.log(allSpots));
schema.statics.findByName = function(name) {
  return this
    .find({ name });
};

// Dog.findById('someID').then(myDog => myDog.findSimilar());
schema.methods.findSimilar = function() {
  const currentDog = this;
  return this
    .model()
    .find({ name: currentDog.name, age: currentDog.age });
};

// collection -> dogs
module.exports = mongoose.model('Dog', schema);
