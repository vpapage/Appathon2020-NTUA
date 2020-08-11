'use strict';

module.exports = function(app) {
    var controllerList = require('../controllers/controllerList');
    
    // controllerList Routes
    app.route('/O3')
    .get(controllerList.list_all_O3);

    app.route('//:Stationcode')
    .get(controllerList.getStationMeasurements);

    app.route('/getAllStations')
    .get(controllerList.getAllStations);

    app.route('/getAllItems')
    .get(controllerList.getAllItems);
};