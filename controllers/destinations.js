const Flight = require("../models/flight");
const Destination = require('../models/destination');
const Ticket = require('../models/ticket');

function create(req, res) {
    Destination.create(req.body, function(err, dest) {
        res.redirect('/destinations/new');
    });
}

function addToDestinations(req, res) {
    Flight.findById(req.params.id, function(error, flight) {
        flight.destinations.push(req.body.destinationId);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function indexDestinations(req, res) {
    Destination.find({}, function (error, dest) {
        res.render('flights/destinations', {
            title: 'Destinations Index',
            dest
        });
    });
}

function newDestination(req, res) {
    Destination.find({}, function(err, dest) {
        res.render('destinations/new', {
            title: 'Add Destination',
            dest
        })
    })
}

module.exports = {
    new : newDestination,
    create,
    addToDestinations,
    index : indexDestinations
};