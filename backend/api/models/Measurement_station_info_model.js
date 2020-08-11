'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var measurementStationInfoSchema = new Schema ({
    Stationcode: String,
    Stationnamedistrict: String,
    Address: String,
    Latitude: String,
    Longitude: String
});


module.exports = mongoose.model('measurementStationInfo', measurementStationInfoSchema, 'Measurement_Station_info');