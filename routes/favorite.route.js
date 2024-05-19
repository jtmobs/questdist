"use strict";

/* external import */
var express = require("express");

/* middleware imports */
var verify = require("../middleware/verify.middleware");
var authorize = require("../middleware/authorize.middleware");

/* internal import */
var favoriteController = require("../controllers/favorite.controller");

/* router level connection */
var router = express.Router();

/* router methods integration */

// add to favorite
router.post("/add-to-favorite", verify, authorize("buyer"), favoriteController.addToFavorite);

// get favorites
router.get("/get-favorites", verify, authorize("admin"), favoriteController.getFavorites);

// delete from favorite
router["delete"]("/delete-from-favorite/:id", verify, authorize("buyer"), favoriteController.deleteFromFavorite);

/* export user router */
module.exports = router;