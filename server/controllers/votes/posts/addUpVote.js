const { addPostUpVoteQuery, deletePostDownVoteQuery } = require('../../../database/queries');

const addPostUpVote = (req, res) => {
  const {post_id} = req.body;
  const userId = 6;
  deletePostDownVoteQuery({ post_id, userId })
    .then(
      addPostUpVoteQuery({ post_id, userId })
        .then(() => {
          res.json({
            msg: "success",
          })
        })
        .catch((err) => {
          res.status(500).json({ msg: err.detail });
        }))
    .catch((err) => {
      res.json({
        msg: err.detail,
      })
    });





};



module.exports = addPostUpVote;