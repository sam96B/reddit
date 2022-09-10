const { addPostQuery } = require('../../database/queries');

const addPost = (req, res) => {
  const { userId } = req.params;
  const { textContent } = req.body;
  addPostQuery({ userId, textContent })
    .then(() => {
      res.redirect(`/users/${userId}`);
    })
    .catch((err) => {
      res.status(500).json({ msg: 'server error' });
    });
};

module.exports = addPost;
