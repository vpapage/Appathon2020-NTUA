'use strict';

module.exports = function(app) {
    var controllerList = require('../controllers/controllerList');
    
    // controllerList Routes

    app.route('/getStationMeasurements/:StationCode')
    .get(controllerList.getStationMeasurements);

    app.route('/getAllStations')
    .get(controllerList.getAllStations);

    app.route('/getAllItems')
    .get(controllerList.getAllItems);


    app.route('/try')
    .get(controllerList.getAllItems);

};