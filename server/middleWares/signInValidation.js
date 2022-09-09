const bcrypt = require('bcryptjs');
const { singinSchema, DataBaseError, comparePasswords } = require('../Utills');
const { getUserByEmailQuery, getUserByIdQuery } = require('../database/queries');

const signInValidation = (req, res, next) => {
  const {
    email, password,
  } = req.body;

  singinSchema.validateAsync({
    email, password,
  })
    .then((validatedData) => {
      getUserByEmailQuery(validatedData).then((data) => {
        if (data.rowCount) {
          const { id } = data.rows[0];
          getUserByIdQuery(id)
            .then((returnedData) => {
              const hashedPassword = returnedData.rows[0].password;
              comparePasswords(password, hashedPassword)
                .then((result) => {
                  if (result) {
                    req.body.userId = id;
                    next();
                  } else {
                    throw new Error('Incorrect password');
                  }
                })
                .catch(() => {
                  throw new Error('Comparing the password has failed !');
                });
            })
            .catch(() => {
              throw new Error('Error during query by Id!');
            });
        } else {
          throw new Error('The email that you have entered is not registered !');
        }
      }).catch(() => {
        throw new Error('Error during query by email address!');
      });
    })
    .catch(() => {
      throw new Error('Error in validating the email and password !');
    });
};

module.exports = signInValidation;
