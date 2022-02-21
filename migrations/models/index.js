/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./user.model');

mongoose.connect(process.env.MIGRATE_dbConnectionUri, {
  useNewUrlParser: true,
});

module.exports = { User };
