const addCommentUpVoteQuery = require('./addUpVote');
const deleteCommentUpVoteQuery = require('./deleteUpVote');
const addCommentDownVoteQuery = require('./addDownVote');
const deleteCommentDownVoteQuery = require('./deletDownVote');

module.exports = {
  deleteCommentUpVoteQuery,
  addCommentUpVoteQuery,
  addCommentDownVoteQuery,
  deleteCommentDownVoteQuery,
};
