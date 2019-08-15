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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9jb3VudHJ5TWFuYWdlci9zZW5kRG9uYXRpb24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb3VudHJ5TWFuYWdlckRlcGxveWVkIiwid2ViMyIsImFkZHJlc3MiLCJ2YWx1ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJyZXN1bHQiLCJtZXRob2RzIiwicmVjZWl2ZURvbmF0aW9uIiwic2VuZCIsImdhc0xpbWl0IiwiZnJvbSIsInRyYW5zYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInNjaG9vbCIsInNlbmRUcmFuc2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBOEI7O0FBQ3ZDLEFBQU8sQUFBVTs7Ozs7O0FBRWpCLEFBQ0E7OEJBQUE7c0ZBQWUsaUJBQUEsQUFBMEIsU0FBMUIsQUFBbUMsT0FBbkM7MEJBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTttQkFDUSxjQUFBLEFBQUssSUFEYixBQUNRLEFBQVM7O2VBQTFCO0FBRFMsZ0NBQUE7NEJBQUE7NEJBQUE7bUJBR1EsK0NBSFIsQUFHUSxBQUF1Qjs7ZUFBdEM7QUFITyw4QkFBQTs0QkFBQTswQkFLYSxBQUFPLFFBQVAsQUFBZSxrQkFBZixBQUFpQzt3QkFBSyxBQUNsRCxBQUNWO3FCQUY0RCxBQUVyRCxBQUNQO29CQUFNLFNBUkcsQUFLYSxBQUFzQyxBQUd0RCxBQUFTO0FBSDZDLEFBQzVELGFBRHNCOztlQUFwQjtBQUxPLG1DQVVYOztvQkFBQSxBQUFRLElBVkcsQUFVWCxBQUFZOzZDQVZELEFBV0o7O2VBWEk7NEJBQUE7NENBYVg7O29CQUFBLEFBQVEsYUFiRztzREFBQTs7ZUFBQTtlQUFBOzRCQUFBOztBQUFBOzJCQUFBO0FBQWY7O1dBQUEsQUFBOEIsb0JBQTlCOzRCQUFBO0FBQUE7O1NBQUEsQUFBOEIiLCJmaWxlIjoic2VuZERvbmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9