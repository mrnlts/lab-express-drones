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

router.get('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  Drone.findById(id)
    .then((drone)=> {
      res.render('drones/update-form', {drone});
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;
  console.log("id: ", id, "name: ", name);
  
  Drone.findByIdAndUpdate({"_id": id}, {name, propellers, maxSpeed})
    .then(()=> {
      res.redirect('/drones');
    })
    .catch(()=> res.render('drones/create-form'));
  });

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params;
  Drone.findByIdAndRemove(id)
    .then(()=> res.redirect('/drones'));
});

module.exports = router;
