const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/phone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

const schema = new mongoose.Schema({
  count: Number,
  date: Date,
  contact: String,
  minutes: Number
})

const Call = mongoose.model('Call', schema)

const moment = require('moment');
const fs = require('fs').promises
const csv = require('csvtojson')

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
  .then(json => {
    return Call.create(
      json.flat().map(call => {
        const dateTime = moment(call.Date + ' ' + call.Time, "MM/DD/YYYY HH:mmA")
        return {
          count: call.Count,
          date: dateTime.toISOString(),
          contact: call['Number Called'],
          minutes: call.Min
        }
      })
    )
  });
