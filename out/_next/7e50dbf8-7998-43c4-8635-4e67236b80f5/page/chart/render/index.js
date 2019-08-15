
          window.__NEXT_REGISTER_PAGE('/chart/render', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1130);


/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _connectivityDetails = __webpack_require__(1131);

var _connectivityDetails2 = _interopRequireDefault(_connectivityDetails);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sample = function (_React$Component) {
	(0, _inherits3.default)(sample, _React$Component);

	function sample() {
		(0, _classCallCheck3.default)(this, sample);

		return (0, _possibleConstructorReturn3.default)(this, (sample.__proto__ || (0, _getPrototypeOf2.default)(sample)).apply(this, arguments));
	}

	(0, _createClass3.default)(sample, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_connectivityDetails2.default, null);
		}
	}]);

	return sample;
}(_react2.default.Component);

exports.default = sample;

/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _antd = __webpack_require__(34);

var _sample = __webpack_require__(460);

var _sample2 = _interopRequireDefault(_sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connectivityDetailsModal = function (_React$Component) {
	(0, _inherits3.default)(connectivityDetailsModal, _React$Component);

	function connectivityDetailsModal() {
		(0, _classCallCheck3.default)(this, connectivityDetailsModal);

		return (0, _possibleConstructorReturn3.default)(this, (connectivityDetailsModal.__proto__ || (0, _getPrototypeOf2.default)(connectivityDetailsModal)).apply(this, arguments));
	}

	(0, _createClass3.default)(connectivityDetailsModal, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Modal, {
				title: "Login",
				visible: this.props.loginModalVisibility,
				onOk: this.props.loginModalhandleOk,
				onCancel: this.props.loginModalhandleCancel
			}, _react2.default.createElement("div", { style: { marginBottom: 16 } }, _react2.default.createElement(_sample2.default, null), " "));
		}
	}]);

	return connectivityDetailsModal;
}(_react2.default.Component);

exports.default = connectivityDetailsModal;

/***/ })

},[1129]);
            return { page: comp.default }
          })
        