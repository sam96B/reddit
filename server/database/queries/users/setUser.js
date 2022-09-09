const connection = require('../../config/connection');

const setUserQuery = ({
  userName, email, hashedPassword, gender, imgUrl,
}) => connection.query('INSERT INTO users(username  , password,email  , gender ,img_url ) VALUES (($1), ($2), ($3),($4),($5)) RETURNING id;', [userName, hashedPassword, email, gender, imgUrl]);

module.exports = setUserQuery;
