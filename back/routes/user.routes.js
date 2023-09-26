module.exports = app => {
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", user.create);

    // Retrieve all Users   
    router.get("/", user.findAll);

    // signin
    router.post("/signin", user.signIn);

    // check session
    router.get("/current", user.getCurrentUser);

    // logout
    router.get("/logout", user.logout);

    // Retrieve a single User with id   
   //router.get("/:id", user.findOneById);


    app.use('/users', router);
};