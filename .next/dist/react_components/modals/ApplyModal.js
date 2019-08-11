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
					lineNumber: 7
				}
			}, _react2.default.createElement("div", { style: { marginBottom: 16 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement(_antd.Button, { block: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, "Apply As School"), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}), _react2.default.createElement(_antd.Button, { block: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, "Apply As ISP")));
		}
	}]);

	return ApplyModal;
}(_react2.default.Component);

exports.default = ApplyModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvbW9kYWxzL0FwcGx5TW9kYWwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsIkJ1dHRvbiIsIkFwcGx5TW9kYWwiLCJwcm9wcyIsImFwcGx5TW9kYWxWaXNpYmlsaXR5IiwiYXBwbHlNb2RhbGhhbmRsZU9rIiwiYXBwbHlNb2RhbGhhbmRsZUNhbmNlbCIsIm1hcmdpbkJvdHRvbSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPOzs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7MkJBQ0ksQUFDUjswQkFDQyxBQUFDO1dBQUQsQUFDTyxBQUNOO2FBQVMsS0FBQSxBQUFLLE1BRmYsQUFFcUIsQUFDcEI7VUFBTSxLQUFBLEFBQUssTUFIWixBQUdrQixBQUNqQjtjQUFVLEtBQUEsQUFBSyxNQUpoQixBQUlzQjs7ZUFKdEI7aUJBQUEsQUFNQztBQU5EO0FBQ0MsSUFERCxrQkFNQyxjQUFBLFNBQUssT0FBTyxFQUFFLGNBQWQsQUFBWSxBQUFnQjtlQUE1QjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyw4QkFBTyxPQUFSO2VBQUE7aUJBQUE7QUFBQTtNQURELEFBQ0MsQUFDQTs7ZUFBQTtpQkFGRCxBQUVDLEFBQ0E7QUFEQTtBQUFBOztlQUNBO2lCQUhELEFBR0MsQUFDQTtBQURBO0FBQUEsdUJBQ0EsQUFBQyw4QkFBTyxPQUFSO2VBQUE7aUJBQUE7QUFBQTtNQVhILEFBQ0MsQUFNQyxBQUlDLEFBSUg7Ozs7O0VBakJ1QixnQkFBTSxBLEFBb0IvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcHBseU1vZGFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9