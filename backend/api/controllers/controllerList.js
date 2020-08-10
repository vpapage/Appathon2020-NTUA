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

exports.getStation = (request, response) => {
    summary.find({ "Station code":request.params.Stationcode}, function (error, getStation) {
        if (error)
            response.send(error);
        response.json(getStation);
    }).limit(10);
};

