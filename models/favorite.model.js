"use strict";

/* external imports */
var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

/* create favorite schema */
var favoriteSchema = new mongoose.Schema({
  // for user
  user: {
    type: ObjectId,
    ref: "User"
  },
  // for product
  product: {
    type: ObjectId,
    ref: "Product"
  },
  // for user account time stamps
  createdAt: {
    type: Date,
    "default": Date.now
  },
  updatedAt: {
    type: Date,
    "default": Date.now
  }
}, {
  timestamps: true
});

/* create favorite model */
var Favorite = mongoose.model("Favorite", favoriteSchema);

/* export favorite model */
module.exports = Favorite;