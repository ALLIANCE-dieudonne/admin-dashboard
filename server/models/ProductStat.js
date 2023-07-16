import mongoose from "mongoose";
const productStatSchema = new mongoose.Schema(
  {
    id: String,
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
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
  },
  { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", productStatSchema);

export default ProductStat;