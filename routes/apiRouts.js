// Dependencies
const fs = require("fs");
const path = require("path");
// link the "database" as we are calling it

// database
const db = require('../db/db.json');

module.exports = function(app) {
  // read the `db.json` file and return all saved notes as JSON
  app.get("/api/notes", (req, res) => {
    console.log("--------------------------------------------------------------------")
    res.sendFile(path.join(path.join(__dirname, "../notes"), "../db/db.json"));
    console.log(db)
    console.log("--------------------------------------------------------------------")
  });

  // receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
  app.post('/api/notes', (req, res) => {
    // new note
    var newNote = req.body;
    // load the existing database
    var existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    // add unique id to the new note
    var noteID = (existingNotes.length).toString();
    // add the id to the new note object
    newNote.id = noteID;
    // add the new note to existing notes
    existingNotes.push(newNote);
    // overwrite the db with the new file
    fs.writeFileSync("./db/db.json", JSON.stringify(existingNotes));
    // return the new note in the res
    res.json(newNote)
    console.log("New note " + newNote.title + " added to notes the DB.");
  });

  app.delete('/api/notes/:id', (req, res) => {
    // load the existing database
    var existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    console.log(existingNotes)
    // get the id of the 
    var noteID = req.params.id;
    // splice the value from the notes list
    existingNotes.splice(noteID,1);
    // overwrite the db with the new file
    fs.writeFileSync("./db/db.json", JSON.stringify(existingNotes));
    console.log(existingNotes)
    res.json(existingNotes)
  });



};
  