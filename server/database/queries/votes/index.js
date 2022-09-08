const {
  deleteCommentUpVoteQuery,
  addCommentUpVoteQuery,
  addCommentDownVoteQuery,
  deleteCommentDownVoteQuery,
} = require('./comments');
const {
  deletePostUpVoteQuery, addPostUpVoteQuery, addPostDownVoteQuery, deletePostDownVoteQuery,
} = require('./posts');

module.exports = {
  deleteCommentUpVoteQuery,
  addCommentUpVoteQuery,
  addCommentDownVoteQuery,
  deleteCommentDownVoteQuery,
  deletePostUpVoteQuery,
  addPostUpVoteQuery,
  addPostDownVoteQuery,
  deletePostDownVoteQuery,
};
