const connection = require('../../config/connection');

const addPostQuery = ({ userId, textContent }) => connection.query('INSERT INTO posts (user_id , text_content) VALUES ($1 ,$2 ) returning *', [userId, textContent]);

module.exports = addPostQuery;
