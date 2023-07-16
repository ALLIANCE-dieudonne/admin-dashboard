import User from "../models/User";
import Transaction from "../models/Transaction";
import OverallStat from "../models/OverallStat";

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getDashboardStats = async (req, res) => {
  try {
    // Hard coded stats
    const currentMonth = "November";
    const currentDate = "2021-11-15";
    const currentYear = 2021;

    // Recent transactions
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    const overAllstats = await OverallStat.findOne({ year: currentYear });

    if (!overAllstats) {
      return res.status(404).json({ message: "Stats not found." });
    }

    const {
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
      dailyData,
    } = overAllstats;

    const thisMonthStats = monthlyData.find(
      ({ month }) => month === currentMonth
    );
    const todayStats = dailyData.find(({ date }) => date === currentDate);

    res.status(200).json({
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      thisMonthStats,
      salesByCategory,
      todayStats,
      monthlyData,
      transactions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUser, getDashboardStats };
