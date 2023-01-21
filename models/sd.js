const mongoose = require("mongoose");

const detail = mongoose.Schema(
  {
    customerId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Detail = mongoose.model("Detail", detail);

module.exports = Detail;
