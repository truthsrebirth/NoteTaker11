// declare variables as constants

const express = require("express");
const fs = ("fs");
const path = require("path");
const app = express();

// app will listen through port 3000

const PORT = process.env.PORT || 3000;

// place the middleware apps here

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes will connect here

require('./routes/routes')(app);

// funciton is being used to listen and bind connections

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  