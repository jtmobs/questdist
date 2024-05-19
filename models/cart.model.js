"use strict";

/* external imports */
var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

/* create cart schema */
var cartSchema = new mongoose.Schema({
  // for product
  product: {
    type: ObjectId,
    ref: "Product"
  },
  // for user
  user: {
    type: ObjectId,
    ref: "User"
  },
  // for sessions
  sessionId: {
    type: String,
    ref: "Session"
  },
  // for quantity
  quantity: {
    type: Number,
    "default": 1
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

/* create cart schema */
var Cart = mongoose.model("Cart", cartSchema);

/* export cart schema */
module.exports = Cart;