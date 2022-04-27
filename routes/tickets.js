const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

router.get('/new', ticketsCtrl.new);
router.get('/:id', ticketsCtrl.index);
router.post('/tickets', ticketsCtrl.create);
router.post('/flights/:id/tickets', ticketsCtrl.addToTickets);

module.exports = router;