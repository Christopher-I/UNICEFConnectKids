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

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginModal = function (_React$Component) {
	(0, _inherits3.default)(LoginModal, _React$Component);

	function LoginModal() {
		(0, _classCallCheck3.default)(this, LoginModal);

		return (0, _possibleConstructorReturn3.default)(this, (LoginModal.__proto__ || (0, _getPrototypeOf2.default)(LoginModal)).apply(this, arguments));
	}

	(0, _createClass3.default)(LoginModal, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Modal, {
				title: "Login",
				visible: this.props.loginModalVisibility,
				onOk: this.props.loginModalhandleOk,
				onCancel: this.props.loginModalhandleCancel
			}, _react2.default.createElement("div", { style: { marginBottom: 16 } }, _react2.default.createElement(_antd.Input, { addonBefore: "UserName", defaultValue: "username.." }), _react2.default.createElement("br", null), _react2.default.createElement("br", null), _react2.default.createElement(_antd.Input, {
				addonBefore: "Password",
				defaultValue: "******",
				type: "password"
			})));
		}
	}]);

	return LoginModal;
}(_react2.default.Component);

exports.default = LoginModal;