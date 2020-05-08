var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var passport = require("passport");
var bugs = require("./routes/bugs");
var user = require("./routes/user");
require("./auth/auth");
var cors = require('cors')
var app = express();
var whitelist = ['http://localhost:3000', 'http://localhost']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', req.header('origin') 
|| req.header('x-forwarded-host') || req.header('referer') || req.header('host'));
    next();
   });
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/bugs', passport.authenticate("jwt", {session: false}), bugs);
app.use('/api/user', user);

module.exports = app;
