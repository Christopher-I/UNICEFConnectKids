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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Head = require("./Head");

var _Head2 = _interopRequireDefault(_Head);

var _SchoolTable = require("./tables/SchoolTable");

var _SchoolTable2 = _interopRequireDefault(_SchoolTable);

var _LoginModal = require("./modals/LoginModal");

var _LoginModal2 = _interopRequireDefault(_LoginModal);

var _ApplyModal = require("./modals/ApplyModal");

var _ApplyModal2 = _interopRequireDefault(_ApplyModal);

var _ViewConnectivity = require("./ViewConnectivity");

var _ViewConnectivity2 = _interopRequireDefault(_ViewConnectivity);

var _routes = require("../routes");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/Template.js";
//import {openLoginModal} from "./modals/modalFunctions"


//define extract child properties
var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer;
var SubMenu = _antd.Menu.SubMenu;
var TabPane = _antd.Tabs.TabPane;

var Template = function (_React$Component) {
	(0, _inherits3.default)(Template, _React$Component);

	function Template() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Template);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Template.__proto__ || (0, _getPrototypeOf2.default)(Template)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			TotalNumberofSchools: "0",
			FundingNeededtoConnectAllSchools: "0",
			FundingReceived: "0",
			AmountNeededtoFundadditionalSchool: "0",
			percentageOfConnectedSchool: "50",
			loginModalVisibility: false,
			applyModalVisibility: false,
			countrySelected: false
		}, _this.handleClick = function (e) {
			_this.setState({
				current: e.key
			});
		}, _this.openLoginModal = function (e) {
			_this.setState({
				loginModalVisibility: true
			});
		}, _this.loginModalhandleCancel = function (e) {
			_this.setState({
				loginModalVisibility: false
			});
		}, _this.loginModalhandleOk = function (e) {
			_this.setState({
				loginModalVisibility: false
			});
		}, _this.openApplyModal = function (e) {
			_this.setState({
				applyModalVisibility: true
			});
		}, _this.applyModalhandleCancel = function (e) {
			_this.setState({
				applyModalVisibility: false
			});
		}, _this.applyModalhandleOk = function (e) {
			_this.setState({
				applyModalVisibility: false
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Template, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement(_Head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}), _react2.default.createElement(Header, { style: { zIndex: 1, width: "100%" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, _react2.default.createElement(_antd.Menu, {
				selectable: "false",
				onClick: this.handleClick,
				selectedKeys: [this.state.current],
				mode: "horizontal",
				theme: "dark",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, _react2.default.createElement(_antd.Menu.Item, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}, _react2.default.createElement(_routes.Link, { route: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			}, " Home"))), _react2.default.createElement(SubMenu, {
				title: _react2.default.createElement("span", { className: "submenu-title-wrapper", __source: {
						fileName: _jsxFileName,
						lineNumber: 103
					}
				}, _react2.default.createElement(_antd.Icon, { type: "down", __source: {
						fileName: _jsxFileName,
						lineNumber: 104
					}
				}), "Select Country"),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 101
				}
			}, _react2.default.createElement(_antd.Menu.ItemGroup, { title: "Africa", __source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}, _react2.default.createElement(_antd.Menu.Item, {
				key: "setting:1",
				onClick: function onClick() {
					console.log("selected!");
					_this2.setState({
						countrySelected: true
					});
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 110
				}
			}, "Nigeria"))), _react2.default.createElement(_antd.Menu.Item, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 124
				}
			}, _react2.default.createElement(_antd.Button, {
				type: "primary",
				onClick: this.openApplyModal,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			}, "Apply as School/ISP")), _react2.default.createElement(_antd.Menu.Item, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 133
				}
			}, _react2.default.createElement(_antd.Button, {
				type: "primary",
				onClick: this.openLoginModal,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 134
				}
			}, "Login")))), this.props.children, _react2.default.createElement(_LoginModal2.default, {
				loginModalVisibility: this.state.loginModalVisibility,
				loginModalhandleCancel: this.loginModalhandleCancel,
				loginModalhandleOk: this.loginModalhandleOk,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 146
				}
			}), _react2.default.createElement(_ApplyModal2.default, {
				applyModalVisibility: this.state.applyModalVisibility,
				applyModalhandleCancel: this.applyModalhandleCancel,
				applyModalhandleOk: this.applyModalhandleOk,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}), _react2.default.createElement(Footer, { style: { position: "bottom", textAlign: "center" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 157
				}
			}, _react2.default.createElement("h1", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 158
				}
			}, "UNICEF CONNECT KIDS AROUND THE WORLD HACKATHON")));
		}
	}]);

	return Template;
}(_react2.default.Component);

exports.default = Template;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkhlYWQiLCJMaXN0T2ZTY2hvb2xzIiwiTG9naW5Nb2RhbCIsIkFwcGx5TW9kYWwiLCJWaWV3Q29ubmVjdGl2aXR5IiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIk1lbnUiLCJJY29uIiwiUm93IiwiQ29sIiwiQnV0dG9uIiwiRHJvcGRvd24iLCJUYWJzIiwiRGl2aWRlciIsIlByb2dyZXNzIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlN1Yk1lbnUiLCJUYWJQYW5lIiwiVGVtcGxhdGUiLCJzdGF0ZSIsIlRvdGFsTnVtYmVyb2ZTY2hvb2xzIiwiRnVuZGluZ05lZWRlZHRvQ29ubmVjdEFsbFNjaG9vbHMiLCJGdW5kaW5nUmVjZWl2ZWQiLCJBbW91bnROZWVkZWR0b0Z1bmRhZGRpdGlvbmFsU2Nob29sIiwicGVyY2VudGFnZU9mQ29ubmVjdGVkU2Nob29sIiwibG9naW5Nb2RhbFZpc2liaWxpdHkiLCJhcHBseU1vZGFsVmlzaWJpbGl0eSIsImNvdW50cnlTZWxlY3RlZCIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJjdXJyZW50IiwiZSIsImtleSIsIm9wZW5Mb2dpbk1vZGFsIiwibG9naW5Nb2RhbGhhbmRsZUNhbmNlbCIsImxvZ2luTW9kYWxoYW5kbGVPayIsIm9wZW5BcHBseU1vZGFsIiwiYXBwbHlNb2RhbGhhbmRsZUNhbmNlbCIsImFwcGx5TW9kYWxoYW5kbGVPayIsInpJbmRleCIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiY2hpbGRyZW4iLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFB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QUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUM7VUFBRCxBQUNNLEFBQ0w7YUFBUyxLQUZWLEFBRWU7O2VBRmY7aUJBQUE7QUFBQTtBQUNDLE1BdENILEFBb0NDLEFBQ0MsQUFRRCx5Q0FBQyxjQUFELFdBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDO1VBQUQsQUFDTSxBQUNMO2FBQVMsS0FGVixBQUVlOztlQUZmO2lCQUFBO0FBQUE7QUFDQyxNQW5ETCxBQUdDLEFBQ0MsQUE2Q0MsQUFDQyxBQVVGLGtCQUFBLEFBQUssTUE1RFAsQUE0RGEsQUFFWiwwQkFBQSxBQUFDOzBCQUNzQixLQUFBLEFBQUssTUFENUIsQUFDa0MsQUFDakM7NEJBQXdCLEtBRnpCLEFBRThCLEFBQzdCO3dCQUFvQixLQUhyQixBQUcwQjs7ZUFIMUI7aUJBOURELEFBOERDLEFBS0E7QUFMQTtBQUNDLHVCQUlELEFBQUM7MEJBQ3NCLEtBQUEsQUFBSyxNQUQ1QixBQUNrQyxBQUNqQzs0QkFBd0IsS0FGekIsQUFFOEIsQUFDN0I7d0JBQW9CLEtBSHJCLEFBRzBCOztlQUgxQjtpQkFuRUQsQUFtRUMsQUFNQTtBQU5BO0FBQ0MsdUJBS0EsY0FBRCxVQUFRLE9BQU8sRUFBRSxVQUFGLEFBQVksVUFBVSxXQUFyQyxBQUFlLEFBQWlDO2VBQWhEO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQTNFSCxBQUNDLEFBeUVDLEFBQ0MsQUFJSDs7Ozs7RUF0SXFCLGdCQUFNLEEsQUF5STdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9