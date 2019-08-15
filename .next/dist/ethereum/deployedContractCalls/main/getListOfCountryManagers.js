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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9tYWluL2dldExpc3RPZkNvdW50cnlNYW5hZ2Vycy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haW5EZXBsb3llZCIsImFkZHJlc3MiLCJyZXN1bHQiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDb3VudHJ5TWFuYWdlcnMiLCJjYWxsIiwiY291bnRyeU1hbmFnZXJzIiwiY29uc29sZSIsImxvZyIsImdldExpc3RPZkNvdW50cnlNYW5hZ2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7QUFDQSxBQUFTLEFBQVQsQUFBNkIsQUFBN0I7Ozs7QUFFQSxBQUNBOzhCQUFBO3NGQUFlLGlCQUF3QyxBQUF4QyxTQUFBO2dCQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQUE7NEJBQUE7NEJBQUE7bUJBRVEscUNBQWEsQUFBYixBQUZSOztlQUVQO0FBRk8sOEJBQUE7NEJBQUE7bUJBSWlCLE9BQU8sQUFBUCxRQUN6QixBQUR5Qiw2QkFFekIsQUFGeUIsQUFKakI7O2VBSVA7QUFKTyx1Q0FBQTs2Q0FPSixBQVBJOztlQUFBOzRCQUFBOzRDQVNYOztvQkFBUSxBQUFSLGFBVFc7c0RBQUE7O2VBQUE7ZUFBQTs0QkFBQTs7QUFBQTsyQkFBQTtBQUFmOztXQUE4QixBQUE5Qiw2QkFBQTs0QkFBQTtBQUFBOztTQUE4QixBQUE5QiIsImZpbGUiOiJnZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=