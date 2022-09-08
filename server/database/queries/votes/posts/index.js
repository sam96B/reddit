const addPostUpVoteQuery = require('./addUpVote');
const deletePostUpVoteQuery = require('./deleteUpVote');
const addPostDownVoteQuery = require('./addDownVote');
const deletePostDownVoteQuery = require('./deletDownVote');

module.exports = {
  deletePostUpVoteQuery,
  addPostUpVoteQuery,
  addPostDownVoteQuery,
  deletePostDownVoteQuery,
};
