const connection = require('../../config/connection');

const getUserByIdQuery = (
   id 
) => connection.query('select password from users where id = $1;', [id]);

module.exports = getUserByIdQuery;
