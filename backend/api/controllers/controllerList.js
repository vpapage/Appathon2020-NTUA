'use strict';

var mongoose = require('mongoose'),
    summary = mongoose.model('summary'),
    measurementStationInfo = mongoose.model('measurementStationInfo'),
    measurementItemInfo = mongoose.model('measurementItemInfo');



exports.getStationMeasurements = (request, response) => {
    summary.find({ "Station code": request.params.Stationcode }, function (error, getStation) {
        if (error)
            response.send(error);
        response.json(getStation);
    }).limit(10);
};


exports.getAllStations = (req, res) => {
    measurementStationInfo.find({"Station code": "101"}, function (err, allStations) {
        if (err)
            res.send(err);
        res.json(allStations);
    });
};

exports.getAllItems = (req, res) => {
    measurementItemInfo.find({}, function (err, getAllItems) {
        if (err)
            res.send(err);
        res.json(getAllItems);
    });
};
