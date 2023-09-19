const customerModel = require("../models/customerModel");
const CustomError = require("../util/CustomError");

const getCustomers = async (req, res, next) => {
  try {
    const customers = await customerModel.getCustomers();
    if (customers.length === 0) {
      next(new CustomError("No customers found", 404));
    } else {
      res.json(customers);
    }
  } catch (err) {
    next(err);
  }
};

exports.getCustomers = getCustomers;
