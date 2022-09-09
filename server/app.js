// core modules
const { join } = require('path');
// third party modules
const cookieParser = require('cookie-parser');
const compression = require('compression');
const express = require('express');
const buildDB = require('./database/config/buildDB');
// my modules
const { users } = require('./routers');

buildDB().then(() => {
  console.log('*The database Connection is established successfully*');
}).catch((err) => {
  console.log(err);
});
const app = express();

app.set('port', process.env.PORT || 3002);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));

app.use(users);
// app.use(posts);
// app.use(comments);
// app.use(votes);

app.use((req, res, next) => {
  res.status(404).sendFile(join(__dirname, '..', 'public', '404.html'));
  next();
});
app.use((req, res) => {
  res.status(500).sendFile(join(__dirname, '..', 'public', '500.html'));
});
module.exports = app;
