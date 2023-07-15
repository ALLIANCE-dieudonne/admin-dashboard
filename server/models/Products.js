const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id:Number,
    name: String,
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true   
    },
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
