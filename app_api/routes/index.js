const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

// /api/trips
router
  .route('/trips')
  .get(ctrlTrips.tripsList)      // GET all trips
  .post(ctrlTrips.tripsCreate);  // POST create new trip

// /api/trips/:tripCode
router
  .route('/trips/:tripCode')
  .get(ctrlTrips.tripsFindCode)      // GET one trip by code
  .put(ctrlTrips.tripsUpdateOne)     // PUT update trip
  .delete(ctrlTrips.tripsDeleteOne); // DELETE trip

module.exports = router;
