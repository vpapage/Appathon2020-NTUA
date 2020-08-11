var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001;

mongoose = require('mongoose'),

    summary = require('./api/models/summaryModel'), //created model loading here 
    measurementStationInfo = require('./api/models/Measurement_station_info_model'), 
    measurementItemInfo = require('./api/models/Measurement_item_info_model');
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
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require('./api/routes/routeList'); //importing route
routes(app); //register the routes


app.listen(port);

console.log('My API server started on: ' + port);