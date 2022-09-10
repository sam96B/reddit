const connection = require('../../../config/connection');

const addPostDownVoteQuery = ({ post_id, userId }) => {
  const sql = {
    text: 'insert into down_votes (post_id,user_id) values ($1,$2);',
    values: [post_id, userId],
  };

  return connection.query(sql);
};
module.exports = addPostDownVoteQuery;
