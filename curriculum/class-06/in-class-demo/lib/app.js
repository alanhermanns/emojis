const express = require('express');
const app = express();
const Note = require('./models/Note');

app.use(express.json());

app.post('/notes', (req, res) => {
  Note
    .create(req.body)
    .then(note => res.send(note));
});

app.get('/notes', (req, res) => {
  Note
    .find()
    .then(notes => res.send(notes));
});

app.get('/notes/:noteId', (req, res) => {
  Note
    .findById(req.params.noteId)
    .then(note => res.send(note));
});

app.patch('/notes/:noteId', (req, res) => {
  Note
    .findByIdAndUpdate(req.params.noteId,
      req.body,
      { new: true })
    .then(note => res.send(note));
});

app.delete('/notes/:noteId', (req, res) => {
  Note
    .findByIdAndDelete(req.params.noteId)
    .then(note => res.send(note));
});

module.exports = app;
