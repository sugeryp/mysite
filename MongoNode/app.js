
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , mongoInsert = require('./routes/mongo/insert')
  , mongoFind = require('./routes/mongo/find')
  , mongoUpdate = require('./routes/mongo/update')
  , mongoDelete = require('./routes/mongo/delete')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/mongo/insert', mongoInsert.insertOne);
app.get('/mongo/find', mongoFind.find);
app.get('/mongo/update', mongoUpdate.updateOne);
app.get('/mongo/delete', mongoDelete.deleteOne);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
