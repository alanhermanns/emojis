require('dotenv').config();
const connect = require('../utils/connect');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
const seed = require('./seed');
const Location = require('../models/Location');
const Box = require('../models/Box');
const Item = require('../models/Item');

beforeAll(() => {
  connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return seed({ location: 5, boxes: 25, items: 100 });
});

const agent = request.agent(app);
beforeEach(() => {
  return agent
    .post('/api/v1/auth/login')
    .send({ email: 'test@test.com', password: 'password' });
});

afterAll(() => {
  return mongoose.connection.close();
});

const prepare = doc => JSON.parse(JSON.stringify(doc));

const createGetters = Model => {
  const modelName = Model.modelName;

  return {
    [`get${modelName}`]: () => Model.findOne().then(prepare),
    [`get${modelName}s`]: () => Model.find().then(docs => docs.map(prepare))
  };
};

module.exports = {
  ...createGetters(Location),
  ...createGetters(Box),
  ...createGetters(Item),
  getAgent: () => agent
  // getLocation: () => Location.findOne().then(prepare),
  // getLocations: () => Location.find().then(docs => docs.map(prepare)),
  // getBox: () => ,
  // getItem: () => item
};
