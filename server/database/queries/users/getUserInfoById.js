const connection = require('../../config/connection');

const getUserInfoByIdQuery = (
  id,
) => connection.query('select img_url,username from users where id = $1;', [id]);

module.exports = getUserInfoByIdQuery;
