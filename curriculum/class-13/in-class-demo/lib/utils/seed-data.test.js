const { parseGenres } = require('./seed-data');

describe('parse genres', () => {
  it('parses genres from csv', () => {
    const rawGenres = '[{\'id\': 12, \'name\': \'Drama\'}, {\'id\': 10, \'name\': \'Comedy\'}]';
    const genres = parseGenres(rawGenres);

    expect(genres).toEqual(['Drama', 'Comedy']);
  });
});
