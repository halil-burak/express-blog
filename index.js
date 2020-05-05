const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

//removed the db url and the password from the code and converted them into env vars
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING + "/acmedb", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    app.use(bodyParser.json());
    app.use("/api", routes);

    app.listen(5000, () => {
      console.log("Server has started");
    });
  })
  .catch((err) => {
    console.error("Error on startup:", err.stack);
    process.exit(1);
  });
