'use strict';

module.exports = function(app) {
    var controllerList = require('../controllers/controllerList');
    
    // controllerList Routes

    app.route('/getStationMeasurements/:StationCode/:month')
    .get(controllerList.getStationMeasurements);

    app.route('/getAllStations')
    .get(controllerList.getAllStations);

    app.route('/getAllItems')
    .get(controllerList.getAllItems);

    app.route('/getAnything/:month/:StationCode')
    .get(controllerList.getAnything);

};