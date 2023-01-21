const express = require("express");
const app = express();
// const logger = require("./logger");
// require("dotenv").config();
const cors = require("cors");

app.use(express.json());

const db = require("./config/mongoose");
app.use(cors());

app.use("/api", require("./routes/api"));

app.listen(process.env.PORT || 3030, () => {
  console.log("started");
});

module.exports = app;
