"use strict";

function error(err, req, res, next) {
  res.status(err.status || 500).json({
    acknowledgement: false,
    message: err.name,
    description: err.message
  });
}
module.exports = error;