const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const overallStatSchema = new Schema(
  {
    totalCustomers: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },

  { timestamps: true }
);

const OverallStat = mongoose.model("OverallStat", overallStatSchema);

module.exports = OverallStat;
