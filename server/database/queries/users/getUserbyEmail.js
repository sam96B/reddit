const connection = require('../../config/connection');

const getUserByEmailQuery = (
  { email },
) => connection.query('select id from users where email = $1;', [email]);

module.exports = getUserByEmailQuery;
