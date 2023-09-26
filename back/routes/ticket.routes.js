module.exports = app => {
    const ticket = require("../controllers/ticket.controller.js");

    var router = require("express").Router();

    // Create a new User
    router.post('/upload',ticket.uploadEndpoint, ticket.uploadAndProcessTickets);


    app.use('/ticket', router);
};