const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline : {
        type: String,
        enum: ['American', 'SouthWest', 'United', 'PrivateCharter'],
        default: ''
    }, 
    airport : {
        type: String,
        enum: ['AUS', 'DEN', 'DFW', 'LAX', 'MHR', 'SAN', 'SFO', 'SMF'],
        default: 'DEN'
    },
    flightNo : {
        type: Number
    },
    departs : {
        type: Date, 
        default: function() {
            return new Date().getFullYear();
            // const date = new Date;
            // const addYear = date.getFullYear()+1;
            // date.setFullYear(addYear);
            // const dt = new Date();
            // const year = date.getFullYear();
            // dt.setFullYear(year+1);
            // return dt;

            // return new Date(new Date().setFullYear(new Date().getFullYear()+1));
        }
    },
    destinations : [{
        type: Schema.Types.ObjectId,
        ref: 'Destination'
    }],
    tickets : [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }]
}, {
    timestamps : true
});

module.exports = mongoose.model('Flight', flightSchema);