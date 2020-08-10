var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;

  mongoose = require('mongoose'),
  sum = require('./api/models/summaryModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/AirPollutionSeoul', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var rar = require('./api/routes/routeList'); //importing route
rar(app); //register the route


app.listen(port);

console.log('My API server started on: ' + port);