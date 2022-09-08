const express = require('express');

const router = express();
const { setUser/* , authUser, getUser */ } = require('../controllers');

// router.post('/authUser', authUser);
// router.get('/users/:id', getUser);

router.route('/users').post(setUser, (err, req, res, next) => {
  if (err) {
    res.json({ error: err.detail });
  } else {
    next();
  }
}, (req, res) => {
  res.redirect('/');
});

module.exports = router;
