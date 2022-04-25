const Flight = require("../models/flight");

function newFlight(req, res) {
    const addFlight = new Flight();

    // const dt = addFlight.departs;
    // let departsDate = dt.toISOString().slice(0, 16);

//   const defaultFlights = new Flight();
//   const dt = defaultFlights.departs;
//   let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1)
//     .toString()
//     .padStart(2, "0")}`;
//   departsDate += `-${dt.getDate().toString().padStart(2, "0")}T${dt
//     .toTimeString()
//     .slice(0, 5)}`;
//   res.render("flights/new", { departsDate });

    res.render("flights/new", {addFlight});
}

function create(req, res) {
  // req.body.departs = !!req.body.departs;
  if (req.body.flightNo) {
    const flight = new Flight(req.body);
    flight.save(function (error) {
      if (error) {
        return res.render("flights/new");
      }
      res.redirect("flights");
    });
  }
}

function indexFlights(req, res) {
  Flight.find({}, function (err, flight) {
    res.render("flights/index", {
      flight,
    });
  });
}

// keep below functions
module.exports = {
  new: newFlight,
  create,
  index: indexFlights,
};
