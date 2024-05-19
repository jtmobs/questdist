"use strict";

/* external imports */
var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

/* create purchase schema */
var purchaseSchema = new mongoose.Schema({
  // for customer
  customer: {
    type: ObjectId,
    ref: "User"
  },
  // for products
  products: [{
    product: {
      type: ObjectId,
      ref: "Product"
    },
    quantity: {
      type: Number,
      "default": 1
    }
  }],
  // for customer ID
  customerId: {
    type: String,
    required: true
  },
  // for order ID
  orderId: {
    type: String,
    required: true
  },
  // for total amount
  totalAmount: {
    type: Number,
    required: true
  },
  // order status
  status: {
    type: String,
    "enum": ["pending", "delivered"],
    "default": "pending"
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

/* create purchase model */
var Purchase = mongoose.model("Purchase", purchaseSchema);

/* export purchase model */
module.exports = Purchase;