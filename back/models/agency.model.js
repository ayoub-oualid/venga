const mongoose = require('mongoose');  // Importing mongoose

const AgencySchema = new mongoose.Schema(
  {
    codeIata: {
        type: String,
        required: true,   // Making this field mandatory
        unique: true      // This will ensure that each 'codeIata' is unique in the DB
    },
    name: {
        type: String,
        required: true
    },
    adress: String,
    city: String,
    phone: String,
    fax: String,
    mail: String
}, {
    timestamps: true  // This will automatically add 'createdAt' and 'updatedAt' fields
});

module.exports = mongoose.model('Agency', AgencySchema);
