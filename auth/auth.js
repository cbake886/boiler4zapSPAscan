var config = require("../config");

const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
var token = null;

var cookieExtractor = function (req) {
  if (req && req.cookies) {
    token = req.cookies['jwt']
  }
  return token;
}

passport.use(new JWTstrategy({
  secretOrKey: config.secret_key,
  jwtFromRequest: cookieExtractor
}, async (token, done) => {
  try {
    if (Date.now() > token.expires) {
      return done(401)
    } else if (Date.now() <= token.expires) {
      return done(null, token);
    }
  } catch (error) {
    done(error);
  }
}));
