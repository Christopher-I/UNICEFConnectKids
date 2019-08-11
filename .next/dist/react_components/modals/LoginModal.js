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
					lineNumber: 7
				}
			}, _react2.default.createElement("div", { style: { marginBottom: 16 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement(_antd.Input, { addonBefore: "UserName", defaultValue: "username..", __source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}), _react2.default.createElement(_antd.Input, {
				addonBefore: "Password",
				defaultValue: "******",
				type: "password",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			})));
		}
	}]);

	return LoginModal;
}(_react2.default.Component);

exports.default = LoginModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvbW9kYWxzL0xvZ2luTW9kYWwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsIklucHV0IiwiTG9naW5Nb2RhbCIsInByb3BzIiwibG9naW5Nb2RhbFZpc2liaWxpdHkiLCJsb2dpbk1vZGFsaGFuZGxlT2siLCJsb2dpbk1vZGFsaGFuZGxlQ2FuY2VsIiwibWFyZ2luQm90dG9tIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU87Ozs7Ozs7SUFFVixBOzs7Ozs7Ozs7OzsyQkFDSSxBQUNSOzBCQUNDLEFBQUM7V0FBRCxBQUNPLEFBQ047YUFBUyxLQUFBLEFBQUssTUFGZixBQUVxQixBQUNwQjtVQUFNLEtBQUEsQUFBSyxNQUhaLEFBR2tCLEFBQ2pCO2NBQVUsS0FBQSxBQUFLLE1BSmhCLEFBSXNCOztlQUp0QjtpQkFBQSxBQU1DO0FBTkQ7QUFDQyxJQURELGtCQU1DLGNBQUEsU0FBSyxPQUFPLEVBQUUsY0FBZCxBQUFZLEFBQWdCO2VBQTVCO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDZCQUFNLGFBQVAsQUFBbUIsWUFBVyxjQUE5QixBQUEyQztlQUEzQztpQkFERCxBQUNDLEFBQ0E7QUFEQTs7O2VBQ0E7aUJBRkQsQUFFQyxBQUNBO0FBREE7QUFBQTs7ZUFDQTtpQkFIRCxBQUdDLEFBQ0E7QUFEQTtBQUFBLHVCQUNBLEFBQUM7aUJBQUQsQUFDYSxBQUNaO2tCQUZELEFBRWMsQUFDYjtVQUhELEFBR007O2VBSE47aUJBWEgsQUFDQyxBQU1DLEFBSUMsQUFRSDtBQVJHO0FBQ0M7Ozs7O0VBZG1CLGdCQUFNLEEsQUF3Qi9COztrQkFBQSxBQUFlIiwiZmlsZSI6IkxvZ2luTW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=