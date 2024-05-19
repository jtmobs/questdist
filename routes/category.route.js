"use strict";

/**
 * Title: Write a program using JavaScript on Category Route
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https:/instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 11, November 2023
 */

/* external import */
var express = require("express");

/* middleware imports */
var upload = require("../middleware/upload.middleware");

/* internal import */
var categoryController = require("../controllers/category.controller");
var verify = require("../middleware/verify.middleware");
var authorize = require("../middleware/authorize.middleware");

/* router level connection */
var router = express.Router();

/* router methods integration */

// add new category
router.post("/add-category", verify, authorize("admin", "seller"), upload.single("thumbnail"), categoryController.addCategory);

// get all categories
router.get("/get-categories", categoryController.getCategories);

// get a category
router.get("/get-category/:id", categoryController.getCategory);

// update category
router.patch("/update-category/:id", verify, authorize("admin", "seller"), upload.single("thumbnail"), categoryController.updateCategory);

// delete category
router["delete"]("/delete-category/:id", verify, authorize("admin", "seller"), categoryController.deleteCategory);
module.exports = router;