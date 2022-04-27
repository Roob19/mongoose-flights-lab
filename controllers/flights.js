const Flight = require("../models/flight");
const Destination = require("../models/destination");
const Ticket = require("../models/ticket");

function newFlight(req, res) {
  res.render("flights/new", { title: "Add Flight" });
}

function create(req, res) {
  req.body.departs = !!req.body.departs;
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const flight = new Flight(req.body);
  flight.save(function (error) {
    if (error) return res.redirect("/flights/new");
    res.redirect(`/flights/${flight._id}`);
  });
}

function indexFlights(req, res) {
  Flight.find({}, function (err, flight) {
    res.render("flights/index", {
      title: "All Flights",
      flight,
    });
  });
}

function show(req, res) {
  Flight.findById(req.params.id)
    .populate("destinations")
    .exec(function (error, flight) {
      Destination.find({ _id: { $nin: flight.destinations } }).exec(function (
        err,
        dest
      ) {
        Ticket.find({ _id: { $nin: flight.tickets } }).exec(function (
          err,
          ticket
        ) {
          res.render("flights/show", {
            title: "Flight Detail",
            flight,
            dest,
            ticket,
          });
        });
      });
    });
}

// keep below functions
module.exports = {
  new: newFlight,
  create,
  index: indexFlights,
  show,
};
