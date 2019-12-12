require('dotenv').config();
require('./lib/utils/connect')();

const Dog = require('./lib/models/Dog');

async function play() {
  const dog = await Dog.create({
    name: 'spot',
    dob: new Date('2014-12-12T14:00:00'),
    weight: '20 lbs'
  });

  console.log(dog.age);

  dog.age = 7;

  console.log(dog.toJSON({ virtuals: true }));
}

play()
  .then(() => console.log('done'));
