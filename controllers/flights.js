const Flight = require('../models/flight');

function newFlight (req, res) {
    res.render('flights/new');
}

function create (req, res) {
    // req.body.departs = !!req.body.departs;
    if (req.body.flightNo) {
        const flight = new Flight(req.body);
        flight.save(function(error){
            if (error) {
                return res.render('flights/new');
            }
            res.redirect('flights');
        });
    }
}

function indexFlights (req, res) {
    Flight.find({}, function (err, flight) {
        res.render('flights/index', {
            flight
        });
    });
}

// keep below functions
module.exports = {
    new : newFlight, 
    create,
    index : indexFlights
};