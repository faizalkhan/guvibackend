const  connectToMongoose = require("./db.js");

connectToMongoose();

const express = require("express");

const app = express();

const port = 5000;

var cors = require("cors");

app.use(cors);

app.use(express.json());

app.listen(port, () => {
    console.log("listening on port " + port);
});
