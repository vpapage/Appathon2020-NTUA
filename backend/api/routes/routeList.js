'use strict';
module.exports = function(app) {
    var controllerList = require('../controllers/controllerList');
    
    // controllerList Routes
    app.route('/O3')
    .get(controllerList.list_all_O3);

    app.route('/getStation/:Stationcode')
    .get(controllerList.getStation);


};