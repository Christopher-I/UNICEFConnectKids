
          window.__NEXT_REGISTER_PAGE('/tests/Addresses', function() {
            var comp = module.exports =
webpackJsonp([9],{

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1137);


/***/ }),

/***/ 1137:
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

var _ListofSmartContractAddresses = __webpack_require__(52);

var _getListOfCountryManagers = __webpack_require__(62);

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _getContractSummary = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showMeAddresses = function (_React$Component) {
	(0, _inherits3.default)(showMeAddresses, _React$Component);

	function showMeAddresses() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, showMeAddresses);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = showMeAddresses.__proto__ || (0, _getPrototypeOf2.default)(showMeAddresses)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(showMeAddresses, [{
		key: "componentDidMount",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var addressesOfAllCountryManagers, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _getListOfCountryManagers2.default)(_ListofSmartContractAddresses.mainContractAddress);

							case 2:
								addressesOfAllCountryManagers = _context.sent;

								console.log("address of all country managers " + addressesOfAllCountryManagers);

								_context.next = 6;
								return (0, _getContractSummary.GetCountryManagerSummary)(addressesOfAllCountryManagers[0]);

							case 6:
								summary = _context.sent;

								console.log("address of all Schools " + summary[1]);
								console.log("address of all ISPs " + summary[2]);

							case 9:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", null, "Open Inspect Console to view addresses");
		}
	}]);

	return showMeAddresses;
}(_react2.default.Component);

exports.default = showMeAddresses;

/***/ })

},[1136]);
            return { page: comp.default }
          })
        