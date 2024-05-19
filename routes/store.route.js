"use strict";

/* external import */
var express = require("express");

/* middleware imports */
var upload = require("../middleware/upload.middleware");

/* internal import */
var storeController = require("../controllers/store.controller");
var verify = require("../middleware/verify.middleware");
var authorize = require("../middleware/authorize.middleware");
var restrict = require("../middleware/restrict.middleware");

/* router level connection */
var router = express.Router();

/* router methods integration */

// add new store
router.post("/add-store", verify, authorize("admin", "seller"), restrict, upload.single("thumbnail"), storeController.addStore);

// get all stores
router.get("/get-stores", storeController.getStores);

// get a store
router.get("/get-store/:id", storeController.getStore);

// update store
router.patch("/update-store/:id", verify, authorize("admin", "seller"), upload.single("thumbnail"), storeController.updateStore);

// delete store
router["delete"]("/delete-store/:id", verify, authorize("admin", "seller"), storeController.deleteStore);
module.exports = router;