require('dotenv').config();
require('./lib/utils/connect')();

const Page = require('./lib/models/Page');
const Book = require('./lib/models/Book');

async function play() {
  const book = await Book.create({
    coverUrl: 'hi',
    copyright: 'hi'
  });

  const pages = await Page.create([
    {
      headerText: 'hi',
      footerText: 'footer',
      bodyText: 'hihihi',
      bookId: book._id
    },
    {
      headerText: 'hi',
      footerText: 'footer',
      bodyText: 'byebye',
      bookId: book._id
    },
    {
      headerText: 'hi',
      footerText: 'footer',
      bodyText: 'ok',
      bookId: book._id
    }
  ]);

  Book
    .findById(book._id)
    .populate('pages')
    .then(book => {

      // res.send -> book.toJSON()
      // console.log -> book.toObject()
      console.log(book.toJSON({ virtuals: true }));
    });

  // Promise.all([
  //   Book.findById(boage.find({ bookId: book._id })ok._id),
  //   P
  // ])
  //   .then(([book, pages]) => {
  //     console.log(book, pages);
  //   });
}

play()
  .then(() => console.log('done'));
