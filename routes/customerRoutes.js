const express = require("express");
const customerController = require("../controllers/customerController");

const router = express.Router();

router.get("/customers", customerController.getCustomers);

module.exports = router;
