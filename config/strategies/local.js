
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('mongoose').model('User');

module.exports.init = function() {
  passport.use('local', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      session:true
    },
    function(email, password, done) {
      User.authenticate(email, password, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, { message: 'Invalid email or password.' });
        }

        return done(null, user);
      });
    }
  ));
};