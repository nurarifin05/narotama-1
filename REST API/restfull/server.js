
var express = require ('express'),
    app = express(),
    port = process.env.PORT || 4000,
    bodyParser = require('body-parser'),
    controller = require('./controller');

app.use (bodyParser.urlencoded({extended: true}));
app.use (bodyParser.json());

var routes = require('./routes');
routes(app);
app.listen(port);
console.log('running: ' + port);