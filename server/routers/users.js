const express = require('express');

const router = express();
const { setUser, getHomePage } = require('../controllers');
const { signUpValidation, setToken, handleErrors } = require('../middleWares');

router.route('/users').post(signUpValidation, setUser, setToken, getHomePage, handleErrors);

module.exports = router;
