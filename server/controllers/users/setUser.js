const { setUserQuery } = require('../../database/queries');

const setUser = (req, res) => {
  const user = {
    name: req.body.username,
    password: req.body.password,
    fname: req.body['first-name'],
    lname: req.body['last-name'],
  };
  setUserQuery(user).then((data) => {
    const { id } = data.rows[0];
    res.redirect(`/users/${id}`);
  });
};

module.exports = setUser;
