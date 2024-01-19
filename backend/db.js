const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/guvi-react";


const connectToMongoose = () => mongoos.connect(mongoURL).then(() => console.log("Database connection established"));


emodule.exports = connectToMongoose;