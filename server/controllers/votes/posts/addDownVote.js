const { addPostDownVoteQuery, deletePostUpVoteQuery } = require('../../../database/queries');

const addDownVote = (req, res) => {
  const {post_id} = req.body;

  const userId = 6;
  deletePostUpVoteQuery({ post_id, userId })
    .then(
      addPostDownVoteQuery({ post_id, userId })
        .then(() => {
          res.json({
            msg: "success",
          })
        })
        .catch((err) => {  res.status(500).json({ msg: err.detail }); })

    )
    .catch((err) => {
      res.status(500).json({ msg: 'err.detail' });
    });



};



module.exports = addDownVote;