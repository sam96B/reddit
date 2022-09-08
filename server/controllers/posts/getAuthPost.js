const { getAuthPostsQuery } = require('../../database/queries');

const getAuthPosts = (req, res) => {
  const user_id=6;
    getAuthPostsQuery(user_id)
      .then((posts) => {
        res.json(posts.rows);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: 'server error' });
      });
  };
  
  module.exports = getAuthPosts;