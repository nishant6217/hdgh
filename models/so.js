const mongoose = require("mongoose");

const otp = mongoose.Schema(
  {
    customerId: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Otp = mongoose.model("Otp", otp);

module.exports = Otp;
