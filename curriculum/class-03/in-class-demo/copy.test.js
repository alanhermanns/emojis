const fs = require('fs').promises;
const copy = require('./copy');

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(() => Promise.resolve('My File Contents')),
    writeFile: jest.fn(() => Promise.resolve())
  }
}));

describe('copy function', () => {
  it('can copy a file from src to dest', () => {
    return copy('./Colors.js', './Colors-copy')
      .then(() => {
        expect(fs.readFile).toHaveBeenLastCalledWith('./Colors.js', 'utf8');
        expect(fs.writeFile).toHaveBeenLastCalledWith('./Colors-copy', 'My File Contents');
      });
    // .then(() => {
    //   return Promise.all([
    //     fs.readFile('./Colors.js', 'utf8'),
    //     fs.readFile('./Colors-copy', 'utf8')
    //   ]);
    // })
    // .then(([original, copied]) => {
    //   expect(copied).toEqual(original);
    // });
  });
});
