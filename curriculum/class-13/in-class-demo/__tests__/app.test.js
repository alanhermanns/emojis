require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Movie = require('../lib/models/Movie');

describe('movies routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let releaseDate;
  let movie;
  beforeEach(async () => {
    releaseDate = new Date();
    movie = await Movie.create({
      budget: 1,
      genres: ['Comedy'],
      datasetId: 1234,
      imdbId: 'tt1234',
      language: 'en',
      title: 'Best Movie Ever',
      overview: 'Come watch',
      popularity: 21.12,
      releaseDate,
      revenue: 10000000000,
      runtime: 5,
      tagline: '!!'
    });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a new movie', () => {
    const releaseDate = new Date();
    return request(app)
      .post('/api/v1/movies')
      .send({
        budget: 1,
        genres: ['Comedy'],
        datasetId: 1234,
        imdbId: 'tt1234',
        language: 'en',
        title: 'Best Movie Ever',
        overview: 'Come watch',
        popularity: 21.12,
        releaseDate,
        revenue: 10000000000,
        runtime: 5,
        tagline: '!!'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          budget: 1,
          genres: ['Comedy'],
          datasetId: 1234,
          imdbId: 'tt1234',
          language: 'en',
          title: 'Best Movie Ever',
          overview: 'Come watch',
          popularity: 21.12,
          releaseDate: releaseDate.toISOString(),
          revenue: 10000000000,
          runtime: 5,
          tagline: '!!',
          __v: 0
        });
      });
  });

  it('gets a movie by id', () => {
    return request(app)
      .get(`/api/v1/movies/${movie.id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: movie.id,
          budget: 1,
          genres: ['Comedy'],
          datasetId: 1234,
          imdbId: 'tt1234',
          language: 'en',
          title: 'Best Movie Ever',
          overview: 'Come watch',
          popularity: 21.12,
          releaseDate: releaseDate.toISOString(),
          revenue: 10000000000,
          runtime: 5,
          tagline: '!!',
          __v: 0
        });
      });
  });

  it('get all movies', () => {
    return request(app)
      .get('/api/v1/movies')
      .then(res => {
        expect(res.body).toEqual([
          {
            _id: movie.id,
            budget: 1,
            genres: ['Comedy'],
            datasetId: 1234,
            imdbId: 'tt1234',
            language: 'en',
            title: 'Best Movie Ever',
            overview: 'Come watch',
            popularity: 21.12,
            releaseDate: releaseDate.toISOString(),
            revenue: 10000000000,
            runtime: 5,
            tagline: '!!',
            __v: 0
          }
        ]);
      });
  });

  it('updates a movie', () => {
    return request(app)
      .patch(`/api/v1/movies/${movie.id}`)
      .send({ title: 'Greatest Movie Ever' })
      .then(res => {
        expect(res.body).toEqual({
          _id: movie.id,
          budget: 1,
          genres: ['Comedy'],
          datasetId: 1234,
          imdbId: 'tt1234',
          language: 'en',
          title: 'Greatest Movie Ever',
          overview: 'Come watch',
          popularity: 21.12,
          releaseDate: releaseDate.toISOString(),
          revenue: 10000000000,
          runtime: 5,
          tagline: '!!',
          __v: 0
        });
      });
  });

  it('deletes a movie', () => {
    return request(app)
      .delete(`/api/v1/movies/${movie.id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: movie.id,
          budget: 1,
          genres: ['Comedy'],
          datasetId: 1234,
          imdbId: 'tt1234',
          language: 'en',
          title: 'Best Movie Ever',
          overview: 'Come watch',
          popularity: 21.12,
          releaseDate: releaseDate.toISOString(),
          revenue: 10000000000,
          runtime: 5,
          tagline: '!!',
          __v: 0
        });
      });
  });
});
