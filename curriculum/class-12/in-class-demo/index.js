const fs = require('fs').promises;
const mongoose = require('mongoose');
const moment = require('moment');
const csv = require('csvtojson');

mongoose.connect('mongodb://localhost:27017/phone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

const schema = new mongoose.Schema({
  date: Date,
  contact: String,
  minutes: Number,
  callTo: String
});

const Call = mongoose.model('Call', schema);

fs.readdir('./csv')
  .then(files => {
    return Promise.all(
      files.map(file => {
        return csv({
          delimiter: ','
        })
          .fromFile(`./csv/${file}`)
      })
    )
  })
  .then(csvToJsonFiles => {
    const calls = csvToJsonFiles
      .flat()
      .map(call => ({
        date: moment(`${call.Date} ${call.Time}`, 'MM/DD/YYYY h:mmA').toISOString(),
        contact: call['Number Called'],
        minutes: call.Min,
        callTo: call['Call To']
      }))

    return Call.create(calls);
  })
  .then(() => console.log('done'));
