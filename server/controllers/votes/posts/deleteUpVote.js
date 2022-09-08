const { deletePostUpVoteQuery } = require('../../../database/queries');

const deletePostUpVote = (req, res) => {
    
    const {post_id} = req.body;
    const userId = 6;
    deletePostUpVoteQuery({ post_id, userId })
        .then(() => {
            res.json({
                msg: "success",
            })
        })
        .catch((err) => {
            res.status(500).json({ msg: err.detail });
        });

};


module.exports = deletePostUpVote;