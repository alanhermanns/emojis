const { getLocation, getLocations } = require('../lib/helpers/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('can create a location via POST', () => {
    return request(app)
      .post('/api/v1/locations')
      .send({ name: 'garage',  description: 'back left corner' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'garage',
          description: 'back left corner',
          __v: 0
        });
      });
  });

  it('can get all locations via GET', async() => {
    const locations = await getLocations();

    return request(app)
      .get('/api/v1/locations')
      .then(res => {
        expect(res.body).toHaveLength(locations.length);
        locations.forEach(location => {
          expect(res.body).toContainEqual(location);
        });
      });
  });

  it('can get a location by id via GET', async() => {
    const location = await getLocation();

    return request(app)
      .get(`/api/v1/locations/${location._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: location._id,
          name: location.name,
          description: location.description,
          __v: 0
        });
      });
  });

  it('can update a location by id via PATCH', async() => {
    const location = await getLocation();

    return request(app)
      .patch(`/api/v1/locations/${location._id}`)
      .send({ name: 'attic' })
      .then(res => {
        expect(res.body).toEqual({
          _id: location._id,
          name: 'attic',
          description: location.description,
          __v: 0
        });
      });
  });

  it('can delete a location by id via DELETE', async() => {
    const location = await getLocation();

    return request(app)
      .delete(`/api/v1/locations/${location._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: location._id,
          name: location.name,
          description: location.description,
          __v: 0
        });
      });
  });
});
