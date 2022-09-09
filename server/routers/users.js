const express = require('express');

const router = express();
const { setUser, getHomePage } = require('../controllers');
const {
  signUpValidation, signInValidation, setToken, handleErrors,
} = require('../middleWares');

router.route('/signUp').post(signUpValidation, setUser, setToken, getHomePage, handleErrors);
router.route('/signIn').post(signInValidation, setToken, getHomePage, handleErrors);

module.exports = router;
