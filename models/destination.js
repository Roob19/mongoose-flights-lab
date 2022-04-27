const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport : {
        type: String,
        enum: ['American', 'SouthWest', 'United', 'PrivateCharter'],
        unique: true,
        default: ''
    },
    arrival : {
        type: Date,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Destination', destinationSchema);