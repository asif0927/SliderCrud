const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const router = require('./routes');
app.use('/api/sliders',router.slider);

PORT = 4343;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

mongoose.connect('mongodb+srv://asif_admin:Admin123@app.6i78tjn.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Mongo DB connected!");
});