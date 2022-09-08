const express = require('express');

const router = express.Router();
const { setUser, authUser, getUser } = require('../controllers');


router.post('/authUser', authUser);
router.get('/users/:id', getUser);
router.post('/users', setUser);

module.exports = router;
