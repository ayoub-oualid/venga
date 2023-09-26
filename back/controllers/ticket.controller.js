const multer = require('multer'); // Assuming you're using multer for file handling
const Ticket = require('../models/ticket.model');
const Flight = require('../models/flight.model');
const PointController = require('./point.controller');
const User = require('../models/user.model');

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });



exports.uploadAndProcessTickets = async (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'Please upload a JSON file.' });
    }

    try {
        const ticketsData = JSON.parse(req.file.buffer.toString());

        for (const ticketData of ticketsData) {
            // Save the ticket
            const ticket = new Ticket({
                ticketNumber: ticketData.ticketNumber,
                flightNumber: ticketData.flightNumber,
                userId: ticketData.userId
            });
            await ticket.save();

            // Find the corresponding flight
            const flight = await Flight.findOne({ flightNumber: ticketData.flightNumber });
            
            if (!flight) {
                continue; // Skip this iteration if flight is not found, rather than returning an error immediately
            }

            // Calculate the bonus
            const bonusPoints = flight.pointPerTicket;

            // Create a faux request object
            const fauxReq = {
                body: {
                    userId: ticketData.userId,
                    points: bonusPoints,
                    dateEarned: new Date(),
                    reason: `Bonus for ticket: ${ticketData.ticketNumber}`
                }
            };

            // Use the existing function
            await PointController.createAndAddPoints(fauxReq, res); // Note that we pass the existing response object to the function
        }

        res.status(200).send({ message: 'Tickets processed successfully.' });
    } catch (error) {
        console.error("Error processing tickets:", error);
        res.status(500).send({ message: 'Error processing tickets', error: error.message });
    }
};


exports.uploadEndpoint = [upload.single('ticket.json'), this.uploadAndProcessTickets];

