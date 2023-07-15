const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const affiliateSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  affiliateSales: { type: [mongoose.Types.ObjectId], ref: "Transaction" },
},{timestamps: true});

const AffiliateStat = mongoose.model("AffiliateStat", affiliateSchema);
module.exports = AffiliateStat;
