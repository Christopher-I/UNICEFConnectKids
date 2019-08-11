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

var _SchoolTable = require("./tables/SchoolTable");

var _SchoolTable2 = _interopRequireDefault(_SchoolTable);

var _NigeriaMap = require("./img/NigeriaMap");

var _NigeriaMap2 = _interopRequireDefault(_NigeriaMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/ViewConnectivity.js";


//define extract child properties
var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer;
var TabPane = _antd.Tabs.TabPane;

function callback(key) {
	console.log(key);
}

var ViewConnectivity = function (_React$Component) {
	(0, _inherits3.default)(ViewConnectivity, _React$Component);

	function ViewConnectivity() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ViewConnectivity);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ViewConnectivity.__proto__ || (0, _getPrototypeOf2.default)(ViewConnectivity)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			TotalNumberofSchools: "0",
			FundingNeededtoConnectAllSchools: "0",
			FundingReceived: "0",
			AmountNeededtoFundadditionalSchool: "0",
			percentageOfConnectedSchool: "50",
			loginModalVisibility: false,
			applyModalVisibility: false,
			countrySelected: false
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ViewConnectivity, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, " ", _react2.default.createElement(Content, { style: { padding: "25px 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 10,
					height: 100
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement(_antd.Col, { span: 22, __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
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
					lineNumber: 51
				}
			}), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}), "Total Number of Schools:", " ", this.state.TotalNumberofSchools, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}), "Funding Needed to Connect All Schools:", " ", this.state.FundingNeededtoConnectAllSchools, " ", "ETH", _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}), "Funding Received:", this.state.FundingReceived, " ETH", _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}), "Amount Needed to Fund additional School:", " ", this.state.AmountNeededtoFundadditionalSchool, " ", "ETH")), _react2.default.createElement(_antd.Col, { span: 2, __source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, _react2.default.createElement(_antd.Button, { type: "primary", __source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, "Donate"))), " ")), _react2.default.createElement(Content, { style: { padding: "0 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 24,
					minHeight: 500
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 100
				}
			}, _react2.default.createElement(_antd.Col, { span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 101
				}
			}, _react2.default.createElement(_NigeriaMap2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			})), _react2.default.createElement(_antd.Col, { span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			}, _react2.default.createElement(_antd.Tabs, {
				defaultActiveKey: "1",
				onChange: callback,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 106
				}
			}, _react2.default.createElement(TabPane, { tab: "List Of Schools", key: "1", __source: {
					fileName: _jsxFileName,
					lineNumber: 110
				}
			}, _react2.default.createElement(_SchoolTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			})), _react2.default.createElement(TabPane, { tab: "List Of ISPs", key: "2", __source: {
					fileName: _jsxFileName,
					lineNumber: 113
				}
			}, "Content of Tab Pane 2"), _react2.default.createElement(TabPane, { tab: "Transfers", key: "3", __source: {
					fileName: _jsxFileName,
					lineNumber: 116
				}
			}, "Content of Tab Pane 3"))))))));
		}
	}]);

	return ViewConnectivity;
}(_react2.default.Component);

exports.default = ViewConnectivity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvVmlld0Nvbm5lY3Rpdml0eS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIlRhYnMiLCJEaXZpZGVyIiwiQnJlYWRjcnVtYiIsIlByb2dyZXNzIiwiTGlzdE9mU2Nob29scyIsIk5pZ2VyaWFNYXAiLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwiVGFiUGFuZSIsImNhbGxiYWNrIiwia2V5IiwiY29uc29sZSIsImxvZyIsIlZpZXdDb25uZWN0aXZpdHkiLCJzdGF0ZSIsIlRvdGFsTnVtYmVyb2ZTY2hvb2xzIiwiRnVuZGluZ05lZWRlZHRvQ29ubmVjdEFsbFNjaG9vbHMiLCJGdW5kaW5nUmVjZWl2ZWQiLCJBbW91bnROZWVkZWR0b0Z1bmRhZGRpdGlvbmFsU2Nob29sIiwicGVyY2VudGFnZU9mQ29ubmVjdGVkU2Nob29sIiwibG9naW5Nb2RhbFZpc2liaWxpdHkiLCJhcHBseU1vZGFsVmlzaWJpbGl0eSIsImNvdW50cnlTZWxlY3RlZCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUNDLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUQsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFPLEFBQWdCOzs7Ozs7Ozs7QUFFdkI7SSxBQUNRLFNBQTRCLEEsYUFBNUIsQTtJLEFBQVEsVUFBb0IsQSxhLEFBQXBCO0ksQUFBUyxTQUFXLEEsYUFBWCxBO0ksQUFDakIsVSxBQUFZLFdBQVosQTs7QUFFUixTQUFBLEFBQVMsU0FBVCxBQUFrQixLQUFLLEFBQ3RCO1NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjs7O0lBQ0ssQTs7Ozs7Ozs7Ozs7Ozs7OE5BQ0wsQTt5QkFBUSxBQUNlLEFBQ3RCO3FDQUZPLEFBRTJCLEFBQ2xDO29CQUhPLEFBR1UsQUFDakI7dUNBSk8sQUFJNkIsQUFDcEM7Z0NBTE8sQUFLc0IsQUFDN0I7eUJBTk8sQUFNZSxBQUN0Qjt5QkFQTyxBQU9lLEFBQ3RCO29CQVJPLEFBUVUsQTtBQVJWLEFBQ1A7Ozs7OzJCQVVRLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsTUFBQSxBQUVDLHFCQUFDLGNBQUQsV0FBUyxPQUFPLEVBQUUsU0FBbEIsQUFBZ0IsQUFBVztlQUEzQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7aUJBQ1EsQUFDTSxBQUNaO2NBRk0sQUFFRyxBQUNUO2FBSkYsQUFDUSxBQUdFO0FBSEYsQUFDTjs7ZUFGRjtpQkFBQSxBQU9DO0FBUEQ7QUFDQyxzQkFNQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsMkJBQUksTUFBTCxBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BRUMsc0NBQUEsQUFBQztVQUFELEFBQ00sQUFDTDs7V0FBYSxBQUNOLEFBQ047YUFKRixBQUVjLEFBRUosQUFFVDtBQUphLEFBQ1o7YUFJQSxLQUFBLEFBQUssTUFQUCxBQVFJLEFBRUg7V0FWRCxBQVVROztlQVZSO2lCQUZELEFBRUMsQUFZQTtBQVpBO0FBQ0MsdUJBV0QsQUFBQywrQkFBUSxNQUFULEFBQWM7ZUFBZDtpQkFkRCxBQWNDO0FBQUE7T0FDeUIsNEJBZjFCLEFBZ0JFLFVBQUEsQUFBSyxNQWhCUCxBQWdCYSxBQUNaLHNDQUFBLEFBQUMsK0JBQVEsTUFBVCxBQUFjO2VBQWQ7aUJBakJELEFBaUJDO0FBQUE7T0FDdUMsMENBbEJ4QyxBQW9CRSxVQUFBLEFBQUssTUFwQlAsQUFxQkksQUFDRCxrQ0F0QkgsS0F3QkMsdUJBQUEsQUFBQywrQkFBUSxNQUFULEFBQWM7ZUFBZDtpQkF4QkQsQUF3QkM7QUFBQTtPQUVDLDBCQUFBLEFBQUssTUExQlAsQUEwQmEsaUJBQ1osd0JBQUEsQUFBQywrQkFBUSxNQUFULEFBQWM7ZUFBZDtpQkEzQkQsQUEyQkM7QUFBQTtPQUN5Qyw0Q0E1QjFDLEFBOEJFLFVBQUEsQUFBSyxNQTlCUCxBQStCSSxBQUNELG9DQWhDSCxLQUZGLEFBQ0MsQUFDQyxBQXFDRCx5QkFBQSxBQUFDLDJCQUFJLE1BQUwsQUFBVztlQUFYO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDhCQUFPLE1BQVIsQUFBYTtlQUFiO2lCQUFBO0FBQUE7TUEvQ0gsQUFPQyxBQXVDQyxBQUNDLEFBRUssYUFwRFYsQUFFQyxBQUNDLEFBb0RELHVCQUFDLGNBQUQsV0FBUyxPQUFPLEVBQUUsU0FBbEIsQUFBZ0IsQUFBVztlQUEzQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7aUJBQ1EsQUFDTSxBQUNaO2NBRk0sQUFFRyxBQUNUO2dCQUpGLEFBQ1EsQUFHSztBQUhMLEFBQ047O2VBRkY7aUJBQUEsQUFPQztBQVBEO0FBQ0Msc0JBTUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLDJCQUFJLE1BQUwsQUFBVztlQUFYO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDOztlQUFEO2lCQUZGLEFBQ0MsQUFDQyxBQUdEO0FBSEM7QUFBQSx3QkFHRCxBQUFDLDJCQUFJLE1BQUwsQUFBVztlQUFYO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDO3NCQUFELEFBQ2tCLEFBQ2pCO2NBRkQsQUFFVzs7ZUFGWDtpQkFBQSxBQUlDO0FBSkQ7QUFDQyxzQkFHQyxjQUFELFdBQVMsS0FBVCxBQUFhLG1CQUFrQixLQUEvQixBQUFtQztlQUFuQztpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQzs7ZUFBRDtpQkFMRixBQUlDLEFBQ0MsQUFFRDtBQUZDO0FBQUEsd0JBRUEsY0FBRCxXQUFTLEtBQVQsQUFBYSxnQkFBZSxLQUE1QixBQUFnQztlQUFoQztpQkFBQTtBQUFBO01BUEQsQUFPQyxBQUdBLDBDQUFDLGNBQUQsV0FBUyxLQUFULEFBQWEsYUFBWSxLQUF6QixBQUE2QjtlQUE3QjtpQkFBQTtBQUFBO01BakZSLEFBQ0MsQUFDQyxBQXVEQyxBQUNDLEFBT0MsQUFLQyxBQUNDLEFBVUMsQUFXUjs7Ozs7RUF6RzZCLGdCQUFNLEEsQUE0R3JDOztrQkFBQSxBQUFlIiwiZmlsZSI6IlZpZXdDb25uZWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=