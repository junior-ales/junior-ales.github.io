var app = function () {
  var express = require('express');
  var app = express();

  app.engine('html', require('ejs').renderFile);
  app.set('views', __dirname);
  app.use(express.static(__dirname));

  app.set('port', process.env.PORT || 3000);

  app.get('/', function(req, res) {
    res.render('index.html');
  });

  return app;
}();

module.exports = app;
