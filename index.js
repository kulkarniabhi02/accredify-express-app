const express = require('express');
const app = express();
const user = require("./user.json");
const career = require("./career.json");
const documents = require("./documents.json");
const PORT = 3000;


app.get("/user", (req, res) => {
    try {
        // verify request body if necessary
        res.status(200).send(user);
    } catch (error) {
        console.log('user error :: ', error)
        res.sendStatus(500);
    }
});

app.get("/documents", async (req, res) => {
    try {
        // verify request body if necessary
        res.status(200).send(documents);
    } catch (error) {
        console.log('user error :: ', error)
        res.sendStatus(500);
    }
});

app.get("/career", async (req, res) => {
    try {
        // verify request body if necessary
        res.status(200).send(career);
    } catch (error) {
        console.log('user error :: ', error)
        res.sendStatus(500);
    }
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running, and App is listening on port ${PORT}`)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

module.exports = app;