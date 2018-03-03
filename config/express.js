

var bodyParser = require('body-parser');

var session = require('express-session');
var express = require('express');
var passport = require('passport');
var config = require('./index');

module.exports.init = function(app) {
  var env = app.get('env');
  var root = app.get('root');

 

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.disable('x-powered-by');



  app.use(session(sessionOpts));
  app.use(passport.initialize());
app.use(passport.session());



   app.use(function(req, res, next) {
    req.resources = req.resources || {};
    res.locals.app = config.app;
    res.locals.currentUser = req.user;

    next();
  });

 

};