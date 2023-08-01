const express = require("express");

const dotenv = require("dotenv").config();

const mongoose = require("mongoose");

const userRoute = require("./routes/userRoute");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/user", userRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("SERVER IS RUNNING");
    });
  })
  .catch((err) => {
    console.log("Something went wrong with the server : " + err.message);
  });
