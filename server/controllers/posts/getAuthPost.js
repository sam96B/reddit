const { getAuthPostsQuery } = require('../../database/queries');

const getAuthPosts = (req, res) => {
  const { userId } = req.body;
  getAuthPostsQuery(userId)
    .then((posts) => {
      res.json(posts.rows);
    })
    .catch((err) => {
      res.status(500).json({ msg: 'server error' });
    });
};

module.exports = getAuthPosts;
