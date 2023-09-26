const Point = require('../models/point.model'); // Path may vary based on your project structure
const User = require('../models/user.model');  // Adjust path accordingly

const PointsController = {

    // Get points by userId and date
    getPointsByUserAndDate: async (req, res) => {
        try {
            const userId = req.params.userId;  // Assuming you're sending userId as a parameter
            const date = new Date(req.query.date);  // Assuming you're sending date as a query parameter

            const points = await Point.find({ userId, dateEarned: date });

            return res.status(200).json(points);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving points.', error });
        }
    },

    // Create new points and update User's points balance
    createAndAddPoints: async (req, res) => {
        try {
            const newPoint = new Point(req.body);
            const savedPoint = await newPoint.save();

            // Fetch the user and update their points
            const user = await User.findById(savedPoint.userId);
            if (!user) {
                throw new Error('User not found');
            }
            user.points = (user.points || 0) + savedPoint.points;
            await user.save();

            return res.status(201).json(savedPoint);
        } catch (error) {
            return res.status(500).json({ message: 'Error creating points.', error });
        }
    }
}

module.exports = PointsController;
