"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _ISPTable = require("./tables/ISPTable");

var _ISPTable2 = _interopRequireDefault(_ISPTable);

var _NigeriaMap = require("./img/NigeriaMap");

var _NigeriaMap2 = _interopRequireDefault(_NigeriaMap);

var _TransactionsTable = require("./tables/TransactionsTable");

var _TransactionsTable2 = _interopRequireDefault(_TransactionsTable);

var _sendDonation = require("../ethereum/deployedContractCalls/countryManager/sendDonation");

var _sendDonation2 = _interopRequireDefault(_sendDonation);

var _ListofSmartContractAddresses = require("../ethereum/ListofSmartContractAddresses");

var _routes = require("../routes");

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
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ViewConnectivity);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ViewConnectivity.__proto__ || (0, _getPrototypeOf2.default)(ViewConnectivity)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			TotalNumberofSchools: "0",
			FundingNeededtoConnectAllSchools: " X ",
			FundingReceived: "0",
			AmountNeededtoFundadditionalSchool: "X ",
			percentageOfConnectedSchool: "50",
			loginModalVisibility: false,
			applyModalVisibility: false,
			countrySelected: false,
			balance: "",
			donationAmount: ""
		}, _this.sendDonationToContract = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								e.preventDefault();
								_context.t0 = console;
								_context.next = 4;
								return (0, _sendDonation2.default)(_ListofSmartContractAddresses.countryManagerAddress, _this.state.donationAmount);

							case 4:
								_context.t1 = _context.sent;

								_context.t0.log.call(_context.t0, _context.t1);

							case 6:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, _this2);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ViewConnectivity, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this3 = this;

			fetch("https://api-rinkeby.etherscan.io/api?module=account&action=balance&address=" + _ListofSmartContractAddresses.countryManagerAddress + "&tag=latest&apikey=YourApiKeyToken").then(function (res) {
				return res.json();
			}).then(function (result) {
				_this3.setState({
					isLoaded: true,
					loading: false,
					balance: result.result
				});
			},

			// Handle errors.
			function (error) {
				_this3.setState({
					isLoaded: true,
					loading: false,
					error: error
				});
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, " ", _react2.default.createElement(Content, { style: { padding: "25px 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 10,
					height: 130
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, _react2.default.createElement(_antd.Col, { span: 22, __source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, "Connected Schools In Nigeria:", _react2.default.createElement(_antd.Progress, {
				type: "circle",
				strokeColor: {
					"0%": "#108ee9",
					"100%": "#87d068"
				},
				percent: this.state.percentageOfConnectedSchool,
				width: 80,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}), "Total Number of Schools:", " ", this.state.TotalNumberofSchools, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 107
				}
			}), "Total School Population: students", _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}), "Account Number:", " ", _react2.default.createElement(_routes.Link, {
				route: "https://rinkeby.etherscan.io/address/" + _ListofSmartContractAddresses.countryManagerAddress,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 114
				}
			}, _ListofSmartContractAddresses.countryManagerAddress))), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 117
				}
			}, "Funding Needed to Connect All Schools:", " ", _react2.default.createElement(_antd.Tag, { color: "red", __source: {
					fileName: _jsxFileName,
					lineNumber: 119
				}
			}, this.state.FundingNeededtoConnectAllSchools, " ", "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 126
				}
			}), "Funding Received:", _react2.default.createElement(_antd.Tag, { color: "green", __source: {
					fileName: _jsxFileName,
					lineNumber: 128
				}
			}, this.state.balance, "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 131
				}
			}), "Amount Needed to Fund additional School:", " ", _react2.default.createElement(_antd.Tag, { color: "red", __source: {
					fileName: _jsxFileName,
					lineNumber: 133
				}
			}, this.state.AmountNeededtoFundadditionalSchool, " ", "Wei"))), _react2.default.createElement(_antd.Col, { span: 2, __source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			}, "Enter Amount", _react2.default.createElement(_antd.Input, {
				placeholder: "Wei",
				style: { width: "110px" },
				value: this.state.donationAmount,
				onChange: function onChange(event) {
					return _this4.setState({
						donationAmount: event.target.value
					});
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 145
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 156
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 157
				}
			}), _react2.default.createElement(_antd.Button, {
				type: "primary",
				style: { width: "110px" },
				onClick: this.sendDonationToContract,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 158
				}
			}, "Donate"))), " ")), _react2.default.createElement(Content, { style: { padding: "0 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 169
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 24,
					minHeight: 500
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 170
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 177
				}
			}, _react2.default.createElement(_antd.Col, { span: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 178
				}
			}, _react2.default.createElement(_NigeriaMap2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			})), _react2.default.createElement(_antd.Col, { span: 14, __source: {
					fileName: _jsxFileName,
					lineNumber: 182
				}
			}, _react2.default.createElement(_antd.Tabs, {
				defaultActiveKey: "1",
				onChange: callback,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 183
				}
			}, _react2.default.createElement(TabPane, { tab: "List Of Schools", key: "1", __source: {
					fileName: _jsxFileName,
					lineNumber: 187
				}
			}, _react2.default.createElement(_SchoolTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 188
				}
			})), _react2.default.createElement(TabPane, { tab: "List Of ISPs", key: "2", __source: {
					fileName: _jsxFileName,
					lineNumber: 190
				}
			}, _react2.default.createElement(_ISPTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 191
				}
			})), _react2.default.createElement(TabPane, { tab: "Transactions", key: "3", __source: {
					fileName: _jsxFileName,
					lineNumber: 193
				}
			}, _react2.default.createElement(_TransactionsTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 194
				}
			})))))))));
		}
	}]);

	return ViewConnectivity;
}(_react2.default.Component);

exports.default = ViewConnectivity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvVmlld0Nvbm5lY3Rpdml0eS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIlRhYnMiLCJEaXZpZGVyIiwiQnJlYWRjcnVtYiIsIlByb2dyZXNzIiwiSW5wdXQiLCJUYWciLCJMaXN0T2ZTY2hvb2xzIiwiTGlzdE9mSVNQcyIsIk5pZ2VyaWFNYXAiLCJMaXN0T2ZUcmFuc2FjdGlvbnMiLCJTZW5kRG9uYXRpb24iLCJjb3VudHJ5TWFuYWdlckFkZHJlc3MiLCJMaW5rIiwiUm91dGVyIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlRhYlBhbmUiLCJjYWxsYmFjayIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJWaWV3Q29ubmVjdGl2aXR5Iiwic3RhdGUiLCJUb3RhbE51bWJlcm9mU2Nob29scyIsIkZ1bmRpbmdOZWVkZWR0b0Nvbm5lY3RBbGxTY2hvb2xzIiwiRnVuZGluZ1JlY2VpdmVkIiwiQW1vdW50TmVlZGVkdG9GdW5kYWRkaXRpb25hbFNjaG9vbCIsInBlcmNlbnRhZ2VPZkNvbm5lY3RlZFNjaG9vbCIsImxvZ2luTW9kYWxWaXNpYmlsaXR5IiwiYXBwbHlNb2RhbFZpc2liaWxpdHkiLCJjb3VudHJ5U2VsZWN0ZWQiLCJiYWxhbmNlIiwiZG9uYXRpb25BbW91bnQiLCJzZW5kRG9uYXRpb25Ub0NvbnRyYWN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInNldFN0YXRlIiwiaXNMb2FkZWQiLCJsb2FkaW5nIiwicmVzdWx0IiwiZXJyb3IiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pbkhlaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUNDLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVELEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBd0I7Ozs7QUFDL0IsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFTLEFBQTZCOztBQUN0QyxBQUFTLEFBQU0sQUFBYzs7Ozs7OztBQUU3QjtJQUNRLEEsU0FBNEIsQSxhQUE1QixBO0lBQVEsQSxVQUFvQixBLGFBQXBCLEE7SUFBUyxBLFMsQUFBVyxhLEFBQVg7SUFDakIsQSxVLEFBQVksV0FBWixBOztBQUVSLFNBQUEsQUFBUyxTQUFULEFBQWtCLEtBQUssQUFDdEI7U0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaOzs7SUFDSyxBOzs7Ozs7Ozs7Ozs7Ozs7OE5BQ0wsQTt5QkFBUSxBQUNlLEFBQ3RCO3FDQUZPLEFBRTJCLEFBQ2xDO29CQUhPLEFBR1UsQUFDakI7dUNBSk8sQUFJNkIsQUFDcEM7Z0NBTE8sQUFLc0IsQUFDN0I7eUJBTk8sQUFNZSxBQUN0Qjt5QkFQTyxBQU9lLEFBQ3RCO29CQVJPLEFBUVUsQUFDakI7WUFUTyxBQVNFLEFBQ1Q7bUJBVk8sQUFVUyxBO0FBVlQsQUFDUCxXLEFBcUNEO3dGQUF5QixpQkFBQSxBQUFNLEdBQU47a0VBQUE7ZUFBQTt1Q0FBQTtZQUN4QjtVQUR3QixBQUN4QixBQUFFO3NCQURzQixBQUV4Qjt3QkFGd0I7ZUFHakIsQUFBYSxpRkFBdUIsTUFBQSxBQUFLLE1BSHhCLEFBR2pCLEFBQStDOztZQUg5QjsrQkFBQTs7b0JBQUEsQUFFaEIsK0JBRmdCOztZQUFBO1lBQUE7d0JBQUE7O0FBQUE7Z0JBQUE7QTs7Ozs7Ozs7OztzQ0F6Qkw7Z0JBQ25COztTQUFBLEFBQytFLDRLQUQvRSxBQUdFLEtBQUssZUFBQTtXQUFPLElBQVAsQUFBTyxBQUFJO0FBSGxCLE1BQUEsQUFJRSxLQUNBLGtCQUFVLEFBQ1Q7V0FBQSxBQUFLO2VBQVMsQUFDSCxBQUNWO2NBRmEsQUFFSixBQUNUO2NBQVMsT0FIVixBQUFjLEFBR0csQUFFakI7QUFMYyxBQUNiO0FBUEosQUFhRTs7QUFDQTtvQkFBUyxBQUNSO1dBQUEsQUFBSztlQUFTLEFBQ0gsQUFDVjtjQUZhLEFBRUosQUFDVDtZQUhELEFBQWMsQUFLZDtBQUxjLEFBQ2I7QUFoQkosQUFzQkE7Ozs7MkJBU1E7Z0JBQ1I7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0U7QUFERjtBQUFBLE1BQUEsQUFFQyxxQkFBQyxjQUFELFdBQVMsT0FBTyxFQUFFLFNBQWxCLEFBQWdCLEFBQVc7ZUFBM0I7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2lCQUNRLEFBQ00sQUFDWjtjQUZNLEFBRUcsQUFDVDthQUpGLEFBQ1EsQUFHRTtBQUhGLEFBQ047O2VBRkY7aUJBQUEsQUFPQztBQVBEO0FBQ0Msc0JBTUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLDJCQUFJLE1BQUwsQUFBVztlQUFYO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUVDLGlEQUFBLEFBQUM7VUFBRCxBQUNNLEFBQ0w7O1dBQWEsQUFDTixBQUNOO2FBSkYsQUFFYyxBQUVKLEFBRVQ7QUFKYSxBQUNaO2FBSUEsS0FBQSxBQUFLLE1BUFAsQUFRSSxBQUVIO1dBVkQsQUFVUTs7ZUFWUjtpQkFGRCxBQUVDLEFBWUE7QUFaQTtBQUNDLHVCQVdELEFBQUMsK0JBQVEsTUFBVCxBQUFjO2VBQWQ7aUJBZEQsQUFjQztBQUFBO09BQ3lCLDRCQWYxQixBQWdCRSxVQUFBLEFBQUssTUFoQlAsQUFnQmEsQUFDWixzQ0FBQSxBQUFDLCtCQUFRLE1BQVQsQUFBYztlQUFkO2lCQWpCRCxBQWlCQztBQUFBO09BRUEscURBQUEsQUFBQywrQkFBUSxNQUFULEFBQWM7ZUFBZDtpQkFuQkQsQUFtQkM7QUFBQTtPQUNnQixtQkFwQmpCLEFBcUJDLHFCQUFBLEFBQUM7V0FBRCxBQUNnRDs7ZUFEaEQ7aUJBQUEsQUFHQztBQUhEO0FBQ0Msc0JBRUEsY0FBQTs7ZUFBQTtpQkF6QkgsQUFDQyxBQXFCQyxBQUdDLEFBQUksQUFHTjtBQUhFO0FBQUEsOEVBR0YsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFDd0MsMENBRHhDLEFBRUMscUJBQUEsQUFBQywyQkFBSSxPQUFMLEFBQVc7ZUFBWDtpQkFBQSxBQUVFO0FBRkY7V0FFRSxBQUFLLE1BRlAsQUFHSSxBQUNELGtDQUpILEtBRkQsQUFFQyxBQU9BLHdCQUFBLEFBQUMsK0JBQVEsTUFBVCxBQUFjO2VBQWQ7aUJBVEQsQUFTQztBQUFBO09BRUEscUNBQUEsQUFBQywyQkFBSSxPQUFMLEFBQVc7ZUFBWDtpQkFBQSxBQUNFO0FBREY7V0FDRSxBQUFLLE1BRFAsQUFDYSxTQVpkLEFBV0MsQUFHQSx3QkFBQSxBQUFDLCtCQUFRLE1BQVQsQUFBYztlQUFkO2lCQWRELEFBY0M7QUFBQTtPQUN5Qyw0Q0FmMUMsQUFnQkMscUJBQUEsQUFBQywyQkFBSSxPQUFMLEFBQVc7ZUFBWDtpQkFBQSxBQUVFO0FBRkY7V0FFRSxBQUFLLE1BRlAsQUFHSSxBQUNELG9DQUpILEtBN0NILEFBQ0MsQUE0QkMsQUFnQkMsQUFVRiwwQkFBQSxBQUFDLDJCQUFJLE1BQUwsQUFBVztlQUFYO2lCQUFBO0FBQUE7TUFFQyxnQ0FBQSxBQUFDO2lCQUFELEFBQ2EsQUFDWjtXQUFPLEVBQUUsT0FGVixBQUVRLEFBQVMsQUFDaEI7V0FBTyxLQUFBLEFBQUssTUFIYixBQUdtQixBQUNsQjtjQUFVLHlCQUFBO21CQUNULEFBQUs7c0JBRUgsTUFBQSxBQUFNLE9BSEMsQUFDVCxBQUFjLEFBRUM7QUFGRCxBQUNiLE1BREQ7QUFMRjs7ZUFBQTtpQkFGRCxBQUVDLEFBV0E7QUFYQTtBQUNDOztlQVVEO2lCQWJELEFBYUMsQUFDQTtBQURBO0FBQUE7O2VBQ0E7aUJBZEQsQUFjQyxBQUNBO0FBREE7QUFBQSx1QkFDQSxBQUFDO1VBQUQsQUFDTSxBQUNMO1dBQU8sRUFBRSxPQUZWLEFBRVEsQUFBUyxBQUNoQjthQUFTLEtBSFYsQUFHZTs7ZUFIZjtpQkFBQTtBQUFBO0FBQ0MsTUE5RUosQUFPQyxBQXVEQyxBQWVDLEFBUUssYUF4RlYsQUFFQyxBQUNDLEFBd0ZELHVCQUFDLGNBQUQsV0FBUyxPQUFPLEVBQUUsU0FBbEIsQUFBZ0IsQUFBVztlQUEzQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7aUJBQ1EsQUFDTSxBQUNaO2NBRk0sQUFFRyxBQUNUO2dCQUpGLEFBQ1EsQUFHSztBQUhMLEFBQ047O2VBRkY7aUJBQUEsQUFPQztBQVBEO0FBQ0Msc0JBTUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLDJCQUFJLE1BQUwsQUFBVztlQUFYO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDOztlQUFEO2lCQUZGLEFBQ0MsQUFDQyxBQUdEO0FBSEM7QUFBQSx3QkFHRCxBQUFDLDJCQUFJLE1BQUwsQUFBVztlQUFYO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDO3NCQUFELEFBQ2tCLEFBQ2pCO2NBRkQsQUFFVzs7ZUFGWDtpQkFBQSxBQUlDO0FBSkQ7QUFDQyxzQkFHQyxjQUFELFdBQVMsS0FBVCxBQUFhLG1CQUFrQixLQUEvQixBQUFtQztlQUFuQztpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQzs7ZUFBRDtpQkFMRixBQUlDLEFBQ0MsQUFFRDtBQUZDO0FBQUEsd0JBRUEsY0FBRCxXQUFTLEtBQVQsQUFBYSxnQkFBZSxLQUE1QixBQUFnQztlQUFoQztpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQzs7ZUFBRDtpQkFSRixBQU9DLEFBQ0MsQUFFRDtBQUZDO0FBQUEsd0JBRUEsY0FBRCxXQUFTLEtBQVQsQUFBYSxnQkFBZSxLQUE1QixBQUFnQztlQUFoQztpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQzs7ZUFBRDtpQkF0SFQsQUFDQyxBQUNDLEFBMkZDLEFBQ0MsQUFPQyxBQUtDLEFBQ0MsQUFVQyxBQUNDLEFBVVQ7QUFWUztBQUFBOzs7OztFQXJLb0IsZ0JBQU0sQSxBQWtMckM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVmlld0Nvbm5lY3Rpdml0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==