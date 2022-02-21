/* eslint-disable @typescript-eslint/no-var-requires */
const { User } = require('./models');

async function up() {
  const founded = await User.findOne({ role: 'admin' });

  if (!founded) {
    await User.create({ password: '1234', username: 'admin', role: 'admin' });
  }
}

async function down() {}

module.exports = { up, down };
