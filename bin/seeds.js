// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
const dronesArr = [
    {
        name: 'DJI FPV',
        propellers: 4,
        maxSpeed: 140
    },
    {
        name: 'Phantom 3 Standard',
        propellers: 4,
        maxSpeed: 57
    },
    {
        name: 'Mavic 2',
        propellers: 4,
        maxSpeed: 72
    }
]

mongoose
    .connect("mongodb://localhost:27017/express-drones-dev", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(()=> Drone.create(dronesArr))
    .then(()=> console.log('Drones created'))
    .catch((err)=> console.log('There was an error seeding: ', err))
    .finally(()=> mongoose.connection.close())
