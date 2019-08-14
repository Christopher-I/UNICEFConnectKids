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
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address, name, population, location, owner) {
    var accounts, result, school;
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
            return result.methods.createNewSchool(name, population, location, owner).send({
              from: accounts[0]
            });

          case 9:
            school = _context.sent;

            console.log(school);
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

  function createNewSchool(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  }

  return createNewSchool;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9jb3VudHJ5TWFuYWdlci9jcmVhdGVOZXdTY2hvb2wuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb3VudHJ5TWFuYWdlckRlcGxveWVkIiwid2ViMyIsImFkZHJlc3MiLCJuYW1lIiwicG9wdWxhdGlvbiIsImxvY2F0aW9uIiwib3duZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwicmVzdWx0IiwibWV0aG9kcyIsImNyZWF0ZU5ld1NjaG9vbCIsInNlbmQiLCJmcm9tIiwic2Nob29sIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUE4Qjs7QUFDdkMsQUFBTyxBQUFVOzs7Ozs7QUFFakIsQUFDQTs4QkFBQTtzRkFBZSxpQkFBQSxBQUNiLFNBRGEsQUFFYixNQUZhLEFBR2IsWUFIYSxBQUliLFVBSmEsQUFLYixPQUxhOzBCQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQUE7NEJBQUE7bUJBT1EsY0FBQSxBQUFLLElBUGIsQUFPUSxBQUFTOztlQUExQjtBQVBTLGdDQUFBOzRCQUFBOzRCQUFBO21CQVNRLCtDQVRSLEFBU1EsQUFBdUI7O2VBQXRDO0FBVE8sOEJBQUE7NEJBQUE7MEJBV1EsQUFBTyxRQUFQLEFBQ2hCLGdCQURnQixBQUNBLE1BREEsQUFDTSxZQUROLEFBQ2tCLFVBRGxCLEFBQzRCLE9BRDVCLEFBRWhCO29CQUNPLFNBZEMsQUFXUSxBQUVYLEFBQ0UsQUFBUztBQURYLEFBQ0osYUFIZTs7ZUFBZjtBQVhPLDhCQWdCWDs7b0JBQUEsQUFBUSxJQWhCRyxBQWdCWCxBQUFZOzZDQWhCRCxBQWlCSjs7ZUFqQkk7NEJBQUE7NENBbUJYOztvQkFBQSxBQUFRLGFBbkJHO3NEQUFBOztlQUFBO2VBQUE7NEJBQUE7O0FBQUE7MkJBQUE7QUFBZjs7V0FBQSxBQUE4Qix3Q0FBOUI7NEJBQUE7QUFBQTs7U0FBQSxBQUE4QiIsImZpbGUiOiJjcmVhdGVOZXdTY2hvb2wuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=