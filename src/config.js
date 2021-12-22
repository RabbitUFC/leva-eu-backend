require('dotenv').config();

module.exports = {
  debug: process.env.DEBUG === 'true',
  db: {
    uri: process.env.DB_URI,
  },
};
