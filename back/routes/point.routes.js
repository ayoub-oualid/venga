module.exports = app => {
    const point = require("../controllers/point.controller.js");

    var router = require("express").Router();

    app.get('/points/:userId', point.getPointsByUserAndDate);
    app.post('/points', point.createAndAddPoints);
    app.post('/points/:userId/points', point.updatePoints)
    app.use('/points', router);
};