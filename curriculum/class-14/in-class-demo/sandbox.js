// require('dotenv').config();
// require('./lib/utils/connect')();
const bcrypt = require('bcryptjs');

//2^10 -> 1024
console.log(bcrypt.hashSync('vtyltkttdrfrfhf', 14));

// const SALT = 'MY_SECURE_SALT';
// const md5 = require('md5');
// const mongoose = require('mongoose');

// const schema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// });

// const User = mongoose.model('User', schema);

// User
//   .create({
//     username: 'ryanbetterer',
//     email: 'ryanbetterer@spot.com',
//     password: md5(`${SALT}vtyltkttdrfrfhf`)
//   });
