const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema(
    {
        userId: mongoose.Schema.Types.ObjectId,
        points: Number,
        dateEarned: Date,
        reason: String
    });

module.exports = mongoose.model('Point', PointSchema);
    