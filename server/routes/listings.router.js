var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListingSchema = new Schema({ cost: Number, sqft: Number, city: String });
var Listing = mongoose.model('Listing', ListingSchema, 'listings');

router.get('/featured', function (req, res) {
    Listing.find({}).sort('cost').exec(function (err, foundListings) {
        if (err) {
            console.log('Error', err);
            res.sendStatus(500);
        } else {
            console.log(foundListings[0]);
            res.send(foundListings);
        };
    });
});

router.get('/', function (req, res) {
    Listing.find({}, function (err, foundListings) {
        if (err) {
            console.log('Error', err);
            res.sendStatus(500);
        } else {
            res.send(foundListings);
        };
    });
});

router.post('/', function (req, res) {
    var listingToAdd = new Listing(req.body);
    listingToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.send(201);
        };
    });
});

router.delete('/:id', function (req, res) {
    var listingId = req.params.id;
    Listing.findByIdAndRemove({ '_id': listingId }, function (err, data) {
        if (err) {
            console.log('Error', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        };
    });
});

module.exports = router;