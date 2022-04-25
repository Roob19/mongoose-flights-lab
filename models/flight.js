const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content : String,
    rating : {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }
}, {
    timestamps: true
});

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
            // let dt = new Date();
            // const addYear = date.getFullYear()+1;
            // date.setFullYear(dt.addYear);
            // return dt;
            return new Date(new Date().setFullYear(new Date().getFullYear()+1));
        }
    },
    reviews : [reviewSchema]
}, {
    timestamps : true
});

module.exports = mongoose.model('Flight', flightSchema);