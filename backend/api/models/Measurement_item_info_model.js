'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var measurementItemInfoSchema = new Schema ({
    Itemcode: String,
    Itemname: String,
    Unitofmeasurement: String,
    Good: String,
    Normal: String,
    Bad: String,
    Verybad: String
});


module.exports = mongoose.model('measurementItemInfo', measurementItemInfoSchema, 'Measurement_item_info');