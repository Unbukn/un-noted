// Dependencies here
const express = require('express');

// create the express server
const app = express();

// tell the server what port to run on
var PORT = process.env.PORT || 6023; // either environment defined port or 6023

// express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/apiRouts.js")(app);
require("./routes/htmlRoutes.js")(app);

// =========================SERVER LISTENER====================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  