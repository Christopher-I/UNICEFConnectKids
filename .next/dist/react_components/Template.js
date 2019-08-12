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
			_routes.Router.push({
				pathname: "/admin"
			});
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
					lineNumber: 87
				}
			}, _react2.default.createElement(_Head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}), _react2.default.createElement(Header, { style: { zIndex: 1, width: "100%" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, _react2.default.createElement(_antd.Menu, {
				selectable: "false",
				onClick: this.handleClick,
				selectedKeys: [this.state.current],
				mode: "horizontal",
				theme: "dark",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}, _react2.default.createElement(_antd.Menu.Item, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}, _react2.default.createElement(_routes.Link, { route: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 100
				}
			}, " Home"))), _react2.default.createElement(SubMenu, {
				title: _react2.default.createElement("span", { className: "submenu-title-wrapper", __source: {
						fileName: _jsxFileName,
						lineNumber: 106
					}
				}, _react2.default.createElement(_antd.Icon, { type: "down", __source: {
						fileName: _jsxFileName,
						lineNumber: 107
					}
				}), "Select Country"),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, _react2.default.createElement(_antd.Menu.ItemGroup, { title: "Africa", __source: {
					fileName: _jsxFileName,
					lineNumber: 112
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
					lineNumber: 113
				}
			}, "Nigeria"))), _react2.default.createElement(_antd.Menu.Item, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 127
				}
			}, _react2.default.createElement(_antd.Button, {
				type: "primary",
				onClick: this.openApplyModal,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 128
				}
			}, "Apply as School/ISP")), _react2.default.createElement(_antd.Menu.Item, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 136
				}
			}, _react2.default.createElement(_antd.Button, {
				type: "primary",
				onClick: this.openLoginModal,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			}, "Login")))), this.props.children, _react2.default.createElement(_LoginModal2.default, {
				loginModalVisibility: this.state.loginModalVisibility,
				loginModalhandleCancel: this.loginModalhandleCancel,
				loginModalhandleOk: this.loginModalhandleOk,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 149
				}
			}), _react2.default.createElement(_ApplyModal2.default, {
				applyModalVisibility: this.state.applyModalVisibility,
				applyModalhandleCancel: this.applyModalhandleCancel,
				applyModalhandleOk: this.applyModalhandleOk,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 154
				}
			}), _react2.default.createElement(Footer, { style: { position: "bottom", textAlign: "center" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 160
				}
			}, _react2.default.createElement("h1", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 161
				}
			}, "UNICEF Challenge: Reducing The Divide")));
		}
	}]);

	return Template;
}(_react2.default.Component);

exports.default = Template;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkhlYWQiLCJMaXN0T2ZTY2hvb2xzIiwiTG9naW5Nb2RhbCIsIkFwcGx5TW9kYWwiLCJWaWV3Q29ubmVjdGl2aXR5IiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIk1lbnUiLCJJY29uIiwiUm93IiwiQ29sIiwiQnV0dG9uIiwiRHJvcGRvd24iLCJUYWJzIiwiRGl2aWRlciIsIlByb2dyZXNzIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlN1Yk1lbnUiLCJUYWJQYW5lIiwiVGVtcGxhdGUiLCJzdGF0ZSIsIlRvdGFsTnVtYmVyb2ZTY2hvb2xzIiwiRnVuZGluZ05lZWRlZHRvQ29ubmVjdEFsbFNjaG9vbHMiLCJGdW5kaW5nUmVjZWl2ZWQiLCJBbW91bnROZWVkZWR0b0Z1bmRhZGRpdGlvbmFsU2Nob29sIiwicGVyY2VudGFnZU9mQ29ubmVjdGVkU2Nob29sIiwibG9naW5Nb2RhbFZpc2liaWxpdHkiLCJhcHBseU1vZGFsVmlzaWJpbGl0eSIsImNvdW50cnlTZWxlY3RlZCIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJjdXJyZW50IiwiZSIsImtleSIsIm9wZW5Mb2dpbk1vZGFsIiwibG9naW5Nb2RhbGhhbmRsZUNhbmNlbCIsImxvZ2luTW9kYWxoYW5kbGVPayIsInB1c2giLCJwYXRobmFtZSIsIm9wZW5BcHBseU1vZGFsIiwiYXBwbHlNb2RhbGhhbmRsZUNhbmNlbCIsImFwcGx5TW9kYWxoYW5kbGVPayIsInpJbmRleCIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiY2hpbGRyZW4iLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW1C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QUNDLE1BdkJKLEFBYUMsQUFRQyxBQUNDLEFBY0YsOEJBQUMsY0FBRCxXQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQztVQUFELEFBQ00sQUFDTDthQUFTLEtBRlYsQUFFZTs7ZUFGZjtpQkFBQTtBQUFBO0FBQ0MsTUF0Q0gsQUFvQ0MsQUFDQyxBQVFELHlDQUFDLGNBQUQsV0FBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUM7VUFBRCxBQUNNLEFBQ0w7YUFBUyxLQUZWLEFBRWU7O2VBRmY7aUJBQUE7QUFBQTtBQUNDLE1BbkRMLEFBR0MsQUFDQyxBQTZDQyxBQUNDLEFBVUYsa0JBQUEsQUFBSyxNQTVEUCxBQTREYSxBQUVaLDBCQUFBLEFBQUM7MEJBQ3NCLEtBQUEsQUFBSyxNQUQ1QixBQUNrQyxBQUNqQzs0QkFBd0IsS0FGekIsQUFFOEIsQUFDN0I7d0JBQW9CLEtBSHJCLEFBRzBCOztlQUgxQjtpQkE5REQsQUE4REMsQUFLQTtBQUxBO0FBQ0MsdUJBSUQsQUFBQzswQkFDc0IsS0FBQSxBQUFLLE1BRDVCLEFBQ2tDLEFBQ2pDOzRCQUF3QixLQUZ6QixBQUU4QixBQUM3Qjt3QkFBb0IsS0FIckIsQUFHMEI7O2VBSDFCO2lCQW5FRCxBQW1FQyxBQU1BO0FBTkE7QUFDQyx1QkFLQSxjQUFELFVBQVEsT0FBTyxFQUFFLFVBQUYsQUFBWSxVQUFVLFdBQXJDLEFBQWUsQUFBaUM7ZUFBaEQ7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BM0VILEFBQ0MsQUF5RUMsQUFDQyxBQUlIOzs7OztFQXpJcUIsZ0JBQU0sQSxBQTRJN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=