"use strict";

/* external import */
var express = require("express");

/* middleware imports */
var verify = require("../middleware/verify.middleware");
var authorize = require("../middleware/authorize.middleware");

/* internal import */
var paymentController = require("../controllers/payment.controller");

/* router level connection */
var router = express.Router();

/* router methods integration */

// create payment
router.post("/create-payment", verify, authorize("buyer"), paymentController.createPayment);

/* export router */
module.exports = router;