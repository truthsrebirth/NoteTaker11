// this file will be for redirecting routes

// declare variables as constants
const fs = require('fs');
const path = require('path');

// module.exports exports a particular function
module.exports = app => {

    // fs.readFile reads any/all file types
    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        const notes = JSON.parse(data);

    // GET route targeting the api/notes
    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });
        
    // POST route targeting api/notes
    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        notes.push(newNote);
        updateDb();
        console.log("Added new note: "+newNote.title);
        return res.json(newNote);
        });
    
        // GET route targeting api/notes/id
    app.get("/api/notes/:id", function(req,res) {
        res.json(notes[req.params.id]);
    });

