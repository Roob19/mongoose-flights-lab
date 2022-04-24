var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

// if user visits http://localhost:3000/new
router.get('/', flightsCtrl.new);

router.post('/', flightsCtrl.create);

router.get('/index', flightsCtrl.index);

module.exports = router;
