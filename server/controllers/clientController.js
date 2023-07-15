const Products = require("../models/Products");
const ProductStat = require("../models/ProductStat");
const Transaction = require("../models/Transaction");
const getCountryIso3 = require("country-iso-2-to-3")
const User = require("../models/User");
const getProducts = async (req, res) => {
  try {
    const products = await Products.find();

    const productWithStat = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });

        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productWithStat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
    console.log(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getTransactions = async (req, res) => {
  try {
    //how the sort should look like {"field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    //formatted sort should look like {userId: -1}
    const generateSort = () => {
      const sortParsed = sort ? JSON.parse(sort) : {};
      const sortFormatted = {
        [sortParsed.field]: sortParsed.sort === "desc" ? -1 : 1,
      };
      return sortFormatted;
    };

    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    //total number of objects that exist in the database

    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: "i" },
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    const mapLocations = users.reduce((acc, { country }) => {
      const countryIso3 = getCountryIso3(country);
      if (!acc[countryIso3]) {
        acc[countryIso3] = 0;
      }
      acc[countryIso3]++;
      return acc;
    }, {});

    const formattedLocations = Object.entries(mapLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formattedLocations)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography
};
