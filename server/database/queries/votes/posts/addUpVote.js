const connection = require('../../../config/connection');

const addPostUpVoteQuery = ({ post_id, userId }) => {
  const sql = {
    text: 'insert into up_votes (post_id,user_id) values ($1,$2);',
    values: [post_id, userId],
  };
  return connection.query(sql);
};
module.exports = addPostUpVoteQuery;
