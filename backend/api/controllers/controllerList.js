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

exports.getStation = (request, response) => {
    // summary.find({ "Station code":request.params.Stationcode}, `Address O3 SO2 NO2 PM10 ${'Measurement\u00a0date'}` ,function (error, getStation) {
    summary.find({ "Station code": request.params.Stationcode }, function (error, getStation) {
        if (error)
            response.send(error);
        response.json(getStation);
    }).limit(10);
};



// Response object: 
// Address: "19, Jong-ro 35ga-gil, Jongno-gu, Seoul, Republic of Korea"
// CO: "1.2"
// Latitude: "37.5720164"
// Longitude: "127.0050075"
// Measurement date: "2017-01-01 00:00"
// NO2: "0.059"
// O3: "0.002"
// PM2: (6) [null, null, null, null, null, "57.0"]
// PM10: "73.0"
// SO2: "0.004"
// Station code: "101"
// _id: "5f202c32dac89224b4c0c789"