module.exports = app => {
    const agency = require("../controllers/agency.controller.js");
  
    var router = require("express").Router();
    
    // Create a new Agency
    router.post("/", agency.create);
    
    // Retrieve all Agencies or filter by codeIata
    router.get("/", agency.findAll);

    // Retrieve a single Agency with codeIata
    router.get("/:codeIata", agency.findOne);

    // Update an Agency with codeIata
    router.put("/:codeIata", agency.update);

    // Delete an Agency with codeIata
    router.delete("/:codeIata", agency.delete);

    app.use('/agencies', router); // Changed from 'users' to 'agencies' to reflect the correct resource
};
