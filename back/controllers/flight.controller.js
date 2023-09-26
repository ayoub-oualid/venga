const multer = require('multer');
const Flight = require('../models/flight.model');

const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

exports.uploadFlightData = async (req, res) => {
    // Ensure a file was uploaded
    if (!req.file) {
        return res.status(400).send({ message: 'Please upload a JSON file.' });
    }

    let flightsData;
    try {
        // Parse the uploaded file
        flightsData = JSON.parse(req.file.buffer.toString());

        // Iterate over the data and save/update it to the Flight model
        for (const flightRecord of flightsData) {
            await Flight.findOneAndUpdate(
                { flightNumber: flightRecord.flightId },  // Find flight by flightNumber
                {
                    // Update these fields
                    flightNumber: flightRecord.flightId,
                    pointPerTicket: flightRecord.pointsPerTicket
                },
                {
                    upsert: true,  // If no match, insert a new document
                    new: true      // Return the updated document
                }
            );
        }

        res.status(200).send({ message: 'Flights data processed and saved/updated successfully.' });
    } catch (error) {
        console.error('Error processing and saving flights data:', error);
        res.status(500).send({ message: 'Error processing and saving flights data', error: error.message });
    }
};


// Export the middleware to handle file upload
exports.uploadMiddleware = upload.single('flight.json');

// find all flights
exports.findAll = (req, res) => {
    Flight.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || 'Some error occurred while retrieving flights.' });
        });
}


