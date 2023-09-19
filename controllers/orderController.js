const orderModel = require("../models/orderModel");
const CustomError = require("../util/CustomError");

const getOrderByCustomer = async (req, res, next) => {
  const customerId = req.params.customerId;
  try {
    const orders = await orderModel.getOrderByCustomer(customerId);
    if (orders.length === 0) {
      error = new CustomError("No orders found for this customer", 404);
      next(error);
    } else {
      res.json(orders);
    }
  } catch (err) {
    next(err);
  }
};

const getSummary = async (req, res, next) => {
  try {
    const customerOrders = await orderModel.getCustomerOrders();
    if (customerOrders.length === 0) {
      error = new CustomError("No data found", 404);
      next(error);
    } else {
      res.json(customerOrders);
    }
  } catch (err) {
    next(err);
  }
};

exports.getOrderByCustomer = getOrderByCustomer;
exports.getSummary = getSummary;
