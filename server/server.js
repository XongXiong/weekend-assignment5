var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var listings = require('./routes/listings.router.js');
var rentals = require('./routes/rentals.router.js');
var port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static('server/public'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/listings', listings);
app.use('/rentals', rentals);

/** ---------- MONGOOSE ---------------- */
var mongoose = require('mongoose');
var mongoURI = '';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if (process.env.MONGODB_URI) {
    mongoURI = process.env.MONGODB_URI;
} else {
    mongoURI = 'mongodb://localhost:27017/realestate';
}

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function () {
    console.log('mongoose connection failed');
});

mongoose.connect(mongoURI);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
