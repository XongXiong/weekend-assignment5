var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListingSchema = new Schema({ cost: Number, sqft: Number, city: String});
// Listing links us to our collection
// We pass in ListingSchema
// Listings is our collection
var Listing = mongoose.model('Listing', ListingSchema, 'listings');

router.get('/', function(req, res){
    Listing.find({}, function(err, foundListings){
        if (err){
            console.log('Error', err);
            res.sendStatus(500);
        } else {
            res.send(foundListings);
        }
    });
});

module.exports = router;