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

var _NigeriaMap = require("./maps/NigeriaMap");

var _NigeriaMap2 = _interopRequireDefault(_NigeriaMap);

var _SchoolTable = require("./tables/SchoolTable");

var _SchoolTable2 = _interopRequireDefault(_SchoolTable);

var _LoginModal = require("./modals/LoginModal");

var _LoginModal2 = _interopRequireDefault(_LoginModal);

var _ApplyModal = require("./modals/ApplyModal");

var _ApplyModal2 = _interopRequireDefault(_ApplyModal);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/Template.js";
//import {openLoginModal} from "./modals/modalFunctions"


//define extract child properties
var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer;
var Meta = _antd.Card.Meta;
var SubMenu = _antd.Menu.SubMenu;
var TabPane = _antd.Tabs.TabPane;

function callback(key) {
	console.log(key);
}

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
					lineNumber: 90
				}
			}, _react2.default.createElement(_Head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}), _react2.default.createElement(Header, { style: { zIndex: 1, width: "100%" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			}, _react2.default.createElement(_antd.Menu, {
				selectable: "false",
				onClick: this.handleClick,
				selectedKeys: [this.state.current],
				mode: "horizontal",
				theme: "dark",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 94
				}
			}, _react2.default.createElement(SubMenu, {
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
			}, "Login")))), this.state.countrySelected ? _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 145
				}
			}, " ", _react2.default.createElement(Content, { style: { padding: "25px 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 147
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 10,
					height: 100
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 148
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 155
				}
			}, _react2.default.createElement(_antd.Col, { span: 22, __source: {
					fileName: _jsxFileName,
					lineNumber: 156
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 157
				}
			}, "Connected Schools:", _react2.default.createElement(_antd.Progress, {
				type: "circle",
				strokeColor: {
					"0%": "#108ee9",
					"100%": "#87d068"
				},
				percent: this.state.percentageOfConnectedSchool,
				width: 80,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 159
				}
			}), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 171
				}
			}), "Total Number of Schools:", " ", this.state.TotalNumberofSchools, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			}), "Funding Needed to Connect All Schools:", " ", this.state.FundingNeededtoConnectAllSchools, " ", "ETH", _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 182
				}
			}), "Funding Received:", this.state.FundingReceived, " ETH", _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 185
				}
			}), "Amount Needed to Fund additional School:", " ", this.state.AmountNeededtoFundadditionalSchool, " ", "ETH")), _react2.default.createElement(_antd.Col, { span: 2, __source: {
					fileName: _jsxFileName,
					lineNumber: 196
				}
			}, _react2.default.createElement(_antd.Button, { type: "primary", __source: {
					fileName: _jsxFileName,
					lineNumber: 197
				}
			}, "Donate"))), " ")), _react2.default.createElement(Content, { style: { padding: "0 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 202
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 24,
					minHeight: 500
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 203
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 210
				}
			}, _react2.default.createElement(_antd.Col, { span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 211
				}
			}, _react2.default.createElement(_NigeriaMap2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 212
				}
			})), _react2.default.createElement(_antd.Col, { span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 215
				}
			}, _react2.default.createElement(_antd.Tabs, {
				defaultActiveKey: "1",
				onChange: callback,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 216
				}
			}, _react2.default.createElement(TabPane, {
				tab: "List Of Schools",
				key: "1",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 220
				}
			}, _react2.default.createElement(_SchoolTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 224
				}
			})), _react2.default.createElement(TabPane, { tab: "List Of ISPs", key: "2", __source: {
					fileName: _jsxFileName,
					lineNumber: 226
				}
			}, "Content of Tab Pane 2"), _react2.default.createElement(TabPane, { tab: "Transfers", key: "3", __source: {
					fileName: _jsxFileName,
					lineNumber: 229
				}
			}, "Content of Tab Pane 3"))))))) : _react2.default.createElement(Content, { style: { padding: "25px 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 239
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 10,
					minHeight: 500
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 240
				}
			}, _react2.default.createElement("h1", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 247
				}
			}, "Please Select a Country"))), _react2.default.createElement(_LoginModal2.default, {
				loginModalVisibility: this.state.loginModalVisibility,
				loginModalhandleCancel: this.loginModalhandleCancel,
				loginModalhandleOk: this.loginModalhandleOk,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 252
				}
			}), _react2.default.createElement(_ApplyModal2.default, {
				applyModalVisibility: this.state.applyModalVisibility,
				applyModalhandleCancel: this.applyModalhandleCancel,
				applyModalhandleOk: this.applyModalhandleOk,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 257
				}
			}), _react2.default.createElement(Footer, { style: { position: "bottom", textAlign: "center" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 263
				}
			}, _react2.default.createElement("h1", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 264
				}
			}, "UNICEF CONNECT KIDS AROUND THE WORLD HACKATHON")));
		}
	}]);

	return Template;
}(_react2.default.Component);

exports.default = Template;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkhlYWQiLCJOaWdlcmlhTWFwIiwiTGlzdE9mU2Nob29scyIsIkxvZ2luTW9kYWwiLCJBcHBseU1vZGFsIiwiTGF5b3V0IiwiTWVudSIsIkljb24iLCJSb3ciLCJDb2wiLCJCdXR0b24iLCJEcm9wZG93biIsIlRhYnMiLCJEaXZpZGVyIiwiQnJlYWRjcnVtYiIsIlByb2dyZXNzIiwiQ2FyZCIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJNZXRhIiwiU3ViTWVudSIsIlRhYlBhbmUiLCJjYWxsYmFjayIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJUZW1wbGF0ZSIsInN0YXRlIiwiVG90YWxOdW1iZXJvZlNjaG9vbHMiLCJGdW5kaW5nTmVlZGVkdG9Db25uZWN0QWxsU2Nob29scyIsIkZ1bmRpbmdSZWNlaXZlZCIsIkFtb3VudE5lZWRlZHRvRnVuZGFkZGl0aW9uYWxTY2hvb2wiLCJwZXJjZW50YWdlT2ZDb25uZWN0ZWRTY2hvb2wiLCJsb2dpbk1vZGFsVmlzaWJpbGl0eSIsImFwcGx5TW9kYWxWaXNpYmlsaXR5IiwiY291bnRyeVNlbGVjdGVkIiwiaGFuZGxlQ2xpY2siLCJzZXRTdGF0ZSIsImN1cnJlbnQiLCJlIiwib3BlbkxvZ2luTW9kYWwiLCJsb2dpbk1vZGFsaGFuZGxlQ2FuY2VsIiwibG9naW5Nb2RhbGhhbmRsZU9rIiwib3BlbkFwcGx5TW9kYWwiLCJhcHBseU1vZGFsaGFuZGxlQ2FuY2VsIiwiYXBwbHlNb2RhbGhhbmRsZU9rIiwiekluZGV4Iiwid2lkdGgiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIm1pbkhlaWdodCIsInBvc2l0aW9uIiwidGV4dEFsaWduIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxB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QUFBYSxnQkFBZSxLQUE1QixBQUFnQztlQUFoQztpQkFBQTtBQUFBO01BVkQsQUFVQyxBQUdBLDBDQUFDLGNBQUQsV0FBUyxLQUFULEFBQWEsYUFBWSxLQUF6QixBQUE2QjtlQUE3QjtpQkFBQTtBQUFBO01BckZOLEFBQ0EsQUF5REMsQUFDQyxBQU9DLEFBS0MsQUFDQyxBQWFDLGlEQVVMLGNBQUQsV0FBUyxPQUFPLEVBQUUsU0FBbEIsQUFBZ0IsQUFBVztlQUEzQjtpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDQyxjQUFBOztpQkFDUSxBQUNNLEFBQ1o7Y0FGTSxBQUVHLEFBQ1Q7Z0JBSkYsQUFDUSxBQUdLO0FBSEwsQUFDTjs7ZUFGRjtpQkFBQSxBQU9DO0FBUEQ7QUFDQyxzQkFNQSxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQTdKSixBQXFKRSxBQUNDLEFBT0MsQUFLSCw4Q0FBQSxBQUFDOzBCQUNzQixLQUFBLEFBQUssTUFENUIsQUFDa0MsQUFDakM7NEJBQXdCLEtBRnpCLEFBRThCLEFBQzdCO3dCQUFvQixLQUhyQixBQUcwQjs7ZUFIMUI7aUJBbEtELEFBa0tDLEFBS0E7QUFMQTtBQUNDLHVCQUlELEFBQUM7MEJBQ3NCLEtBQUEsQUFBSyxNQUQ1QixBQUNrQyxBQUNqQzs0QkFBd0IsS0FGekIsQUFFOEIsQUFDN0I7d0JBQW9CLEtBSHJCLEFBRzBCOztlQUgxQjtpQkF2S0QsQUF1S0MsQUFNQTtBQU5BO0FBQ0MsdUJBS0EsY0FBRCxVQUFRLE9BQU8sRUFBRSxVQUFGLEFBQVksVUFBVSxXQUFyQyxBQUFlLEFBQWlDO2VBQWhEO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQS9LSCxBQUNDLEFBNktDLEFBQ0MsQUFJSDs7Ozs7RUExT3FCLGdCQUFNLEEsQUE2TzdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9