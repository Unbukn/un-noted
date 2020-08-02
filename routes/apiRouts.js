const path = require("path");
// link the "database" as we are calling it

const db = require('../db/db');

module.exports = function(app) {
    app.get("/api/notes", (req, res) => {
      res.json(db);
      console.log(db)
    });
  
app.post('/api/notes', (req, res) => {
// receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
db.push(req.body);

    res.json(true);


});
  

};
  