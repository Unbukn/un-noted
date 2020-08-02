var path = require("path");

module.exports = function(app) {
    app.get("/notes", function(req, res) {
    // return the notes page
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // when user navigates to any site other then specified take them to the index html
    app.get("*", function(req, res) {
    // return the index page
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};
