if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL) {
  process.env.NODE_ENV = 'development';
}

module.exports = require('../app');
