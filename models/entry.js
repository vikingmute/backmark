var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var entrySchema = new Schema({
  title:  String,
  content: String,
  time: { type: Date, default: Date.now },
  _author: { type: Number, ref: 'User' }
});

var Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
