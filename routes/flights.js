const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);// if user visits http://localhost:3000/new
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);


module.exports = router;
