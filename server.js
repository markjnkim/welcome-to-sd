// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
// var path = require("path");
// var nodemailer = require("nodemailer");


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();
var exphbs= require('express-handlebars');

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files with Express 
app.use('/assets', express.static(__dirname + '/assets'));
// app.use('/css', express.static(__dirname + '/css'));
// app.use('/js', express.static(__dirname + '/js'));

// Config express handlebars `hbs.engine with the Express app
app.engine('.hbs', exphbs({
    defaultLayout:  'main',
    extname:        '.hbs', 
    layoutsDir:     'views/layouts/', 
    partialsDir:    'views/partials/'
}));
app.set('view engine', '.hbs'); 

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
