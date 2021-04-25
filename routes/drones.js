const express = require('express');

const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res) => {
  Drone.find({})
    .then((drones)=> {
      console.log(drones);
      res.render('drones/list', {drones});
    })
    .catch((err) => console.log('Error retrieving drones from DB: ', err));
});

// router.get('/drones/create', (req, res, next) => {
//   // Iteration #3: Add a new drone
//   // ... your code here
// });

// router.post('/drones/create', (req, res, next) => {
//   // Iteration #3: Add a new drone
//   // ... your code here
// });

// router.get('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
// });

// router.post('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
// });

// router.post('/drones/:id/delete', (req, res, next) => {
//   // Iteration #5: Delete the drone
//   // ... your code here
// });

module.exports = router;
