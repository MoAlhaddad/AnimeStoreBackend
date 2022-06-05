const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/animeRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/animes", router); //localhost:5000/animes

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => console.log(err));

console.log("Hello World");
