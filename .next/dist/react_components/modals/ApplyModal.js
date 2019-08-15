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

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/modals/ApplyModal.js";


var ApplyModal = function (_React$Component) {
	(0, _inherits3.default)(ApplyModal, _React$Component);

	function ApplyModal() {
		(0, _classCallCheck3.default)(this, ApplyModal);

		return (0, _possibleConstructorReturn3.default)(this, (ApplyModal.__proto__ || (0, _getPrototypeOf2.default)(ApplyModal)).apply(this, arguments));
	}

	(0, _createClass3.default)(ApplyModal, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Modal, {
				title: "Apply",
				visible: this.props.applyModalVisibility,
				onOk: this.props.applyModalhandleOk,
				onCancel: this.props.applyModalhandleCancel,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			}, _react2.default.createElement("div", { style: { marginBottom: 16 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, _react2.default.createElement(_routes.Link, { route: "/applicationForms/schoolApplication", __source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement(_antd.Button, { block: true, onClick: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, "Apply As School")), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}), _react2.default.createElement(_routes.Link, { route: "/applicationForms/ISPApplication", __source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}, _react2.default.createElement(_antd.Button, { block: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, "Apply As ISP"))));
		}
	}]);

	return ApplyModal;
}(_react2.default.Component);

exports.default = ApplyModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvbW9kYWxzL0FwcGx5TW9kYWwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsIkJ1dHRvbiIsIkxpbmsiLCJBcHBseU1vZGFsIiwicHJvcHMiLCJhcHBseU1vZGFsVmlzaWJpbGl0eSIsImFwcGx5TW9kYWxoYW5kbGVPayIsImFwcGx5TW9kYWxoYW5kbGVDYW5jZWwiLCJtYXJnaW5Cb3R0b20iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTzs7QUFDaEIsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7MkJBQ0ksQUFDUjswQkFDQyxBQUFDO1dBQUQsQUFDTyxBQUNOO2FBQVMsS0FBQSxBQUFLLE1BRmYsQUFFcUIsQUFDcEI7VUFBTSxLQUFBLEFBQUssTUFIWixBQUdrQixBQUNqQjtjQUFVLEtBQUEsQUFBSyxNQUpoQixBQUlzQjs7ZUFKdEI7aUJBQUEsQUFNQztBQU5EO0FBQ0MsSUFERCxrQkFNQyxjQUFBLFNBQUssT0FBTyxFQUFFLGNBQWQsQUFBWSxBQUFnQjtlQUE1QjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyw4QkFBSyxPQUFOLEFBQWE7ZUFBYjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyw4QkFBTyxPQUFSLE1BQWMsU0FBZDtlQUFBO2lCQUFBO0FBQUE7TUFGRixBQUNDLEFBQ0MsQUFJRDs7ZUFBQTtpQkFORCxBQU1DLEFBQ0E7QUFEQTtBQUFBOztlQUNBO2lCQVBELEFBT0MsQUFDQTtBQURBO0FBQUEsdUJBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQWE7ZUFBYjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyw4QkFBTyxPQUFSO2VBQUE7aUJBQUE7QUFBQTtNQWhCSixBQUNDLEFBTUMsQUFRQyxBQUNDLEFBS0o7Ozs7O0VBdkJ1QixnQkFBTSxBLEFBMEIvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcHBseU1vZGFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9