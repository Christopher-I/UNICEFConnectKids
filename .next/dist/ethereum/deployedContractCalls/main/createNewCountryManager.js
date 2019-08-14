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
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address, name) {
    var accounts, result, countryManager;
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
            return (0, _deployedContracts.MainDeployed)(address);

          case 6:
            result = _context.sent;
            _context.next = 9;
            return result.methods.createNewCountryManger(name).send({
              from: accounts[0]
            });

          case 9:
            countryManager = _context.sent;
            return _context.abrupt("return", countryManager);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);

            console.log(_context.t0);
            return _context.abrupt("return", _context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 13]]);
  }));

  function createNewCountryManager(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return createNewCountryManager;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9tYWluL2NyZWF0ZU5ld0NvdW50cnlNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWFpbkRlcGxveWVkIiwid2ViMyIsImFkZHJlc3MiLCJuYW1lIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInJlc3VsdCIsIm1ldGhvZHMiLCJjcmVhdGVOZXdDb3VudHJ5TWFuZ2VyIiwic2VuZCIsImZyb20iLCJjb3VudHJ5TWFuYWdlciIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVOZXdDb3VudHJ5TWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFvQjs7QUFDN0IsQUFBTyxBQUFVOzs7Ozs7QUFFakIsQUFDQTs4QkFBQTtzRkFBZSxpQkFBQSxBQUF1QyxTQUF2QyxBQUFnRCxNQUFoRDswQkFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUFBOzRCQUFBO21CQUNRLGNBQUEsQUFBSyxJQURiLEFBQ1EsQUFBUzs7ZUFBMUI7QUFEUyxnQ0FBQTs0QkFBQTs0QkFBQTttQkFHUSxxQ0FIUixBQUdRLEFBQWE7O2VBQTVCO0FBSE8sOEJBQUE7NEJBQUE7MEJBS2dCLEFBQU8sUUFBUCxBQUN4Qix1QkFEd0IsQUFDRCxNQURDLEFBRXhCO29CQUNPLFNBUkMsQUFLZ0IsQUFFbkIsQUFDRSxBQUFTO0FBRFgsQUFDSixhQUh1Qjs7ZUFBdkI7QUFMTyxzQ0FBQTs2Q0FBQSxBQVdKOztlQVhJOzRCQUFBOzRDQWFYOztvQkFBQSxBQUFRLGFBYkc7c0RBQUE7O2VBQUE7ZUFBQTs0QkFBQTs7QUFBQTsyQkFBQTtBQUFmOztXQUFBLEFBQThCLGlDQUE5Qjs0QkFBQTtBQUFBOztTQUFBLEFBQThCIiwiZmlsZSI6ImNyZWF0ZU5ld0NvdW50cnlNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9