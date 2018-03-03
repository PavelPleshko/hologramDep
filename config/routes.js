
module.exports.init = initRoutes;

function initRoutes(app) {
  var routesPath = app.get('root') + '/app/routes';

  app.use('/auth', require(routesPath + '/auth'));
 app.use('/api', require(routesPath + '/profile'));
 app.use('/api', require(routesPath + '/comment'));
 app.use('/api', require(routesPath + '/post'));
 app.use('/api', require(routesPath + '/reply'));
 app.use('/api', require(routesPath + '/file'));
};