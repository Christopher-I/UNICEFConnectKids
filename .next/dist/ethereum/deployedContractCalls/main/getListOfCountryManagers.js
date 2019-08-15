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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//retrieves a list of created country managers
exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
    var result, countryManagers;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _deployedContracts.MainDeployed)(address);

          case 3:
            result = _context.sent;
            _context.next = 6;
            return result.methods.getDeployedCountryManagers().call();

          case 6:
            countryManagers = _context.sent;
            return _context.abrupt("return", countryManagers);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);

            console.log(_context.t0);
            return _context.abrupt("return", _context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  function getListOfCountryManagers(_x) {
    return _ref.apply(this, arguments);
  }

  return getListOfCountryManagers;
}();