const Flight = require("../models/flight");
const Destination = require("../models/destination");
const Ticket = require("../models/ticket");

function newTicket(req, res) {
  Ticket.find({}, function (err, ticket) {
    res.render("tickets/new", {
      title: "Add Ticket",
      ticket,
    });
  });
}

function create(req, res) {
  Ticket.create(req.body, function (err, ticket) {
    res.redirect("/tickets/new");
  });
}

function addToTickets(req, res) {
  Flight.findById(req.params.id, function (error, flight) {
    flight.find({ flight: flight._id }, function (err, tickets) {
      flight.save(function (error) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  });
}

function indexTickets(req, res) {
    Ticket.find({}, function(error, ticket) {
        res.render('flights/tickets', {
            title: 'Tickets Index',
            ticket
        })
    });
}

module.exports = {
  new: newTicket,
  create,
  addToTickets,
  index : indexTickets
};
