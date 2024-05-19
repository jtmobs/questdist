"use strict";

/* external import */
var jwt = require("jsonwebtoken");
function token(_ref) {
  var _id = _ref._id,
    name = _ref.name,
    email = _ref.email,
    role = _ref.role,
    status = _ref.status;
  // grab specific user info to generate jwt token
  var accessToken = jwt.sign({
    _id: _id,
    name: name,
    email: email,
    role: role,
    status: status
  }, process.env.TOKEN_SECRET);
  return accessToken;
}

/* export token utility */
module.exports = token;