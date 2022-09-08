// core modules
const { join } = require('path');
// third party modules
const cookieParser = require('cookie-parser');
const compression = require('compression');
const express = require('express');
// my modules
// const { users, posts, votes,comments} = require('./routers');

const app = express();

app.set('port', process.env.PORT || 3001);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));

// app.use(users);
// app.use(posts);
// app.use(comments);
// app.use(votes);

module.exports = app;
