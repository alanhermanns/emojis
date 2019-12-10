require('dotenv').config();
require('../lib/utils/connect')();

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');
const Paper = require('../lib/models/Paper');

describe('paper routes', () => {
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let paper;
  beforeEach(async() => {
    paper = await Paper.create({
      type: 'notecard',
      color: 'red',
      quantity: 20,
      size: [
        { height: 3, width: 5 },
        { height: 2, width: 3 }
      ]
    });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create paper', () => {
    return request(app)
      .post('/api/v1/paper')
      .send({
        type: 'notecard',
        color: 'white',
        quantity: 50,
        size: [
          { height: 3, width: 5 },
          { height: 2, width: 3 }
        ]
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          type: 'notecard',
          color: 'white',
          quantity: 50,
          size: [
            { _id: expect.any(String), height: 3, width: 5 },
            { _id: expect.any(String), height: 2, width: 3 }
          ],
          __v: 0
        });
      });
  });

  it('gets paper by id', async() => {
    return request(app)
      .get(`/api/v1/paper/${paper._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: paper._id.toString(),
          type: 'notecard',
          color: 'red',
          quantity: 20,
          size: [
            { _id: expect.any(String), height: 3, width: 5 },
            { _id: expect.any(String), height: 2, width: 3 }
          ],
          __v: 0
        });
      });
  });

  it('gets a list of paper', async() => {
    return request(app)
      .get('/api/v1/paper')
      .then(res => {
        expect(res.body).toEqual([{
          _id: paper._id.toString(),
          type: paper.type,
          color: paper.color,
          quantity: paper.quantity,
          size: [
            { _id: expect.any(String), height: 3, width: 5 },
            { _id: expect.any(String), height: 2, width: 3 }
          ],
          __v: 0
        }]);
      });
  });

  it('updates a paper by id', async() => {
    return request(app)
      .patch(`/api/v1/paper/${paper._id}`)
      .send({ quantity: 19 })
      .then(res => {
        expect(res.body).toEqual({
          _id: paper._id.toString(),
          type: 'notecard',
          color: 'red',
          quantity: 19,
          size: [
            { _id: expect.any(String), height: 3, width: 5 },
            { _id: expect.any(String), height: 2, width: 3 }
          ],
          __v: 0
        });
      });
  });

  it('deletes a paper by id', async() => {
    return request(app)
      .delete(`/api/v1/paper/${paper._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: paper._id.toString(),
          type: 'notecard',
          color: 'red',
          quantity: 20,
          size: [
            { _id: expect.any(String), height: 3, width: 5 },
            { _id: expect.any(String), height: 2, width: 3 }
          ],
          __v: 0
        });
      });
  });
});
