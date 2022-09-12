const connection = require('../../../config/connection');

const deletePostUpVoteQuery = ({ post_id, userId }) => {
  const sql = {
    text: 'DELETE FROM up_votes WHERE post_id = $1 AND user_id = $2 ;',
    values: [post_id, userId],
  };
  return connection.query(sql);
};
module.exports = deletePostUpVoteQuery;
