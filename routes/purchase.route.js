"use strict";

/* external import */
var express = require("express");

/* middleware imports */
var verify = require("../middleware/verify.middleware");
var authorize = require("../middleware/authorize.middleware");

/* internal import */
var purchaseController = require("../controllers/purchase.controller");

/* router level connection */
var router = express.Router();

/* router methods integration */

// get all purchases
router.get("/get-all-purchases", verify, authorize("admin"), purchaseController.getAllPurchases);

// update purchase status
router.patch("/update-purchase-status/:id", verify, authorize("admin"), purchaseController.updatePurchaseStatus);

/* export purchase router */
module.exports = router;