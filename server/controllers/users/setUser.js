const bcrypt = require('bcryptjs');
const { setUserQuery } = require('../../database/queries');

const setUser = (req, res, next) => {
  console.log('pass 2');

  const {
    userName, email, password, gender, imgUrl,
  } = req.body;
  bcrypt.hash(password, 10)
    .then(
      (hashedPassword) => {
        setUserQuery({
          userName, email, hashedPassword, gender, imgUrl,
        }).then((data) => {
          if (data.rowCount) {
            req.body.userId = data.rows[0].id;
          }

          next();
        }).catch((err) => {
          next(err);
        });
      },
    );
};

module.exports = setUser;
