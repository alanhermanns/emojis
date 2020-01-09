const chance = require('chance').Chance();
const User = require('../models/User');
const Location = require('../models/Location');
const Box = require('../models/Box');
const Item = require('../models/Item');

module.exports = async({ location = 10, boxes = 50, items = 100 } = {}) => {
  await User.create([...Array(1)].map((_, i) => ({
    email: `test${i}@test.com`,
    password: 'password'
  })));

  const locations = await Location.create([...Array(location)].map(() => ({
    name: chance.name(),
    description: chance.sentence()
  })));

  const createdBoxes = await Box.create([...Array(boxes)].map((_, i) => ({
    name: `Box ${i}`,
    description: chance.sentence(),
    color: chance.pickone(['red', 'blue', 'white', 'brown', 'yellow']),
    location: chance.pickone(locations.map(location => location._id))
  })));

  await Item.create([...Array(items)].map(() => ({
    name: chance.word(),
    description: chance.sentence(),
    box: chance.pickone(createdBoxes.map(box => box._id))
  })));
};
