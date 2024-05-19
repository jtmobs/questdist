"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* internal imports */
var Brand = require("../models/brand.model");
var Cart = require("../models/cart.model");
var Category = require("../models/category.model");
var Favorite = require("../models/favorite.model");
var Product = require("../models/product.model");
var Purchase = require("../models/purchase.model");
var Review = require("../models/review.model");
var Store = require("../models/store.model");
var User = require("../models/user.model");
var remove = require("../utils/remove.util");
var token = require("../utils/token.util");

/* sign up an user */
exports.signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var body, file, user;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          body = req.body, file = req.file; // Create a new user instance
          user = new User({
            name: body.name,
            email: body.email,
            password: body.password,
            phone: body.phone
          });
          if (file) {
            user.avatar = {
              url: file.path,
              public_id: file.filename
            };
          }
          _context.next = 5;
          return user.save();
        case 5:
          res.status(201).json({
            acknowledgement: true,
            message: "Created",
            description: "User created successfully"
          });
          return _context.abrupt("return", user);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* sign in an user */
exports.signIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var user, isPasswordValid, accessToken;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return User.findOne({
            email: req.body.email
          });
        case 2:
          user = _context2.sent;
          if (!user) {
            res.status(404).json({
              acknowledgement: false,
              message: "Not Found",
              description: "User not found"
            });
          } else {
            isPasswordValid = user.comparePassword(req.body.password, user.password);
            if (!isPasswordValid) {
              res.status(401).json({
                acknowledgement: false,
                message: "Unauthorized",
                description: "Invalid password"
              });
            } else {
              if (user.status === "inactive") {
                res.status(401).json({
                  acknowledgement: false,
                  message: "Unauthorized",
                  description: "Your seller account in a review state"
                });
              } else {
                accessToken = token({
                  _id: user._id,
                  name: user.name,
                  email: user.email,
                  role: user.role,
                  status: user.status
                });
                res.status(200).json({
                  acknowledgement: true,
                  message: "OK",
                  description: "Login successful",
                  accessToken: accessToken
                });
              }
            }
          }
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/* reset user password */
exports.forgotPassword = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var user, hashedPassword;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return User.findOne({
            email: req.body.email
          });
        case 2:
          user = _context3.sent;
          if (user) {
            _context3.next = 7;
            break;
          }
          res.status(404).json({
            acknowledgement: false,
            message: "Not Found",
            description: "User not found"
          });
          _context3.next = 11;
          break;
        case 7:
          hashedPassword = user.encryptedPassword(req.body.password);
          _context3.next = 10;
          return User.findOneAndUpdate({
            email: req.body.email
          }, {
            password: hashedPassword
          }, {
            runValidators: false,
            returnOriginal: false
          });
        case 10:
          res.status(200).json({
            acknowledgement: true,
            message: "OK",
            description: "Password reset successful"
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/* login persistance */
exports.persistLogin = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var user;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return User.findById(req.user._id).populate([{
            path: "cart",
            populate: [{
              path: "product",
              populate: ["brand", "category", "store"]
            }, "user"]
          }, {
            path: "reviews",
            populate: ["product", "reviewer"]
          }, {
            path: "favorites",
            populate: [{
              path: "product",
              populate: ["brand", "category", "store"]
            }, "user"]
          }, {
            path: "purchases",
            populate: ["customer", "products.product"]
          }, "store", "brand", "category", "products"]);
        case 2:
          user = _context4.sent;
          if (!user) {
            res.status(404).json({
              acknowledgement: false,
              message: "Not Found",
              description: "User not found"
            });
          } else {
            res.status(200).json({
              acknowledgement: true,
              message: "OK",
              description: "Login successful",
              data: user
            });
          }
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/* get all users */
exports.getUsers = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return User.find().populate("store").populate(["brand", "category", "store"]);
        case 2:
          users = _context5.sent;
          res.status(200).json({
            acknowledgement: true,
            message: "OK",
            description: "Users retrieved successfully",
            data: users
          });
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9) {
    return _ref5.apply(this, arguments);
  };
}();

/* get single user */
exports.getUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var user;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return User.findById(req.params.id).populate("store");
        case 2:
          user = _context6.sent;
          res.status(200).json({
            acknowledgement: true,
            message: "OK",
            description: "".concat(user.name, "'s information retrieved successfully"),
            data: user
          });
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

/* update user information */
exports.updateUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var existingUser, user, _existingUser$avatar, updatedUser;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return User.findById(req.user._id);
        case 2:
          existingUser = _context7.sent;
          user = req.body;
          if (!(!req.body.avatar && req.file)) {
            _context7.next = 8;
            break;
          }
          _context7.next = 7;
          return remove((_existingUser$avatar = existingUser.avatar) === null || _existingUser$avatar === void 0 ? void 0 : _existingUser$avatar.public_id);
        case 7:
          user.avatar = {
            url: req.file.path,
            public_id: req.file.filename
          };
        case 8:
          _context7.next = 10;
          return User.findByIdAndUpdate(existingUser._id, {
            $set: user
          }, {
            runValidators: true
          });
        case 10:
          updatedUser = _context7.sent;
          res.status(200).json({
            acknowledgement: true,
            message: "OK",
            description: "".concat(updatedUser.name, "'s information updated successfully")
          });
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

/* update user information */
exports.updateUserInfo = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var existingUser, user, _existingUser$avatar2, updatedUser;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return User.findById(req.params.id);
        case 2:
          existingUser = _context8.sent;
          user = req.body;
          if (!(!req.body.avatar && req.file)) {
            _context8.next = 8;
            break;
          }
          _context8.next = 7;
          return remove((_existingUser$avatar2 = existingUser.avatar) === null || _existingUser$avatar2 === void 0 ? void 0 : _existingUser$avatar2.public_id);
        case 7:
          user.avatar = {
            url: req.file.path,
            public_id: req.file.filename
          };
        case 8:
          _context8.next = 10;
          return User.findByIdAndUpdate(existingUser._id, {
            $set: user
          }, {
            runValidators: true
          });
        case 10:
          updatedUser = _context8.sent;
          res.status(200).json({
            acknowledgement: true,
            message: "OK",
            description: "".concat(updatedUser.name, "'s information updated successfully")
          });
        case 12:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}();

/* delete user information */
exports.deleteUser = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var _user$avatar;
    var user, _store$thumbnail, store, _category$thumbnail, category, _brand$logo, brand;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return User.findByIdAndDelete(req.params.id);
        case 2:
          user = _context22.sent;
          _context22.next = 5;
          return remove((_user$avatar = user.avatar) === null || _user$avatar === void 0 ? void 0 : _user$avatar.public_id);
        case 5:
          // remove user cart
          if (user.cart.length > 0) {
            user.cart.forEach( /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(cart) {
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return Cart.findByIdAndDelete(cart._id);
                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9);
              }));
              return function (_x18) {
                return _ref10.apply(this, arguments);
              };
            }());
          }

          // remove user favorites
          if (user.favorites.length > 0) {
            user.favorites.forEach( /*#__PURE__*/function () {
              var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(favorite) {
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return Favorite.findByIdAndDelete(favorite._id);
                    case 2:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10);
              }));
              return function (_x19) {
                return _ref11.apply(this, arguments);
              };
            }());
          }

          // remove user reviews
          if (user.reviews.length > 0) {
            user.reviews.forEach( /*#__PURE__*/function () {
              var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(review) {
                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return Review.findByIdAndDelete(review._id);
                    case 2:
                    case "end":
                      return _context11.stop();
                  }
                }, _callee11);
              }));
              return function (_x20) {
                return _ref12.apply(this, arguments);
              };
            }());
          }

          // remove user purchases
          if (user.purchases.length > 0) {
            user.purchases.forEach( /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(purchase) {
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return Purchase.findByIdAndDelete(purchase._id);
                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12);
              }));
              return function (_x21) {
                return _ref13.apply(this, arguments);
              };
            }());
          }

          // remove store
          if (!user.store) {
            _context22.next = 16;
            break;
          }
          _context22.next = 12;
          return Store.findByIdAndDelete(user.store);
        case 12:
          store = _context22.sent;
          _context22.next = 15;
          return remove(store === null || store === void 0 || (_store$thumbnail = store.thumbnail) === null || _store$thumbnail === void 0 ? void 0 : _store$thumbnail.public_id);
        case 15:
          // remove store products
          store.products.forEach( /*#__PURE__*/function () {
            var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(prod) {
              var _product$thumbnail;
              var product;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return Product.findByIdAndDelete(prod);
                  case 2:
                    product = _context15.sent;
                    _context15.next = 5;
                    return remove(product === null || product === void 0 || (_product$thumbnail = product.thumbnail) === null || _product$thumbnail === void 0 ? void 0 : _product$thumbnail.public_id);
                  case 5:
                    // remove product gallery
                    product.gallery.forEach( /*#__PURE__*/function () {
                      var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(gallery) {
                        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                          while (1) switch (_context13.prev = _context13.next) {
                            case 0:
                              _context13.next = 2;
                              return remove(gallery === null || gallery === void 0 ? void 0 : gallery.public_id);
                            case 2:
                            case "end":
                              return _context13.stop();
                          }
                        }, _callee13);
                      }));
                      return function (_x23) {
                        return _ref15.apply(this, arguments);
                      };
                    }());

                    // remove product reviews
                    product.reviews.forEach( /*#__PURE__*/function () {
                      var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(review) {
                        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                          while (1) switch (_context14.prev = _context14.next) {
                            case 0:
                              _context14.next = 2;
                              return Review.findByIdAndDelete(review._id);
                            case 2:
                            case "end":
                              return _context14.stop();
                          }
                        }, _callee14);
                      }));
                      return function (_x24) {
                        return _ref16.apply(this, arguments);
                      };
                    }());
                  case 7:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15);
            }));
            return function (_x22) {
              return _ref14.apply(this, arguments);
            };
          }());
        case 16:
          if (!user.category) {
            _context22.next = 23;
            break;
          }
          _context22.next = 19;
          return Category.findByIdAndDelete(user.category);
        case 19:
          category = _context22.sent;
          _context22.next = 22;
          return remove(category === null || category === void 0 || (_category$thumbnail = category.thumbnail) === null || _category$thumbnail === void 0 ? void 0 : _category$thumbnail.public_id);
        case 22:
          // remove category products
          category.products.forEach( /*#__PURE__*/function () {
            var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(prod) {
              var _product$thumbnail2;
              var product;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return Product.findByIdAndDelete(prod);
                  case 2:
                    product = _context18.sent;
                    _context18.next = 5;
                    return remove(product === null || product === void 0 || (_product$thumbnail2 = product.thumbnail) === null || _product$thumbnail2 === void 0 ? void 0 : _product$thumbnail2.public_id);
                  case 5:
                    // remove product gallery
                    product.gallery.forEach( /*#__PURE__*/function () {
                      var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(gallery) {
                        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                          while (1) switch (_context16.prev = _context16.next) {
                            case 0:
                              _context16.next = 2;
                              return remove(gallery === null || gallery === void 0 ? void 0 : gallery.public_id);
                            case 2:
                            case "end":
                              return _context16.stop();
                          }
                        }, _callee16);
                      }));
                      return function (_x26) {
                        return _ref18.apply(this, arguments);
                      };
                    }());

                    // remove product reviews
                    product.reviews.forEach( /*#__PURE__*/function () {
                      var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(review) {
                        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                          while (1) switch (_context17.prev = _context17.next) {
                            case 0:
                              _context17.next = 2;
                              return Review.findByIdAndDelete(review._id);
                            case 2:
                            case "end":
                              return _context17.stop();
                          }
                        }, _callee17);
                      }));
                      return function (_x27) {
                        return _ref19.apply(this, arguments);
                      };
                    }());
                  case 7:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18);
            }));
            return function (_x25) {
              return _ref17.apply(this, arguments);
            };
          }());
        case 23:
          if (!user.brand) {
            _context22.next = 30;
            break;
          }
          _context22.next = 26;
          return Brand.findByIdAndDelete(user.brand);
        case 26:
          brand = _context22.sent;
          _context22.next = 29;
          return remove(brand === null || brand === void 0 || (_brand$logo = brand.logo) === null || _brand$logo === void 0 ? void 0 : _brand$logo.public_id);
        case 29:
          // remove brand products
          brand.products.forEach( /*#__PURE__*/function () {
            var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(prod) {
              var _product$thumbnail3;
              var product;
              return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                while (1) switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return Product.findByIdAndDelete(prod);
                  case 2:
                    product = _context21.sent;
                    _context21.next = 5;
                    return remove(product === null || product === void 0 || (_product$thumbnail3 = product.thumbnail) === null || _product$thumbnail3 === void 0 ? void 0 : _product$thumbnail3.public_id);
                  case 5:
                    // remove product gallery
                    product.gallery.forEach( /*#__PURE__*/function () {
                      var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(gallery) {
                        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                          while (1) switch (_context19.prev = _context19.next) {
                            case 0:
                              _context19.next = 2;
                              return remove(gallery === null || gallery === void 0 ? void 0 : gallery.public_id);
                            case 2:
                            case "end":
                              return _context19.stop();
                          }
                        }, _callee19);
                      }));
                      return function (_x29) {
                        return _ref21.apply(this, arguments);
                      };
                    }());

                    // remove product reviews
                    product.reviews.forEach( /*#__PURE__*/function () {
                      var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(review) {
                        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                          while (1) switch (_context20.prev = _context20.next) {
                            case 0:
                              _context20.next = 2;
                              return Review.findByIdAndDelete(review._id);
                            case 2:
                            case "end":
                              return _context20.stop();
                          }
                        }, _callee20);
                      }));
                      return function (_x30) {
                        return _ref22.apply(this, arguments);
                      };
                    }());
                  case 7:
                  case "end":
                    return _context21.stop();
                }
              }, _callee21);
            }));
            return function (_x28) {
              return _ref20.apply(this, arguments);
            };
          }());
        case 30:
          if (!(user.products.length > 0)) {
            _context22.next = 33;
            break;
          }
          _context22.next = 33;
          return Product.updateMany({}, {
            $pull: {
              buyers: user._id
            }
          });
        case 33:
          res.status(200).json({
            acknowledgement: true,
            message: "OK",
            description: "".concat(user.name, "'s information deleted successfully")
          });
        case 34:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function (_x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}();

// seller request & approve
exports.getSellers = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return User.find({
            role: "seller",
            status: "inactive"
          }).populate(["brand", "category", "store"]);
        case 2:
          users = _context23.sent;
          res.status(200).json({
            acknowledgement: true,
            message: "OK",
            description: "Sellers retrieved successfully",
            data: users
          });
        case 4:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function (_x31) {
    return _ref23.apply(this, arguments);
  };
}();
exports.reviewSeller = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return User.findByIdAndUpdate(req.query.id, {
            $set: req.body
          });
        case 2:
          res.status(200).json({
            acknowledgement: true,
            message: "OK",
            description: "Seller reviewed successfully"
          });
        case 3:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function (_x32, _x33) {
    return _ref24.apply(this, arguments);
  };
}();