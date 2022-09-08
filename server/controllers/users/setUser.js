const { setUserQuery } = require('../../database/queries');

const setUser = (req, res, next) => {
  const {
    userName, email, password, gender, imgUrl,
  } = req.body;
  setUserQuery({
    userName, email, password, gender, imgUrl,
  }).then(() => {
    next();
  }).catch((err) => {
    next(err);
  });
};

module.exports = setUser;
