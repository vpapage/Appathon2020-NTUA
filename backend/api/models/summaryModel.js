'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var summarySchema = new Schema ({
  Measurementdate: String,
  Stationcode: String,
  Address: String,
  Latitude: String,
  Longitude: String,
  SO2: String,
  NO2: String,
  O3: String,
  CO: String,
  PM10: String,
  PM2: Array
});

module.exports = mongoose.model('summary', summarySchema, 'Summary');