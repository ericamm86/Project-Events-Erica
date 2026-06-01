if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL) {
  process.env.NODE_ENV = 'development';
}

require('pg');
require('pg-hstore');

module.exports = require('../app');
