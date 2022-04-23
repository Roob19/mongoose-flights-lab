const Flight = require('../models/flight');

function newFlight (req, res) {
    res.render('flights/new');
}

function indexFlights(req, res) {
    Flight.find({}, function (err, flight) {
        res.render('flights/index', {
            flight
        });
    });
}

// keep below functions
module.exports = {
    new : newFlight, 
    indexFlights
};