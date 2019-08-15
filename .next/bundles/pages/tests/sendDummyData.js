
          window.__NEXT_REGISTER_PAGE('/tests/sendDummyData', function() {
            var comp = module.exports =
webpackJsonp([8],{

/***/ 1138:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1139);


/***/ }),

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(25);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sendDummyData = __webpack_require__(1140);

var _sendDummyData2 = _interopRequireDefault(_sendDummyData);

var _antd = __webpack_require__(34);

var _ListofSmartContractAddresses = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendDummyData = function (_React$Component) {
	(0, _inherits3.default)(sendDummyData, _React$Component);

	function sendDummyData() {
		(0, _classCallCheck3.default)(this, sendDummyData);

		return (0, _possibleConstructorReturn3.default)(this, (sendDummyData.__proto__ || (0, _getPrototypeOf2.default)(sendDummyData)).apply(this, arguments));
	}

	(0, _createClass3.default)(sendDummyData, [{
		key: "CallDummyData",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								e.preventDefault();
								_context.t0 = console;
								_context.next = 4;
								return (0, _sendDummyData2.default)(_ListofSmartContractAddresses.schoolAddress);

							case 4:
								_context.t1 = _context.sent;

								_context.t0.log.call(_context.t0, _context.t1);

							case 6:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function CallDummyData(_x) {
				return _ref.apply(this, arguments);
			}

			return CallDummyData;
		}()
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Button, { onClick: this.CallDummyData }, "Send Dummy Data ");
		}
	}]);

	return sendDummyData;
}(_react2.default.Component);

exports.default = sendDummyData;

/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(25);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _deployedContracts = __webpack_require__(57);

var _web = __webpack_require__(69);

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

/***/ })

},[1138]);
            return { page: comp.default }
          })
        