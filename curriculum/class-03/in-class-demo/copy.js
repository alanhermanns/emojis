const fs = require('fs').promises;

module.exports = (src, dest) => {
  return fs.readFile(src, 'utf8')
    .then(contents => fs.writeFile(dest, contents));
};
