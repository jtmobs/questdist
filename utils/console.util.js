"use strict";

/* external import */
var colors = require("colors");

/* set colors as theme */
colors.setTheme({
  success: "cyan",
  error: "red",
  warning: "yellow"
});
exports.successMessage = function (message) {
  console.log("[Success] - ".concat(message).success);
};
exports.warningMessage = function (message) {
  console.log("[Warning] - ".concat(message).warning.italic);
};
exports.errorMessage = function (message) {
  console.log("[Error] - ".concat(message).error.bold.italic);
};