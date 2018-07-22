var express = require('express');
var bodyParser = require('body-parser');
var routing = require('./app/routing/htmlRoutes.js');
var api = require('./app/routing/apiRoutes.js')

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', routing.home);
app.get('/survey', routing.survey);
app.get('/pokemon', api.pokemon);

app.get('*', routing.home);

app.post('/survey', api.survey)


app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});