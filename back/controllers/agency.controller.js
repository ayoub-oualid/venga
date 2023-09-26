const db = require("../models");
const Agency = db.agencies;

// Create and Save a new Agency
exports.create = (req, res) => {
    if (!req.body.name || !req.body.codeIata) {
        res.status(400).send({ message: "Name and CodeIATA cannot be empty!" });
        return;
    }

    const agency = new Agency({
        codeIata: req.body.codeIata,
        name: req.body.name,
        adress: req.body.adress || null,
        city: req.body.city || null,
        phone: req.body.phone || null,
        fax: req.body.fax || null,
        mail: req.body.mail || null
    });

    agency.save(agency)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Agency."
            });
        });
};

// Retrieve all Agencies or filter by codeIata
exports.findAll = (req, res) => {
    const codeIata = req.query.codeIata;
    var condition = codeIata ? { codeIata: { $regex: new RegExp(codeIata), $options: "i" } } : {};

    Agency.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving agencies."
            });
        });
};


// Find a single Agency by codeIata
exports.findOne = (req, res) => {
    const codeIata = req.params.codeIata;

    Agency.findOne({ codeIata: codeIata })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Agency with codeIata " + codeIata });
            else res.send(data);
        })
        .catch(err => {
            res.status(500).send({ 
                message: "Error retrieving Agency with codeIata=" + codeIata 
            });
        });
};


// Update an Agency by codeIata
exports.update = (req, res) => {
    const codeIata = req.params.codeIata;

    Agency.findOneAndUpdate({ codeIata: codeIata }, req.body, { useFindAndModify: false, new: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Agency with codeIata=${codeIata}. Maybe Agency was not found!`
                });
            } else res.send(data); // Note: sending updated data for clarity
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Agency with codeIata=" + codeIata
            });
        });
};


// Delete an Agency by codeIata
exports.delete = (req, res) => {
    const codeIata = req.params.codeIata;

    Agency.findOneAndDelete({ codeIata: codeIata }, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Agency with codeIata=${codeIata}. Maybe Agency was not found!`
                });
            } else {
                res.send({
                    message: "Agency was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Agency with codeIata=" + codeIata
            });
        });
};

