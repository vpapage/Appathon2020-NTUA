'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Η συλλογή περιέχει κάθε σταθμό που υπάγεται στην έρευνα και πληροφορίες γι αυτόν.

var stationInfoSchema = new Schema ({
    StationCode: String,
    StationDistrict: String,
    Address: String,
    Latitude: String,
    Longitude: String
});


module.exports = mongoose.model('stationInfo', stationInfoSchema, 'StationInfo');