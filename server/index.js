import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import cors from "cors";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// data import
import Product from "./models/Products";
import ProductStat from "./models/ProductStat";
import User from "./models/User";
import Transaction from "./models/Transaction";
import OverallStat from "./models/OverallStat";
import AffiliateStat from "./models/AffiliateStat";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index";


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
