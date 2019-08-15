"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _deployedContracts = require("../deployedContracts");

var _web = require("../../web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dummyData = [[123, 100, 100, 75], [333, 110, 75, 55], [754, 70, 143, 75]];

//retrieves a list of created country managers

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
    var accounts, i;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _web2.default.eth.getAccounts();

          case 2:
            accounts = _context.sent;
            _context.prev = 3;
            i = 0;

          case 5:
            if (!(i < dummyData.length)) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return (0, _deployedContracts.SchoolDeployed)(address).methods.addConnectivityInfo(dummyData[i][0], dummyData[i][1], dummyData[i][2], dummyData[i][3]).send({
              from: accounts[0]
            });

          case 8:
            i++;
            _context.next = 5;
            break;

          case 11:
            _context.t0 = console;
            _context.next = 14;
            return (0, _deployedContracts.SchoolDeployed)(address).methods.connectivityRegistry(dummyData[2][0]).call();

          case 14:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t2 = _context["catch"](3);

            console.log(_context.t2);
            return _context.abrupt("return", _context.t2);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 18]]);
  }));

  function createNewSchool(_x) {
    return _ref.apply(this, arguments);
  }

  return createNewSchool;
}();