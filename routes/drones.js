const express = require('express');

const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res) => {
  Drone.find({})
    .then((drones)=> res.render('drones/list', {drones}))
    .catch((err) => console.log('Error retrieving drones from DB: ', err));
});

router.get('/drones/create', (req, res, next) => res.render('drones/create-form'));

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  Drone.create({name, propellers, maxSpeed})
    .then(()=> res.redirect('/drones'))
    .catch(()=> res.render('drones/create-form'))
});

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
