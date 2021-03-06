var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var request = require('request');
var routes = require('./app/routes');
var config = require('./app/config');
var port = process.env.PORT || 5000;

/**
 * Setup
 */
app.set('port', (process.env.PORT || 5000));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/', routes);
//require('./app/routes')(app);

mongoose.connect(config.mongoUrl, function(err) {
	if(err) throw err;

	app.listen(app.get('port'), function() {
	    console.log('Node app is running at localhost:' + app.get('port'));
	});

});


