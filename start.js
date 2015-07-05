var app = require('./app');

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

process.on('SIGINT', function() {
  console.log('Closing server...');
  server.close();
  process.exit();
});
