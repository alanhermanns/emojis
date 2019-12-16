# Mongoose Methods

## Resources

* [Static Methods](https://mongoosejs.com/docs/guide.html#statics)
* [Methods](https://mongoosejs.com/docs/guide.html#methods)

## Agenda

* static methods
* instance methods

## Static Methods

Static methods are methods that exist on the model.

```js
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

personSchema.statics.findByIdWithDogs = function(id) {
  return Promise.all([
    this.findById(id),
    this.model('Dog').find({ owner: id })
  ])
    .then(([person, dogs]) => {
      return { ...person.toJSON(), dogs };
    });
};

module.exports = mongoose.model('Person', personSchema);

// another file
Person
  .findByIdWithDogs(id)
```

## Instance methods

Instance methods are methods that exist on an instance
of a model.

```js
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

personSchema.methods.getDogs = function(id) {
  return this.model('Dog')
    .find({ owner: this._id })
}

module.exports = mongoose.model('Person', personSchema);

// another file
Person
  .findById(id)
  .then(person => {
    return person.getDogs();
  })
  .then(dogs => {
    console.log(dogs);
  });
```
