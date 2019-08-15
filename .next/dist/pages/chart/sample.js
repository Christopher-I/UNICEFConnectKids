"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactChartjs = require("react-chartjs-2");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/pages/chart/sample.js";


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
				options: { maintainAspectRatio: false },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			});
		}
	}]);

	return sample;
}(_react2.default.Component);

exports.default = sample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NoYXJ0L3NhbXBsZS5qcyJdLCJuYW1lcyI6WyJMaW5lIiwiUmVhY3QiLCJzYW1wbGUiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0lBRUQsQTs7Ozs7Ozs7Ozs7MkJBQ0ksQUFDUjswQkFDQyxBQUFDOzthQUVTLENBQUEsQUFDUCxjQURPLEFBRVAsY0FGTyxBQUdQLGNBSE8sQUFJUCxjQUpPLEFBS1AsY0FOSSxBQUNHLEFBTVAsQUFFRDs7YUFDQyxBQUNRLEFBQ1A7WUFBTSxDQUFBLEFBQUMsSUFBRCxBQUFLLElBQUwsQUFBUyxHQUFULEFBQVksR0FBWixBQUFlLEdBRnRCLEFBRU8sQUFBa0IsQUFDeEI7dUJBQWlCLENBSGxCLEFBR2tCLEFBQUMsQUFDbEI7bUJBQWEsQ0FKZCxBQUljLEFBQUMsQUFDZDttQkFOUSxBQUNULEFBS2M7QUFMZCxBQUNDLE1BRlE7YUFRVCxBQUNRLEFBQ1A7WUFBTSxDQUFBLEFBQUMsR0FBRCxBQUFJLElBQUosQUFBUSxJQUFSLEFBQVksSUFBWixBQUFnQixJQUZ2QixBQUVPLEFBQW9CLEFBQzFCO3VCQUFpQixDQUhsQixBQUdrQixBQUFDLEFBQ2xCO21CQUFhLENBSmQsQUFJYyxBQUFDLEFBQ2Q7bUJBYlEsQUFRVCxBQUtjO0FBTGQsQUFDQzthQU1ELEFBQ1EsQUFDUDtZQUFNLENBQUEsQUFBQyxJQUFELEFBQUssSUFBTCxBQUFTLElBQVQsQUFBYSxJQUFiLEFBQWlCLElBRnhCLEFBRU8sQUFBcUIsQUFDM0I7dUJBQWlCLENBSGxCLEFBR2tCLEFBQUMsQUFDbEI7bUJBQWEsQ0FKZCxBQUljLEFBQUMsQUFDZDttQkE5QkosQUFDTyxBQVNLLEFBZVQsQUFLYyxBQUloQjtBQVRFLEFBQ0M7QUF6QkcsQUFDTDtXQUZGLEFBa0NRLEFBQ1A7WUFuQ0QsQUFtQ1MsQUFDUjthQUFTLEVBQUUscUJBcENaLEFBb0NVLEFBQXVCOztlQXBDakM7aUJBREQsQUFDQyxBQXVDRDtBQXZDQztBQUNDLElBREQ7Ozs7O0VBSGtCLGdCQUFNLEEsQUE2QzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==