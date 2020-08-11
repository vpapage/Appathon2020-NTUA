'use strict';

module.exports = function(app) {
    var controllerList = require('../controllers/controllerList');
    
    // controllerList Routes

    app.route('/getStationMeasurements/:Stationcode')
    .get(controllerList.getStationMeasurements);

    app.route('/getAllStations')
    .get(controllerList.getAllStations);

    app.route('/getAllItems')
    .get(controllerList.getAllItems);
};