"use strict";

function authorize() {
  for (var _len = arguments.length, role = new Array(_len), _key = 0; _key < _len; _key++) {
    role[_key] = arguments[_key];
  }
  return function (req, res, next) {
    // catch & match the user role
    var userRole = req.user.role;

    // revoke access based on role
    if (!role.includes(userRole)) {
      return res.status(403).json({
        acknowledgement: false,
        message: "Forbidden",
        description: "You're not applicable to access this page and features"
      });
    }
    next();
  };
}
module.exports = authorize;