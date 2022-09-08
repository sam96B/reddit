const { setUserQuery, authUserQuery } = require('./users');
const { getPostsQuery, addPostQuery, getAuthPostsQuery } = require('./posts');
const {
  addCommentQuery,
  getCommentQuery,
  getCommentsQuery,
  updateCommentQuery,
  deleteCommentQuery,
} = require('./comments');
const {
  addPostUpVoteQuery,
  deletePostUpVoteQuery,
  addPostDownVoteQuery,
  deletePostDownVoteQuery,
  deleteCommentUpVoteQuery,
  addCommentUpVoteQuery,
  addCommentDownVoteQuery,
  deleteCommentDownVoteQuery,
} = require('./votes');

module.exports = {
  setUserQuery,
  authUserQuery,
  getPostsQuery,
  addPostQuery,
  addPostUpVoteQuery,
  deletePostUpVoteQuery,
  getAuthPostsQuery,
  deletePostDownVoteQuery,
  addPostDownVoteQuery,
  deleteCommentUpVoteQuery,
  addCommentUpVoteQuery,
  addCommentDownVoteQuery,
  deleteCommentDownVoteQuery,
  addCommentQuery,
  getCommentQuery,
  getCommentsQuery,
  updateCommentQuery,
  deleteCommentQuery,
};
