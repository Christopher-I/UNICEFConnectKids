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

var _Layout = require("../react_components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _SchoolInfoTable = require("../react_components/SchoolInfoTable");

var _SchoolInfoTable2 = _interopRequireDefault(_SchoolInfoTable);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/pages/index.js?entry";
//import map from "../img/brazil.png";


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

var Home = function (_React$Component) {
	(0, _inherits3.default)(Home, _React$Component);

	function Home() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Home);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			TotalNumberofSchools: "0",
			FundingNeededtoConnectAllSchools: "0",
			FundingReceived: "0",
			AmountNeededtoFundadditionalSchool: "0",
			percentageOfConnectedSchool: "50"
		}, _this.handleClick = function (e) {
			console.log("click ", e);
			_this.setState({
				current: e.key
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Home, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}), _react2.default.createElement(Header, { style: { zIndex: 1, width: "100%" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement(_antd.Menu, {
				onClick: this.handleClick,
				selectedKeys: [this.state.current],
				mode: "horizontal",
				theme: "dark",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement(_antd.Menu.Item, { key: "home", __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement(_antd.Icon, { type: "home", __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}), "Home"), _react2.default.createElement(SubMenu, {
				title: _react2.default.createElement("span", { className: "submenu-title-wrapper", __source: {
						fileName: _jsxFileName,
						lineNumber: 66
					}
				}, _react2.default.createElement(_antd.Icon, { type: "down", __source: {
						fileName: _jsxFileName,
						lineNumber: 67
					}
				}), "Select Country"),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement(_antd.Menu.ItemGroup, { title: "Africa", __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement(_antd.Menu.Item, { key: "setting:1", __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, "Nigeria"))), _react2.default.createElement(_antd.Menu.Item, { position: "right", __source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, _react2.default.createElement(_antd.Button, { type: "primary", __source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, "Apply as School/ISP")), _react2.default.createElement(_antd.Menu.Item, { position: "right", __source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, _react2.default.createElement(_antd.Button, { type: "primary", __source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, "Login")))), _react2.default.createElement(Content, { style: { padding: "25px 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 10,
					height: 100
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}, _react2.default.createElement(_antd.Col, { span: 22, __source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 97
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
					lineNumber: 99
				}
			}), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			}), "Total Number of Schools:", " ", this.state.TotalNumberofSchools, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 114
				}
			}), "Funding Needed to Connect All Schools:", " ", this.state.FundingNeededtoConnectAllSchools, " ", "ETH", _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 121
				}
			}), "Funding Received:", this.state.FundingReceived, " ETH", _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 124
				}
			}), "Amount Needed to Fund additional School:", " ", this.state.AmountNeededtoFundadditionalSchool, " ", "ETH")), _react2.default.createElement(_antd.Col, { span: 2, __source: {
					fileName: _jsxFileName,
					lineNumber: 134
				}
			}, _react2.default.createElement(_antd.Button, { type: "primary", __source: {
					fileName: _jsxFileName,
					lineNumber: 135
				}
			}, "Donate"))), " ")), _react2.default.createElement(Content, { style: { padding: "0 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 141
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 24,
					minHeight: 500
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 142
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 149
				}
			}, _react2.default.createElement(_antd.Col, { span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 150
				}
			}, _react2.default.createElement(_antd.Card, {
				hoverable: true,
				style: { width: 600, height: 300 },
				cover: _react2.default.createElement("img", {
					alt: "example",
					src: "https://upload.wikimedia.org/wikipedia/en/b/b9/Map_of_Nigerian_States_with_names.png",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 155
					}
				}),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			})), _react2.default.createElement(_antd.Col, { span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 162
				}
			}, _react2.default.createElement(_antd.Tabs, { defaultActiveKey: "1", onChange: callback, __source: {
					fileName: _jsxFileName,
					lineNumber: 163
				}
			}, _react2.default.createElement(TabPane, { tab: "List Of Schools", key: "1", __source: {
					fileName: _jsxFileName,
					lineNumber: 164
				}
			}, _react2.default.createElement(_SchoolInfoTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 165
				}
			})), _react2.default.createElement(TabPane, { tab: "List Of ISPs", key: "2", __source: {
					fileName: _jsxFileName,
					lineNumber: 167
				}
			}, "Content of Tab Pane 2")))))), _react2.default.createElement(Footer, { style: { position: "bottom", textAlign: "center" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 176
				}
			}, _react2.default.createElement("h1", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 177
				}
			}, "UNICEF CONNECT KIDS AROUND THE WORLD HACKATHON")));
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJDU1MiLCJMaXN0T2ZTY2hvb2xzIiwiTGF5b3V0IiwiTWVudSIsIkljb24iLCJSb3ciLCJDb2wiLCJCdXR0b24iLCJEcm9wZG93biIsIlRhYnMiLCJEaXZpZGVyIiwiQnJlYWRjcnVtYiIsIlByb2dyZXNzIiwiQ2FyZCIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJNZXRhIiwiU3ViTWVudSIsIlRhYlBhbmUiLCJjYWxsYmFjayIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwic3RhdGUiLCJUb3RhbE51bWJlcm9mU2Nob29scyIsIkZ1bmRpbmdOZWVkZWR0b0Nvbm5lY3RBbGxTY2hvb2xzIiwiRnVuZGluZ1JlY2VpdmVkIiwiQW1vdW50TmVlZGVkdG9GdW5kYWRkaXRpb25hbFNjaG9vbCIsInBlcmNlbnRhZ2VPZkNvbm5lY3RlZFNjaG9vbCIsImhhbmRsZUNsaWNrIiwiZSIsInNldFN0YXRlIiwiY3VycmVudCIsInpJbmRleCIsIndpZHRoIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQW1COzs7O0FBRTFCLEFBQ0MsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7OztBQWJEOzs7QUFnQkE7SSxBQUNRLFNBQTRCLEEsYSxBQUE1QjtJQUFRLEEsVSxBQUFvQixhQUFwQixBO0ksQUFBUyxTLEFBQVcsYSxBQUFYO0lBQ2pCLEEsTyxBQUFTLFdBQVQsQTtJLEFBQ0EsVSxBQUFZLFcsQUFBWjtJLEFBQ0EsVSxBQUFZLFdBQVosQTs7QUFFUixT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QUFERDtzQkFDQyxBQUFDLDRCQUFLLGtCQUFOLEFBQXVCLEtBQUksVUFBM0IsQUFBcUM7ZUFBckM7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsV0FBUyxLQUFULEFBQWEsbUJBQWtCLEtBQS9CLEFBQW1DO2VBQW5DO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDOztlQUFEO2lCQUZGLEFBQ0MsQUFDQyxBQUVEO0FBRkM7QUFBQSx3QkFFQSxjQUFELFdBQVMsS0FBVCxBQUFhLGdCQUFlLEtBQTVCLEFBQWdDO2VBQWhDO2lCQUFBO0FBQUE7TUF0SE4sQUE0RkMsQUFDQyxBQU9DLEFBYUMsQUFDQyxBQUlDLEFBU0wsK0NBQUMsY0FBRCxVQUFRLE9BQU8sRUFBRSxVQUFGLEFBQVksVUFBVSxXQUFyQyxBQUFlLEFBQWlDO2VBQWhEO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQWpJSCxBQUNDLEFBK0hDLEFBQ0MsQUFJSDs7Ozs7RUF0SmlCLGdCQUFNLEEsQUF5SnpCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9