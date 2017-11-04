var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var listings = require('./routes/listings.router.js');
var rentals = require('./routes/rentals.router.js');
var port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('server/public'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/listings', listings);
app.use('/rentals', rentals);

/** ---------- MONGOOSE ---------------- */
var mongoose = require('mongoose');
// gamestop is the name of our database
// 27017 is the port number
var databaseUrl = 'mongodb://localhost:27017/realestate';

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function () {
    console.log('mongoose connection failed');
});

mongoose.connect(databaseUrl);
// Eventually, the mongooose code should be in a module

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
