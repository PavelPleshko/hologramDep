module.exports.init = initModels;

function initModels(app) {
  var modelsPath = app.get('root') + '/app/models/';

  ['reply','comment','token','profile','user','post'].forEach(function(model) {
    require(modelsPath + model);
  });
};