module.exports = app => {
    const flight = require("../controllers/flight.controller.js");

    var router = require("express").Router();

    router.post('/upload', flight.uploadMiddleware, flight.uploadFlightData);
    router.get('/all', flight.findAll);


    app.use('/flight', router);
};