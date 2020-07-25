// Dependencies here
const express = require('express');
const path = require('path');

// create the express server
const app = express();

// tell the server what port to run on
var PORT = process.env.PORT || 6023; // either environment defined port or 6023

// // express app to handle data parsing
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// ROUTES BELOW
app.get("/notes", function(req, res) {
    // return the notes page
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });

// when user navigates to any site other then specified take them to the index html
app.get("*", function(req, res) {
    // return the index page
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

// =========================SERVER LISTENER====================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  