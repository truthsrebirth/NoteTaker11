// this file will be for redirecting routes

// declare variables as constants
const fs = require('fs');
const path = require('path');

// module.exports exports a particular function
module.exports = app => {

    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        const notes = JSON.parse(data);