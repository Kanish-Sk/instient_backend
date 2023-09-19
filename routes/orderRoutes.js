const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.get("/orders/:customerId", orderController.getOrderByCustomer);
router.get("/summary", orderController.getSummary);

module.exports = router;
