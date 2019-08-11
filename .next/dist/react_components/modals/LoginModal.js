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

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/modals/LoginModal.js";


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
				onCancel: this.props.loginModalhandleCancel,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			}, _react2.default.createElement("div", { style: { marginBottom: 16 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, _react2.default.createElement(_antd.Input, { addonBefore: "UserName", defaultValue: "username..", __source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}), _react2.default.createElement(_antd.Input, {
				addonBefore: "Password",
				defaultValue: "******",
				type: "password",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			})), _react2.default.createElement(_routes.Link, { route: "/admin", __source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, _react2.default.createElement(_antd.Button, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}, "Log In")));
		}
	}]);

	return LoginModal;
}(_react2.default.Component);

exports.default = LoginModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvbW9kYWxzL0xvZ2luTW9kYWwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsIklucHV0IiwiQnV0dG9uIiwiTGluayIsIkxvZ2luTW9kYWwiLCJwcm9wcyIsImxvZ2luTW9kYWxWaXNpYmlsaXR5IiwibG9naW5Nb2RhbGhhbmRsZU9rIiwibG9naW5Nb2RhbGhhbmRsZUNhbmNlbCIsIm1hcmdpbkJvdHRvbSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPLEFBQU87O0FBQ3ZCLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7OzJCQUNJLEFBQ1I7MEJBQ0MsQUFBQztXQUFELEFBQ08sQUFDTjthQUFTLEtBQUEsQUFBSyxNQUZmLEFBRXFCLEFBQ3BCO1VBQU0sS0FBQSxBQUFLLE1BSFosQUFHa0IsQUFDakI7Y0FBVSxLQUFBLEFBQUssTUFKaEIsQUFJc0I7O2VBSnRCO2lCQUFBLEFBTUM7QUFORDtBQUNDLElBREQsa0JBTUMsY0FBQSxTQUFLLE9BQU8sRUFBRSxjQUFkLEFBQVksQUFBZ0I7ZUFBNUI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMsNkJBQU0sYUFBUCxBQUFtQixZQUFXLGNBQTlCLEFBQTJDO2VBQTNDO2lCQURELEFBQ0MsQUFDQTtBQURBOzs7ZUFDQTtpQkFGRCxBQUVDLEFBQ0E7QUFEQTtBQUFBOztlQUNBO2lCQUhELEFBR0MsQUFDQTtBQURBO0FBQUEsdUJBQ0EsQUFBQztpQkFBRCxBQUNhLEFBQ1o7a0JBRkQsQUFFYyxBQUNiO1VBSEQsQUFHTTs7ZUFITjtpQkFWRixBQU1DLEFBSUMsQUFNRDtBQU5DO0FBQ0Msd0JBS0YsQUFBQyw4QkFBSyxPQUFOLEFBQWE7ZUFBYjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQzs7ZUFBRDtpQkFBQTtBQUFBO0FBQUEsTUFsQkgsQUFDQyxBQWdCQyxBQUNDLEFBSUg7Ozs7O0VBeEJ1QixnQkFBTSxBLEFBMkIvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMb2dpbk1vZGFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9