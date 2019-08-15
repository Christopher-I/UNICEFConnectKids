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

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomHead = function (_React$Component) {
	(0, _inherits3.default)(CustomHead, _React$Component);

	function CustomHead() {
		(0, _classCallCheck3.default)(this, CustomHead);

		return (0, _possibleConstructorReturn3.default)(this, (CustomHead.__proto__ || (0, _getPrototypeOf2.default)(CustomHead)).apply(this, arguments));
	}

	(0, _createClass3.default)(CustomHead, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_head2.default, null, _react2.default.createElement("link", {
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd.min.css"
			}));
		}
	}]);

	return CustomHead;
}(_react2.default.Component);

exports.default = CustomHead;