const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema(
    {
        ticketNumber: String,
        flightNumber: String,
        userId: mongoose.Schema.Types.ObjectId,

    }, {
    timestamps: true  // This will automatically add 'createdAt' and 'updatedAt' fields
});

module.exports = mongoose.model('Ticket', TicketSchema);