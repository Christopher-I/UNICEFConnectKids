
          window.__NEXT_REGISTER_PAGE('/chart/sample', function() {
            var comp = module.exports =
webpackJsonp([11],{

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1133);


/***/ }),

/***/ 1133:
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

var _reactChartjs = __webpack_require__(461);

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
			return _react2.default.createElement(_reactChartjs.Line, {
				data: {
					labels: ["01/01/2019", "01/02/2019", "01/03/2019", "01/04/2019", "01/05/2019", "01/06/2019"],
					datasets: [{
						label: "Average Internet Speed Sent From School",
						data: [12, 19, 3, 5, 2, 3],
						backgroundColor: ["rgba(90, 99, 132, 0.2)"],
						borderColor: ["rgba(90, 99, 132, 0.2)"],
						borderWidth: 1
					}, {
						label: "Average Internet Speed Sent From ISP",
						data: [1, 39, 13, 25, 20, 3],
						backgroundColor: ["rgba(255, 99, 132, 0.2)"],
						borderColor: ["rgba(255, 99, 132, 1)"],
						borderWidth: 1
					}, {
						label: "Minimum Speed Threshhold",
						data: [12, 12, 12, 12, 12, 12],
						backgroundColor: ["rgba(0, 0, 0, 0)"],
						borderColor: ["rgba(0, 0, 0, 1)"],
						borderWidth: 1
					}]
				},
				width: 500,
				height: 500,
				options: { maintainAspectRatio: false }
			});
		}
	}]);

	return sample;
}(_react2.default.Component);

exports.default = sample;

/***/ })

},[1132]);
            return { page: comp.default }
          })
        