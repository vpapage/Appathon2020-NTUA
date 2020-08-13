'use strict';

var mongoose = require('mongoose'),
    measurementResults = mongoose.model('measurementResults'),
    stationInfo = mongoose.model('stationInfo'),
    compoundInfo = mongoose.model('compoundInfo');



exports.getStationMeasurements = (request, response) => {
    measurementResults.find({ "Station code": request.params.Stationcode }, function (error, getStation) {
        if (error)
            response.send(error);
        response.json(getStation);
    }).limit(10);
};


exports.getAllStations = (req, res) => {
    stationInfo.find({}, function (err, allStations) {
        if (err)
            res.send(err);
        res.json(allStations);
    });
};

exports.getAllItems = (req, res) => {
    compoundInfo.find({}, function (err, getAllItems) {
        if (err)
            res.send(err);
        res.json(getAllItems);
    });
};
