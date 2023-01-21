const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://pratik:pratik6217@cluster0.kugedx9.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", console.error.bind("error!!"));

db.once("open", function () {
  console.log("connected");
});

module.exports = db;
