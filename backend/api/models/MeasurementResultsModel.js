'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Περιέχει για κάθε σταθμό όλα τα αποτελέσματα από τις μετρήσεις που έγιναν. 
 
var measurementResultsSchema = new Schema ({
  
    MeasurementDate: String,
    StationCode: String,
    Address: String,
    Latitude: String,
    Longitude: String,
    SO2: String,
    NO2: String,
    O3: String,
    CO: String,
    PM10: String,
    PM2: String
});

module.exports = mongoose.model('measurementResults', measurementResultsSchema, 'MeasurementResults');