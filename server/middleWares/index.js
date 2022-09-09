const signUpValidation = require('./signUpValidation');
const setToken = require('./userToken');
const handleErrors = require('./handleErrors');
const signInValidation = require('./signInValidation');

module.exports = {
  signUpValidation,
  signInValidation,
  setToken,
  handleErrors,
};
