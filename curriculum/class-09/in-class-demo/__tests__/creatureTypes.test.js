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

  let unicorn;
  let unicorns;
  beforeEach(async() => {
    unicorn = await CreatureType
      .create({
        type: 'Unicorn',
        powers: ['love', 'rainbows', 'invisibility', 'speed'],
        habitat: 'The Wild',
        weakness: ['internet'],
        humanoid: false
      });

    unicorns = await Creature.create([
      { name: 'lord', challengeRating: 2, creatureType: unicorn._id },
      { name: 'spot', challengeRating: 20, creatureType: unicorn._id },
      { name: 'unico', challengeRating: 15, creatureType: unicorn._id }
    ]);
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('create a new creature type with a POST', () => {
    return request(app)
      .post('/api/v1/creatureTypes')
      .send({
        type: 'Mermaid',
        powers: ['splash', 'swim', 'drown'],
        habitat: 'Under the Sea',
        weakness: ['land', 'electricity'],
        humanoid: true
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          type: 'Mermaid',
          powers: ['splash', 'swim', 'drown'],
          habitat: 'Under the Sea',
          weakness: ['land', 'electricity'],
          humanoid: true,
          __v: 0
        });
      });
  });

  it('gets a creature type by id with GET', () => {
    return request(app)
      .get(`/api/v1/creatureTypes/${unicorn._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: unicorn._id.toString(),
          type: 'Unicorn',
          powers: ['love', 'rainbows', 'invisibility', 'speed'],
          habitat: 'The Wild',
          weakness: ['internet'],
          humanoid: false,
          creatures: JSON.parse(JSON.stringify(unicorns)),
          __v: 0
        });
      });
  });
});
