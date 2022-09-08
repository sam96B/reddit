const { setUser, authUser, getUser } = require('./users');
const { getPosts, addPost, getAuthPosts } = require('./posts');
const {
  addComment,
  getComment,
  getComments,
  deleteComment,
  updateComment,
} = require('./comments');
const {
  addPostUpVote,
  deletePostUpVote,
  addPostdownVote,
  deletePostDownVote,
} = require('./votes');

module.exports = {
  setUser,
  authUser,
  getUser,
  getPosts,
  addPost,
  getAuthPosts,
  addPostUpVote,
  deletePostUpVote,
  addPostdownVote,
  deletePostDownVote,
  addComment,
  getComment,
  getComments,
  deleteComment,
  updateComment,
};
