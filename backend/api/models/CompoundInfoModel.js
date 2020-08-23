'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Η συλλογή περιέχει κάθε στοιχείο που εντοπίστηκε και πληροφορίες γι αυτό.

var compoundInfoSchema = new Schema ({
    ItemCode: String,
    ItemName: String,
    UnitOfMeasurement: String,
    Good: String,
    Normal: String,
    Bad: String,
    Verybad: String
});


module.exports = mongoose.model('compoundInfo', compoundInfoSchema, 'CompoundInfo');