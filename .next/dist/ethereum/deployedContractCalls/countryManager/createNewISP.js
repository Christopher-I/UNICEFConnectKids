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
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address, name, promisedUploadSpeed, promisedDownloadSpeed, promisedDataSize, ispAddress) {
    var accounts, result, ISP;
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
            return result.methods.createNewIsp(name, promisedUploadSpeed, promisedDownloadSpeed, promisedDataSize, ispAddress).send({
              from: accounts[0]
            });

          case 9:
            ISP = _context.sent;

            console.log(ISP);
            return _context.abrupt("return", ISP);

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

  function createNewSchool(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  }

  return createNewSchool;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9jb3VudHJ5TWFuYWdlci9jcmVhdGVOZXdJU1AuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb3VudHJ5TWFuYWdlckRlcGxveWVkIiwid2ViMyIsImFkZHJlc3MiLCJuYW1lIiwicHJvbWlzZWRVcGxvYWRTcGVlZCIsInByb21pc2VkRG93bmxvYWRTcGVlZCIsInByb21pc2VkRGF0YVNpemUiLCJpc3BBZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInJlc3VsdCIsIm1ldGhvZHMiLCJjcmVhdGVOZXdJc3AiLCJzZW5kIiwiZnJvbSIsIklTUCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVOZXdTY2hvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBOEI7O0FBQ3ZDLEFBQU8sQUFBVTs7Ozs7O0FBRWpCLEFBQ0E7OEJBQUE7c0ZBQWUsaUJBQUEsQUFDYixTQURhLEFBRWIsTUFGYSxBQUdiLHFCQUhhLEFBSWIsdUJBSmEsQUFLYixrQkFMYSxBQU1iLFlBTmE7MEJBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTttQkFRVSxjQUFBLEFBQUssSUFSZixBQVFVLEFBQVM7O2VBQTFCO0FBUk8sZ0NBQUE7NEJBQUE7NEJBQUE7bUJBVVEsK0NBVlIsQUFVUSxBQUF1Qjs7ZUFBdEM7QUFWTyw4QkFBQTs0QkFBQTswQkFZSyxBQUFPLFFBQVAsQUFDYixhQURhLEFBRVosTUFGWSxBQUdaLHFCQUhZLEFBSVosdUJBSlksQUFLWixrQkFMWSxBQU1aLFlBTlksQUFRYjtvQkFDTyxTQXJCQyxBQVlLLEFBUVIsQUFDRSxBQUFTO0FBRFgsQUFDSixhQVRZOztlQUFaO0FBWk8sMkJBdUJYOztvQkFBQSxBQUFRLElBdkJHLEFBdUJYLEFBQVk7NkNBdkJELEFBd0JKOztlQXhCSTs0QkFBQTs0Q0EwQlg7O29CQUFBLEFBQVEsYUExQkc7c0RBQUE7O2VBQUE7ZUFBQTs0QkFBQTs7QUFBQTsyQkFBQTtBQUFmOztXQUFBLEFBQThCLDZDQUE5Qjs0QkFBQTtBQUFBOztTQUFBLEFBQThCIiwiZmlsZSI6ImNyZWF0ZU5ld0lTUC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==