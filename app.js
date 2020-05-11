var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require("passport");
var bugs = require("./routes/bugs");
var user = require("./routes/user");
require("./auth/auth");
var cors = require('cors')
var app = express();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', req.header('origin') 
|| req.header('x-forwarded-host') || req.header('referer') || req.header('host'));
    next();
   });
app.use(cors());
app.use(bodyParser.json({ type: ['application/json']}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/bugs', passport.authenticate("jwt", {session: false}), bugs);
app.use('/api/user', user);
app.get('/login', function (req, res) {
  res.sendfile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/app', function (req, res) {
  res.sendfile(path.join(__dirname, 'public', 'index.html'))
})


module.exports = app;
