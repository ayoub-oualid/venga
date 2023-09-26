const db = require("../models");
const User = db.users;
const bcrypt = require('bcryptjs');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.surname || !req.body.birthdate || !req.body.function || !req.body.email || !req.body.address || !req.body.postalCode || !req.body.phone || !req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a User
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        birthdate: req.body.birthdate,
        function: req.body.function,
        email: req.body.email,
        address: req.body.address,
        postalCode: req.body.postalCode,
        phone: req.body.phone,
        role: req.body.role,
        agency: req.body.agency,
        //hashed password
        password: bcrypt.hashSync(req.body.password, 8)
    });

    // Save User in the database
    user
        .save(user)
        .then(data => {
            // Set the session variable upon successful registration
            req.session.userId = data._id;

            res.send({
                message: "User was registered successfully!",
                data: data
            });
            console.log(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
}


// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    User.find(condition)
        .populate("agency")
        .then(data => {
            res.send(data);
            console.log(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
}
//find user by id
exports.findOneById = (req, res) => {
    const userId = req.params.id; // Assuming the id is a URL parameter.

    User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User not found with id " + userId });
            }
            res.send(user);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') { 
                return res.status(404).send({ message: "User not found with id " + userId });
            }
            return res.status(500).send({ message: "Error retrieving user with id " + userId });
        });
}
//get curret user from session
exports.getCurrentUser = async (req, res) => {   // Make the function asynchronous
    const userId = req.session.userId;

    if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const user = await User.findById(userId);  // Use findById for Mongoose. And await for the promise to resolve.
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });  // Changed the error message for clarity
        }

        return res.json({
            id: user._id,
            name: user.name,
            surname: user.surname,
            birthdate: user.birthdate,
            function: user.function,
            email: user.email,
            address: user.address,
            postalCode: user.postalCode,
            phone: user.phone,
            role: user.role,
            agency: user.agency

        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Sign in with email and password
exports.signIn = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).send({ message: "Email and password must be provided!" });
    }

    // Find user by email
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User not found." });
            }

            // Check if provided password matches the stored hashed password
            const passwordIsValid = bcrypt.compareSync(password, user.password);

            if (!passwordIsValid) {
                return res.status(401).send({
                    message: "Invalid Password!"
                });
            }

            // If the password is valid, set a session variable
            req.session.userId = user._id;

            res.status(200).send({
                message: "User logged in successfully."
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while signing in."
            });
        });
};

// logout 
exports.logout = (req, res) => {
    req.session.destroy();
    res.status(200).send({ message: "User logged out." });
}
