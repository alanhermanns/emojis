require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const CreatureType = require('../lib/models/CreatureType');
const Creature = require('../lib/models/Creature');

describe('creatureTypes routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let unicornCreatureType;
  let creature;
  beforeEach(async() => {
    unicornCreatureType = await CreatureType
      .create({
        type: 'Unicorn',
        powers: ['love', 'rainbows', 'invisibility', 'speed'],
        habitat: 'The Wild',
        weakness: ['internet'],
        humanoid: false
      });

    creature = await Creature
      .create({
        name: 'spot',
        challengeRating: 20,
        creatureType: unicornCreatureType._id
      });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a creature with a POST', () => {
    return request(app)
      .post('/api/v1/creatures')
      .send({
        name: 'spot',
        challengeRating: 5,
        creatureType: unicornCreatureType._id
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'spot',
          challengeRating: 5,
          creatureType: unicornCreatureType._id.toString(),
          __v: 0
        });
      });
  });

  it('can get a creature by its id', () => {
    return request(app)
      .get(`/api/v1/creatures/${creature._id}`)
      .then(res => {
        console.log(res.body);
        expect(res.body).toEqual({
          _id: creature._id.toString(),
          name: 'spot',
          challengeRating: 20,
          creatureType: JSON.parse(JSON.stringify(unicornCreatureType)),
          __v: 0
        });
      });
  });
});
