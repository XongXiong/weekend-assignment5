var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentalSchema = new Schema({ rent: Number, sqft: Number, city: String });
// Rental links us to our collection
// We pass in RentalSchema
// Rentals is our collection
var Rental = mongoose.model('Rental', RentalSchema, 'rentals');

router.get('/', function (req, res) {
    Rental.find({}, function (err, foundRentals) {
        if (err) {
            console.log('Error', err);
            res.sendStatus(500);
        } else {
            res.send(foundRentals);
        }
    });
});

module.exports = router;