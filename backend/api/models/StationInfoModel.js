'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stationInfoSchema = new Schema ({
    StationCode: String,
    StationDistrict: String,
    Address: String,
    Latitude: String,
    Longitude: String
});


module.exports = mongoose.model('stationInfo', stationInfoSchema, 'StationInfo');