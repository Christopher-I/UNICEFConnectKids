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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/modals/placeBidModal.js";


var PlaceBid = function (_React$Component) {
	(0, _inherits3.default)(PlaceBid, _React$Component);

	function PlaceBid() {
		(0, _classCallCheck3.default)(this, PlaceBid);

		return (0, _possibleConstructorReturn3.default)(this, (PlaceBid.__proto__ || (0, _getPrototypeOf2.default)(PlaceBid)).apply(this, arguments));
	}

	(0, _createClass3.default)(PlaceBid, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Modal, {
				title: "Login",
				visible: this.props.placeBidVisibility,
				onOk: this.props.placeBidModalhandleOk,
				onCancel: this.props.placeBidModalhandleCancel,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			}, _react2.default.createElement("div", { style: { marginBottom: 16 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement(_antd.Input, {
				addonBefore: "Promised Upload Speed",
				defaultValue: "MB/s..",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}), _react2.default.createElement(_antd.Input, {
				addonBefore: "Promised Download Speed",
				defaultValue: "MB/s..",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}), _react2.default.createElement(_antd.Input, { addonBefore: "Data Size", defaultValue: "GB/month..", __source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}), _react2.default.createElement(_antd.Input, { addonBefore: "ISP ID", defaultValue: "0x...", __source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			})));
		}
	}]);

	return PlaceBid;
}(_react2.default.Component);

exports.default = PlaceBid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvbW9kYWxzL3BsYWNlQmlkTW9kYWwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsIklucHV0IiwiQnV0dG9uIiwiUGxhY2VCaWQiLCJwcm9wcyIsInBsYWNlQmlkVmlzaWJpbGl0eSIsInBsYWNlQmlkTW9kYWxoYW5kbGVPayIsInBsYWNlQmlkTW9kYWxoYW5kbGVDYW5jZWwiLCJtYXJnaW5Cb3R0b20iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTyxBQUFPOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7OzJCQUNJLEFBQ1I7MEJBQ0MsQUFBQztXQUFELEFBQ08sQUFDTjthQUFTLEtBQUEsQUFBSyxNQUZmLEFBRXFCLEFBQ3BCO1VBQU0sS0FBQSxBQUFLLE1BSFosQUFHa0IsQUFDakI7Y0FBVSxLQUFBLEFBQUssTUFKaEIsQUFJc0I7O2VBSnRCO2lCQUFBLEFBTUM7QUFORDtBQUNDLElBREQsa0JBTUMsY0FBQSxTQUFLLE9BQU8sRUFBRSxjQUFkLEFBQVksQUFBZ0I7ZUFBNUI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7aUJBQUQsQUFDYSxBQUNaO2tCQUZELEFBRWM7O2VBRmQ7aUJBREQsQUFDQyxBQUlBO0FBSkE7QUFDQzs7ZUFHRDtpQkFMRCxBQUtDLEFBQ0E7QUFEQTtBQUFBOztlQUNBO2lCQU5ELEFBTUMsQUFDQTtBQURBO0FBQUEsdUJBQ0EsQUFBQztpQkFBRCxBQUNhLEFBQ1o7a0JBRkQsQUFFYzs7ZUFGZDtpQkFQRCxBQU9DLEFBSUE7QUFKQTtBQUNDOztlQUdEO2lCQVhELEFBV0MsQUFDQTtBQURBO0FBQUE7O2VBQ0E7aUJBWkQsQUFZQyxBQUVBO0FBRkE7QUFBQSx1QkFFQSxBQUFDLDZCQUFNLGFBQVAsQUFBbUIsYUFBWSxjQUEvQixBQUE0QztlQUE1QztpQkFkRCxBQWNDLEFBQ0E7QUFEQTs7O2VBQ0E7aUJBZkQsQUFlQyxBQUNBO0FBREE7QUFBQTs7ZUFDQTtpQkFoQkQsQUFnQkMsQUFDQTtBQURBO0FBQUEsdUJBQ0EsQUFBQyw2QkFBTSxhQUFQLEFBQW1CLFVBQVMsY0FBNUIsQUFBeUM7ZUFBekM7aUJBeEJILEFBQ0MsQUFNQyxBQWlCQyxBQUlIO0FBSkc7Ozs7OztFQTFCa0IsZ0JBQU0sQSxBQWlDN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoicGxhY2VCaWRNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==