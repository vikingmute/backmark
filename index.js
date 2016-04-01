var express = require('express');
var bodyParser = require('body-parser');
var EntryModel = require('./models/entry');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());

var db = mongoose.connect("mongodb://localhost");

app.get('/api/entries', function(req, res) {
  EntryModel.find({}).exec(function(err, data) {
    if (!err) {
      res.json(data);
    }
  });
});

app.get('/api/entry/:id', function(req, res) {
  var id = req.params.id * 1;
  EntryModel.findOne({'_id': id}, function(err, data) {
    if (!err) {
      res.json(data);
    }
  });
});

app.post('/api/entries', function(req, res) {
  var data = req.body;
  EntryModel.create(data, function(err, data) {
    if (!err) {
      res.json(data);
    }
  })
});

app.put('/api/entries/:id', function(req, res) {
  var data = req.body;
  var id = req.params.id * 1;
  var query = {'_id': id};
  EntryModel.findOneAndUpdate(query, data, function(err, data) {
    if (!err) {
      res.json(data);
    }
  })
});

app.delete('/api/entries/:id', function(req, res) {
  var id = req.params.id * 1;
  EntryModel.remove({'_id': id}, function(err, data) {
    if (!err) {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('magic happens');
});
