var config = require("../config");

const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
var token = null;

var cookieExtractor = function (req) {
  if (req && req.cookies || req.headers['x-access-token']) {
    token = req.cookies['jwt'] || req.headers['x-access-token']
  }
  return token;
}

passport.use(new JWTstrategy({
  secretOrKey: config.secret_key,
  jwtFromRequest: cookieExtractor
},(token, done) => {
  try {
    if (Date.now() > token.user.expire) {
      return done(401)
    } else {
      return done(null, token);
    }
  } catch (error) {
    done(error);
  }
}));
