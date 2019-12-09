require('dotenv').config();
const connect = require('../lib/utils/connect');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../lib/app');

const Note = require('../lib/models/Note');

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

  it('creates a note on POST', () => {
    return request(app)
      .post('/notes')
      .send({ title: 'first', body: 'dont forget!' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'first',
          body: 'dont forget!',
          __v: 0
        });
      });
  });

  it('gets all notes on GET', async() => {
    const notes = await Note.create([
      { title: 'first', body: 'it is good' },
      { title: 'second', body: 'this one is ok' },
      { title: 'third', body: 'not good' }
    ]);

    return request(app)
      .get('/notes')
      .then(res => {
        notes.forEach(note => {
          expect(res.body).toContainEqual({
            _id: note._id.toString(),
            title: note.title,
            body: note.body,
            __v: note.__v
          });
        });
      });
  });

  it('gets a note by id on GET', async() => {
    const note = await Note.create({
      title: 'first',
      body: 'really good!'
    });

    return request(app)
      .get(`/notes/${note._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: note._id.toString(),
          title: note.title,
          body: note.body,
          __v: note.__v
        });
      });
  });

  it('updates a note with PATCH', async() => {
    const note = await Note.create({
      title: 'first',
      body: 'really good!'
    });

    return request(app)
      .patch(`/notes/${note._id}`)
      .send({ title: 'ffirst' })
      .then(res => {
        expect(res.body).toEqual({
          _id: note._id.toString(),
          title: 'ffirst',
          body: 'really good!',
          __v: note.__v
        });
      });
  });

  it('can delete a Note with DELETE', async() => {
    const note = await Note.create({
      title: 'first',
      body: 'really good!'
    });

    return request(app)
      .delete(`/notes/${note._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: note._id.toString(),
          title: 'first',
          body: 'really good!',
          __v: note.__v
        });
      });
  });
});
