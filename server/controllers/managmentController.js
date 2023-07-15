const User = require("../models/User.js");
const Transaction = require("../models/Transaction.js");
const mongoose = require("mongoose");

const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



module.exports = { getAdmins };
