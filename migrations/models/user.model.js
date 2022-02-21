/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  role: String,
  password: String,
  username: String,
});

module.exports = mongoose.model('user', UserSchema);
