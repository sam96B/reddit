const { Pool } = require('pg');
// eslint-disable-next-line import/no-unresolved
require('env2')('.env');

const {
  TEST_DB_URL,
  DEV_DEV_URL,
  DATABASE_URL,
  NODE_ENV,
} = process.env;
let url;
switch (NODE_ENV) {
  case 'production':
    url = DATABASE_URL;
    break;
  case 'development':
    url = DEV_DEV_URL;
    break;
  case 'test':
    url = TEST_DB_URL;
    break;
  default:
    throw Error('No DB URL');
}

const connection = new Pool({
  connectionString: url,
  ssl: NODE_ENV !== 'production' ? false : { rejectUnauthorized: false },
});

module.exports = connection;
