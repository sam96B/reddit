// core modules
const { join } = require('path');
// third party modules
const cookieParser = require('cookie-parser');
const compression = require('compression');
const { verify } = require('jsonwebtoken');
const express = require('express');
const { getUserInfoByIdQuery } = require('./database/queries');
const buildDB = require('./database/config/buildDB');
const checkToken = require('./middleWares');
// my modules
const {
  users, posts, votes, pages,
} = require('./routers');

buildDB().then(() => {
  console.log('*The database Connection is established successfully*');
}).catch((err) => {
  console.log(err);
}); 
const app = express();

app.set('port', process.env.PORT || 3001);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));

app.use((req, res, next) => {
  if ('logged' in req.cookies) {
    const cookie = req.cookies.logged;
    verify(cookie, process.env.SECRET, (err, data) => {
      if (err) {
        next(err);
      } else {
        const { userId } = data;
        req.body.userId = userId;
        next();
      }
    });
  } else {
    next();
  }
});

app.use(users);
app.use(posts);
// app.use(comments);
app.use(votes);
app.use(pages);
app.use('/isAuth', (req, res, next) => {
  try {
    if (req.body.userId) {
      const id = req.body.userId;
      getUserInfoByIdQuery(id).then((data) => {
        if (data.rowCount) {
          const { img_url, username } = data.rows[0];
          res.json({
            auth: true, id, img_url, username,
          });
        } else {
          res.json({ auth: false });
        }
      }).catch((err) => { next(err); });
    } else {
      res.json({ auth: false });
    }
  } catch (error) {
    next(error);
  }
});

app.use((req, res, next) => {
  res.status(404).sendFile(join(__dirname, '..', 'public', '404.html'));
  next();
});
app.use((err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', 'public', '500.html'));
});
module.exports = app;
