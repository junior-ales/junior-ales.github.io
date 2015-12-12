'use strict';

var app = (function () {
  var express = require('express');
  var app = express();
  var DEFAULT_PORT = 3000;

  app.engine('html', require('ejs').renderFile);
  app.set('views', __dirname + '/../dist/');
  app.use(express.static(__dirname + '/../dist/'));

  app.set('port', process.env.PORT || DEFAULT_PORT);

  app.get('/', function(req, res) {
    res.render('index.html');
  });

  return app;
})();

module.exports = app;
