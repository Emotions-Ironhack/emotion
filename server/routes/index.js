var path = require('path');

module.exports = function(app) {
  app.use('/api/auth', require('../api/auth'));
  app.use('/api/emotion', require('../api/emotion'));
  app.use('/api', require('../api/recommendation'));


	// catch 404 and forward to Angular
  app.all('/*', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
  });
};
