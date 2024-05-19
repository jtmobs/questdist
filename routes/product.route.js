"use strict";

/* external import */
var express = require("express");

/* middleware imports */
var upload = require("../middleware/upload.middleware");
var verify = require("../middleware/verify.middleware");
var authorize = require("../middleware/authorize.middleware");

/* internal import */
var productController = require("../controllers/product.controller");

/* router level connection */
var router = express.Router();

/* router methods integration */

// add new product
router.post("/add-product", verify, authorize("admin", "seller"), upload.fields([{
  name: "thumbnail",
  maxCount: 1
}, {
  name: "gallery",
  maxCount: 5
}]), productController.addProduct);

// get all products
router.get("/get-products", productController.getProducts);

// update product
router.patch("/update-product/:id", verify, authorize("admin", "seller"), upload.fields([{
  name: "thumbnail",
  maxCount: 1
}, {
  name: "gallery",
  maxCount: 5
}]), productController.updateProduct);

// get a single product
router.get("/get-product/:id", productController.getProduct);

// filtered products
router.get("/filtered-products", productController.getFilteredProducts);

// delete product
router["delete"]("/delete-product/:id", verify, authorize("admin", "seller"), productController.deleteProduct);
module.exports = router;