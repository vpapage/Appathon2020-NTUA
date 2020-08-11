'use strict';


var mongoose = require('mongoose'),
    summary = mongoose.model('summary');

exports.list_all_O3 = (req, res) => {
    summary.find({}, function (err, O3) {
        if (err)
            res.send(err);
        res.json(O3);
    }).limit(10);
};

// const fieldWithASpace = "Stationcode";

exports.getStationMeasurements = (request, response) => {
    // summary.find({ "Station code":request.params.Stationcode}, `Address O3 SO2 NO2 PM10 ${'Measurement\u00a0date'}` ,function (error, getStation) {
    summary.find({ "Station code": request.params.Stationcode }, function (error, getStation) {
        if (error)
            response.send(error);
        response.json(getStation);
    }).limit(10);
};


exports.getAllStations = (req, res) => {
    measurementStationInfo.find({}, function (err, O3) {
        if (err)
            res.send(err);
        res.json(O3);
    });
};

exports.getAllItems = (req, res) => {
    measurementItemInfo.find({}, function (err, O3) {
        if (err)
            res.send(err);
        res.json(O3);
    }).limit(10);
};
