const connection = require('../../../config/connection');

const deletePostDownVoteQuery = ({ post_id, userId }) => {
  const sql = {
    text: 'DELETE FROM down_votes WHERE post_id = $1 AND user_id = $2 ;',
    values: [post_id, userId],
  };
  return connection.query(sql);
};
module.exports = deletePostDownVoteQuery;
