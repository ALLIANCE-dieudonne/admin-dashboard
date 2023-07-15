const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const clientRoutes = require("./routes/client");
const generalRoutes = require("./routes/general");
const managementRoutes = require("./routes/management");
const salesRoutes = require("./routes/sales");

// data import
const Product = require("./models/Products");
const ProductStat = require("./models/ProductStat");
const User = require("./models/User");
const Transaction = require('./models/Transaction')
const OverallStat = require("./models/OverallStat");
const AffiliateStat = require("./models/AffiliateStat")
const {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat
} = require("./data/index");



// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

//Routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

//MONGO CONNECTION
const PORT = process.env.PORT || 4500;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}!`);
    });

    //ADD DATA TO THE DATABASE

    // User.insertMany(dataUser);
    //  Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);

    console.log(`Successful connected to mongodb!`);
  })
  .catch((error) => {
    console.log(`${error} did not connect!`);
  });
