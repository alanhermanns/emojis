const csv = require('csvtojson');
const Movie = require('../models/Movie');

const parseGenres = rawGenres => {
  return JSON.parse(rawGenres.replace(/'/g, '"'))
    .map(({ name }) => name);
};

function seedData() {
  return csv()
    .fromFile(__dirname + '/../../csv/movies_metadata.csv')
    .then(movies => {
      return movies.map(movie => ({
        budget: movie.budget,
        genres: parseGenres(movie.genres),
        datasetId: movie.id,
        imdbId: movie.imdb_id,
        language: movie.original_language,
        title: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        releaseDate: movie.release_date,
        revenue: movie.revenue,
        runtime: movie.runtime,
        tagline: movie.tagline
      }));
    })
    .then(movies => Movie.create(movies));
}

module.exports = {
  parseGenres,
  seedData
};
