const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

mongoose
  .connect(
    "mongodb+srv://halilburak:test@cluster0-dhphg.mongodb.net/test?retryWrites=true&w=majority/acmedb",
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();
    app.use("/api", routes);
    app.use(bodyParser.json());

    app.listen(5000, () => {
      console.log("Server has started");
    });
  })
  .catch((err) => {
    console.error("Error on startup:", err.stack);
    process.exit(1);
  });
