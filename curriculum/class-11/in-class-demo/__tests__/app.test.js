require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Profile = require('../lib/models/Profile');

jest.mock('../lib/services/futurama.js', () => ({
  getQuote() {
    return Promise.resolve('My futurama quote');
  }
}));

jest.mock('../lib/services/simpsons.js', () => ({
  getQuote() {
    return Promise.resolve('My simpsons quote');
  }
}));

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a new profile', () => {
    return request(app)
      .post('/api/v1/profiles')
      .send({ name: 'testProfile', tvShow: 'futurama' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'testProfile',
          tvShow: 'futurama',
          tagline: 'My futurama quote',
          __v: 0
        });
      });
  });

  it('refreshes a profiles tagline', async() => {
    const profile = await Profile
      .create({ name: 'test', tvShow: 'simpsons', tagline: 'no good' });

    return request(app)
      .patch(`/api/v1/profiles/${profile.id}/refresh`)
      .then(res => {
        expect(res.body.tagline).not.toEqual('no good');
        expect(res.body.tagline).toEqual('My simpsons quote');
      });
  });
});
