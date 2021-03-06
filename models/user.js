var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  entries: [{ type: Schema.Types.ObjectId, ref: 'Entry' }]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
