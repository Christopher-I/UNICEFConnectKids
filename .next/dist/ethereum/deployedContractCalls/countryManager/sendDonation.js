"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _deployedContracts = require("../deployedContracts");

var _web = require("../../web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//retrieves a list of created country managers
exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address, value) {
    var accounts, result, transaction;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _web2.default.eth.getAccounts();

          case 2:
            accounts = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return (0, _deployedContracts.CountryManagerDeployed)(address);

          case 6:
            result = _context.sent;
            _context.next = 9;
            return result.methods.receiveDonation().send({
              gasLimit: "1000000",
              value: value,
              from: accounts[0]
            });

          case 9:
            transaction = _context.sent;

            console.log(result);
            return _context.abrupt("return", school);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);

            console.log(_context.t0);
            return _context.abrupt("return", _context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 14]]);
  }));

  function sendTransa(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return sendTransa;
}();