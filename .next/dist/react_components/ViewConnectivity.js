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

var _getListOfCountryManagers = require("../ethereum/deployedContractCalls/main/getListOfCountryManagers");

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _getSummaryOfAllSchoolsInCountry = require("../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry");

var _getSummaryOfAllSchoolsInCountry2 = _interopRequireDefault(_getSummaryOfAllSchoolsInCountry);

var _getContractSummary = require("../ethereum/deployedContractCalls/getContractSummary");

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
			FundingNeededtoConnectAllSchools: "X",
			FundingReceived: "",
			AmountNeededtoFundadditionalSchool: "X",
			percentageOfConnectedSchool: "0",
			loginModalVisibility: false,
			applyModalVisibility: false,
			countrySelected: false,
			balance: "",
			donationAmount: "",
			population: "",
			countryName: "Nigeria",
			currentISPName: "Pending..",
			currentISPNameAddress: "Pending.."
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
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				var _this3 = this;

				var result, countryManagerNigeria, countryManagerNigeriaSummary, SchoolSummary, population, connectedSchools, i;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
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

								//gets a list of country managers
								_context2.next = 3;
								return (0, _getListOfCountryManagers2.default)(_ListofSmartContractAddresses.mainContractAddress);

							case 3:
								result = _context2.sent;

								//the first country oin the away is Nigeria
								countryManagerNigeria = result[0];
								// //get the summary of the contract manager of Nigeria

								_context2.next = 7;
								return (0, _getContractSummary.GetCountryManagerSummary)(countryManagerNigeria);

							case 7:
								countryManagerNigeriaSummary = _context2.sent;
								_context2.next = 10;
								return (0, _getSummaryOfAllSchoolsInCountry2.default)(countryManagerNigeriaSummary);

							case 10:
								SchoolSummary = _context2.sent;

								console.log(SchoolSummary);
								// //get summary of all ISP under the contract manager of Nigeria
								// const ISPSummary = await GetSummaryOfAllISPsInCountry(
								// 	countryManagerNigeriaSummary
								//);

								population = 0;
								connectedSchools = 0;

								for (i = 0; i < SchoolSummary.length; i++) {
									population += parseInt(SchoolSummary[i][3]);

									if (SchoolSummary[i][4]) {
										connectedSchools++;
									}
								}

								this.setState({
									schoolSummary: SchoolSummary,
									population: population,
									connectedSchools: connectedSchools,
									percentageOfConnectedSchool: connectedSchools / SchoolSummary.length * 100,
									currentISPName: countryManagerNigeriaSummary[3],
									currentISPNameAddress: countryManagerNigeriaSummary[4],
									TotalNumberofSchools: SchoolSummary.length
								});

							case 16:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function componentDidMount() {
				return _ref3.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 130
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 131
				}
			}, " ", _react2.default.createElement(Content, { style: { padding: "25px 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 133
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 10,
					height: 190
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 134
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 141
				}
			}, _react2.default.createElement(_antd.Col, { span: 22, __source: {
					fileName: _jsxFileName,
					lineNumber: 142
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			}, _react2.default.createElement("h2", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 144
				}
			}, this.state.countryName), "Connected Schools:", this.state.connectedSchools, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 147
				}
			}), "Total Number of Schools:", " ", this.state.TotalNumberofSchools, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 150
				}
			}), _react2.default.createElement(_antd.Progress, {
				type: "circle",
				strokeColor: {
					"0%": "#108ee9",
					"100%": "#87d068"
				},
				percent: Math.round(this.state.percentageOfConnectedSchool),
				width: 80,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 163
				}
			}), "Total Student Population:", this.state.population, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 166
				}
			}), "Country ETH Address:", " ", _react2.default.createElement(_routes.Link, {
				route: "https://rinkeby.etherscan.io/address/" + _ListofSmartContractAddresses.countryManagerAddress,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 168
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 171
				}
			}, _ListofSmartContractAddresses.countryManagerAddress))), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			}), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 175
				}
			}, "Funding Needed to Connect All Schools:", " ", _react2.default.createElement(_antd.Tag, { color: "grey", __source: {
					fileName: _jsxFileName,
					lineNumber: 177
				}
			}, this.state.FundingNeededtoConnectAllSchools, " ", "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 184
				}
			}), "Funding Received:", _react2.default.createElement(_antd.Tag, { color: "green", __source: {
					fileName: _jsxFileName,
					lineNumber: 186
				}
			}, this.state.balance, "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 189
				}
			}), "Amount Needed to Fund additional School:", " ", _react2.default.createElement(_antd.Tag, { color: "grey", __source: {
					fileName: _jsxFileName,
					lineNumber: 191
				}
			}, this.state.AmountNeededtoFundadditionalSchool, " ", "Wei"), "Current Internet Provider:", " ", _react2.default.createElement(_routes.Link, {
				route: "https://rinkeby.etherscan.io/address/" + this.state.currentISPNameAddress,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 199
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 204
				}
			}, this.state.currentISPName)))), _react2.default.createElement(_antd.Col, { span: 2, __source: {
					fileName: _jsxFileName,
					lineNumber: 209
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
					lineNumber: 211
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 222
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 223
				}
			}), _react2.default.createElement(_antd.Button, {
				type: "primary",
				style: { width: "110px" },
				onClick: this.sendDonationToContract,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 224
				}
			}, "Donate"))), " ")), _react2.default.createElement(Content, { style: { padding: "0 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 235
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 24,
					minHeight: 500
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 236
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 243
				}
			}, _react2.default.createElement(_antd.Col, { span: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 244
				}
			}, _react2.default.createElement(_NigeriaMap2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 245
				}
			})), _react2.default.createElement(_antd.Col, { span: 14, __source: {
					fileName: _jsxFileName,
					lineNumber: 248
				}
			}, _react2.default.createElement(_antd.Tabs, {
				defaultActiveKey: "1",
				onChange: callback,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 249
				}
			}, _react2.default.createElement(TabPane, { tab: "List Of Schools", key: "1", __source: {
					fileName: _jsxFileName,
					lineNumber: 253
				}
			}, _react2.default.createElement(_SchoolTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 254
				}
			})), _react2.default.createElement(TabPane, { tab: "List Of ISPs", key: "2", __source: {
					fileName: _jsxFileName,
					lineNumber: 256
				}
			}, _react2.default.createElement(_ISPTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 257
				}
			})), _react2.default.createElement(TabPane, { tab: "Transactions", key: "3", __source: {
					fileName: _jsxFileName,
					lineNumber: 259
				}
			}, _react2.default.createElement(_TransactionsTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 260
				}
			})))))))));
		}
	}]);

	return ViewConnectivity;
}(_react2.default.Component);

exports.default = ViewConnectivity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvVmlld0Nvbm5lY3Rpdml0eS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIlRhYnMiLCJEaXZpZGVyIiwiQnJlYWRjcnVtYiIsIlByb2dyZXNzIiwiSW5wdXQiLCJUYWciLCJMaXN0T2ZTY2hvb2xzIiwiTGlzdE9mSVNQcyIsIk5pZ2VyaWFNYXAiLCJMaXN0T2ZUcmFuc2FjdGlvbnMiLCJTZW5kRG9uYXRpb24iLCJjb3VudHJ5TWFuYWdlckFkZHJlc3MiLCJMaW5rIiwiUm91dGVyIiwiR2V0TGlzdE9mQ291bnRyeU1hbmFnZXJzIiwiR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeSIsIkdldENvdW50cnlNYW5hZ2VyU3VtbWFyeSIsIkdldFNjaG9vbFN1bW1hcnkiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlRhYlBhbmUiLCJjYWxsYmFjayIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJWaWV3Q29ubmVjdGl2aXR5Iiwic3RhdGUiLCJUb3RhbE51bWJlcm9mU2Nob29scyIsIkZ1bmRpbmdOZWVkZWR0b0Nvbm5lY3RBbGxTY2hvb2xzIiwiRnVuZGluZ1JlY2VpdmVkIiwiQW1vdW50TmVlZGVkdG9GdW5kYWRkaXRpb25hbFNjaG9vbCIsInBlcmNlbnRhZ2VPZkNvbm5lY3RlZFNjaG9vbCIsImxvZ2luTW9kYWxWaXNpYmlsaXR5IiwiYXBwbHlNb2RhbFZpc2liaWxpdHkiLCJjb3VudHJ5U2VsZWN0ZWQiLCJiYWxhbmNlIiwiZG9uYXRpb25BbW91bnQiLCJwb3B1bGF0aW9uIiwiY291bnRyeU5hbWUiLCJjdXJyZW50SVNQTmFtZSIsImN1cnJlbnRJU1BOYW1lQWRkcmVzcyIsInNlbmREb25hdGlvblRvQ29udHJhY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJpc0xvYWRlZCIsImxvYWRpbmciLCJyZXN1bHQiLCJlcnJvciIsImNvdW50cnlNYW5hZ2VyTmlnZXJpYSIsImNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnkiLCJTY2hvb2xTdW1tYXJ5IiwiY29ubmVjdGVkU2Nob29scyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsInNjaG9vbFN1bW1hcnkiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIk1hdGgiLCJyb3VuZCIsIndpZHRoIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pbkhlaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUNDLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVELEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBd0I7Ozs7QUFDL0IsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFTLEFBQTZCOztBQUN0QyxBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUE4Qjs7OztBQUNyQyxBQUFPLEFBQXFDOzs7O0FBQzVDLEFBQ0MsQUFDQSxBQUNNLEFBQ1AsQUFBUyxBQUEyQjs7Ozs7OztBQUVwQztJQUNRLEEsUyxBQUE0QixhLEFBQTVCO0lBQVEsQSxVLEFBQW9CLGEsQUFBcEI7SUFBUyxBLFNBQVcsQSxhLEFBQVg7SUFDakIsQSxVLEFBQVksVyxBQUFaOztBQUVSLFNBQUEsQUFBUyxTQUFULEFBQWtCLEtBQUssQUFDdEI7U0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaOzs7SSxBQUNLOzs7Ozs7Ozs7Ozs7Ozs7OE5BQ0wsQTt5QkFBUSxBQUNlLEFBQ3RCO3FDQUZPLEFBRTJCLEFBQ2xDO29CQUhPLEFBR1UsQUFDakI7dUNBSk8sQUFJNkIsQUFDcEM7Z0NBTE8sQUFLc0IsQUFDN0I7eUJBTk8sQUFNZSxBQUN0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QUFDLDJCQUFJLE1BQUwsQUFBVztlQUFYO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDOztlQUFEO2lCQUZGLEFBQ0MsQUFDQyxBQUdEO0FBSEM7QUFBQSx3QkFHRCxBQUFDLDJCQUFJLE1BQUwsQUFBVztlQUFYO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDO3NCQUFELEFBQ2tCLEFBQ2pCO2NBRkQsQUFFVzs7ZUFGWDtpQkFBQSxBQUlDO0FBSkQ7QUFDQyxzQkFHQyxjQUFELFdBQVMsS0FBVCxBQUFhLG1CQUFrQixLQUEvQixBQUFtQztlQUFuQztpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQzs7ZUFBRDtpQkFMRixBQUlDLEFBQ0MsQUFFRDtBQUZDO0FBQUEsd0JBRUEsY0FBRCxXQUFTLEtBQVQsQUFBYSxnQkFBZSxLQUE1QixBQUFnQztlQUFoQztpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQzs7ZUFBRDtpQkFSRixBQU9DLEFBQ0MsQUFFRDtBQUZDO0FBQUEsd0JBRUEsY0FBRCxXQUFTLEtBQVQsQUFBYSxnQkFBZSxLQUE1QixBQUFnQztlQUFoQztpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQzs7ZUFBRDtpQkFuSVQsQUFDQyxBQUNDLEFBd0dDLEFBQ0MsQUFPQyxBQUtDLEFBQ0MsQUFVQyxBQUNDLEFBVVQ7QUFWUztBQUFBOzs7OztFQWhPb0IsZ0JBQU0sQSxBQTZPckM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVmlld0Nvbm5lY3Rpdml0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==