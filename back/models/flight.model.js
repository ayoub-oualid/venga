const mongoose = require('mongoose');  // Importing mongoose

const FlightSchema = new mongoose.Schema(
    {
        flightNumber: String,
        pointPerTicket: Number,
    }, {
    timestamps: true  // This will automatically add 'createdAt' and 'updatedAt' fields
});

module.exports = mongoose.model('Flight', FlightSchema);
