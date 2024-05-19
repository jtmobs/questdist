"use strict";

/* external import */
var express = require("express");

/* middleware imports */
var verify = require("../middleware/verify.middleware");
var authorize = require("../middleware/authorize.middleware");

/* internal import */
var reviewController = require("../controllers/review.controller");

/* router level connection */
var router = express.Router();

/* router methods integration */

// add to review
router.post("/add-review", verify, authorize("buyer"), reviewController.addReview);

// get from review
router.get("/get-reviews", reviewController.getReviews);

// update review
router.patch("/update-review/:id", verify, authorize("buyer"), reviewController.updateReview);

// delete review
router["delete"]("/delete-review/:id", verify, authorize("seller", "admin"), reviewController.deleteReview);

/* export review router */
module.exports = router;