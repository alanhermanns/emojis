require('dotenv').config();
require('./lib/utils/connect')();

const Page = require('./lib/models/Page');
const Book = require('./lib/models/Book');

async function play() {
  Page
    .find({})
    .populate('bookId')
    .then(pages => console.log(pages));

  // Promise.all([
  //   Book.findById('5df1288e8af80106a0f90ba7'),
  //   Page.find({ bookId: '5df1288e8af80106a0f90ba7' })
  // ])
  //   .then(([book, pages]) => {
  //     console.log(book, pages);
  //   });
}

play()
  .then(() => console.log('done'));
