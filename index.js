"use strict";

/* external imports */
var mongoose = require("mongoose");
require("dotenv").config();

/* internal imports */
var app = require("./app");
var consoleMessage = require("./utils/console.util");
var port = process.env.PORT || 3000;

/* database connection */
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return consoleMessage.successMessage("Connected to MongoDB.");
})["catch"](function (error) {
  return consoleMessage.errorMessage(error.message);
});

/* establish server port */
app.listen(port, function () {
  consoleMessage.warningMessage("Server is running on port ".concat(port, "."));
});