'use strict';

var mongoose = require('mongoose'),
    measurementResults = mongoose.model('measurementResults'),
    stationInfo = mongoose.model('stationInfo'),
    compoundInfo = mongoose.model('compoundInfo');



    exports.getStationMeasurements = (request, response) => {
        measurementResults.find({ "Station code": request.params.Stationcode },"MeasurementDate SO2 NO2 O3 CO PM10", function (error, getStation) {
            if (error)
                response.send(error);
            response.json(getStation);
        }).limit(720);
    };
    
    

exports.getAllStations = (req, res) => {
    stationInfo.find({}, "StationCode StationDistrict", function (err, allStations) {
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

// test queries: 
exports.getAnything = (req, res) => {
    measurementResults.find(
        { 
            "Station code": req.params.StationCode,
            MeasurementDate: { $regex: `.*${req.params.month}.*18:00`, $options: 'm'}
        },
        "MeasurementDate StationCode SO2 NO2 O3 CO PM10" , 
        function (err, allStations) {
        if (err)
            res.send(err);
        res.json(allStations);
    }).sort({'MeasurementDate': 1}).limit(720);
};


    // Compass query: 
    // { MeasurementDate: /.*2017-09.*/, StationCode: "106"}