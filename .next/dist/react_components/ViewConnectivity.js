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
			currentISPNameAddress: "Pending..",
			donationButtonLoading: false
		}, _this.sendDonationToContract = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								e.preventDefault();
								_this.setState({
									donationButtonLoading: true
								});
								_context.t0 = console;
								_context.next = 5;
								return (0, _sendDonation2.default)(_ListofSmartContractAddresses.countryManagerAddress, _this.state.donationAmount);

							case 5:
								_context.t1 = _context.sent;

								_context.t0.log.call(_context.t0, _context.t1);

								_this.setState({
									donationButtonLoading: false
								});

							case 8:
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
					lineNumber: 138
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 139
				}
			}, " ", _react2.default.createElement(Content, { style: { padding: "25px 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 141
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 10,
					height: 190
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
			}, _react2.default.createElement(_antd.Col, { span: 22, __source: {
					fileName: _jsxFileName,
					lineNumber: 150
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}, _react2.default.createElement("h2", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 152
				}
			}, this.state.countryName), "Connected Schools:", this.state.connectedSchools, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 155
				}
			}), "Total Number of Schools:", " ", this.state.TotalNumberofSchools, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 158
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
					lineNumber: 159
				}
			}), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 171
				}
			}), "Total Student Population:", this.state.population, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			}), "Country ETH Address:", " ", _react2.default.createElement(_routes.Link, {
				route: "https://rinkeby.etherscan.io/address/" + _ListofSmartContractAddresses.countryManagerAddress,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 176
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			}, _ListofSmartContractAddresses.countryManagerAddress))), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 182
				}
			}), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 183
				}
			}, "Funding Needed to Connect All Schools:", " ", _react2.default.createElement(_antd.Tag, { color: "grey", __source: {
					fileName: _jsxFileName,
					lineNumber: 185
				}
			}, this.state.FundingNeededtoConnectAllSchools, " ", "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 192
				}
			}), "Funding Received:", _react2.default.createElement(_antd.Tag, { color: "green", __source: {
					fileName: _jsxFileName,
					lineNumber: 194
				}
			}, this.state.balance, "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 197
				}
			}), "Amount Needed to Fund additional School:", " ", _react2.default.createElement(_antd.Tag, { color: "grey", __source: {
					fileName: _jsxFileName,
					lineNumber: 199
				}
			}, this.state.AmountNeededtoFundadditionalSchool, " ", "Wei"), "Current Internet Provider:", " ", _react2.default.createElement(_routes.Link, {
				route: "https://rinkeby.etherscan.io/address/" + this.state.currentISPNameAddress,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 207
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 212
				}
			}, this.state.currentISPName)))), _react2.default.createElement(_antd.Col, { span: 2, __source: {
					fileName: _jsxFileName,
					lineNumber: 217
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
					lineNumber: 219
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 230
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 231
				}
			}), _react2.default.createElement(_antd.Button, {
				type: "primary",
				style: { width: "110px" },
				onClick: this.sendDonationToContract,
				loading: this.state.donationButtonLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 232
				}
			}, "Donate"))), " ")), _react2.default.createElement(Content, { style: { padding: "0 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 246
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 24,
					minHeight: 500
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 247
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 254
				}
			}, _react2.default.createElement(_antd.Col, { span: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 255
				}
			}, _react2.default.createElement(_NigeriaMap2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 256
				}
			})), _react2.default.createElement(_antd.Col, { span: 14, __source: {
					fileName: _jsxFileName,
					lineNumber: 259
				}
			}, _react2.default.createElement(_antd.Tabs, {
				defaultActiveKey: "1",
				onChange: callback,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 260
				}
			}, _react2.default.createElement(TabPane, { tab: "List Of Schools", key: "1", __source: {
					fileName: _jsxFileName,
					lineNumber: 264
				}
			}, _react2.default.createElement(_SchoolTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 265
				}
			})), _react2.default.createElement(TabPane, { tab: "List Of ISPs", key: "2", __source: {
					fileName: _jsxFileName,
					lineNumber: 267
				}
			}, _react2.default.createElement(_ISPTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 268
				}
			})), _react2.default.createElement(TabPane, { tab: "Transactions", key: "3", __source: {
					fileName: _jsxFileName,
					lineNumber: 270
				}
			}, _react2.default.createElement(_TransactionsTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 271
				}
			})))))))));
		}
	}]);

	return ViewConnectivity;
}(_react2.default.Component);

exports.default = ViewConnectivity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvVmlld0Nvbm5lY3Rpdml0eS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIlRhYnMiLCJEaXZpZGVyIiwiQnJlYWRjcnVtYiIsIlByb2dyZXNzIiwiSW5wdXQiLCJUYWciLCJMaXN0T2ZTY2hvb2xzIiwiTGlzdE9mSVNQcyIsIk5pZ2VyaWFNYXAiLCJMaXN0T2ZUcmFuc2FjdGlvbnMiLCJTZW5kRG9uYXRpb24iLCJjb3VudHJ5TWFuYWdlckFkZHJlc3MiLCJMaW5rIiwiUm91dGVyIiwiR2V0TGlzdE9mQ291bnRyeU1hbmFnZXJzIiwiR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeSIsIkdldENvdW50cnlNYW5hZ2VyU3VtbWFyeSIsIkdldFNjaG9vbFN1bW1hcnkiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlRhYlBhbmUiLCJjYWxsYmFjayIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJWaWV3Q29ubmVjdGl2aXR5Iiwic3RhdGUiLCJUb3RhbE51bWJlcm9mU2Nob29scyIsIkZ1bmRpbmdOZWVkZWR0b0Nvbm5lY3RBbGxTY2hvb2xzIiwiRnVuZGluZ1JlY2VpdmVkIiwiQW1vdW50TmVlZGVkdG9GdW5kYWRkaXRpb25hbFNjaG9vbCIsInBlcmNlbnRhZ2VPZkNvbm5lY3RlZFNjaG9vbCIsImxvZ2luTW9kYWxWaXNpYmlsaXR5IiwiYXBwbHlNb2RhbFZpc2liaWxpdHkiLCJjb3VudHJ5U2VsZWN0ZWQiLCJiYWxhbmNlIiwiZG9uYXRpb25BbW91bnQiLCJwb3B1bGF0aW9uIiwiY291bnRyeU5hbWUiLCJjdXJyZW50SVNQTmFtZSIsImN1cnJlbnRJU1BOYW1lQWRkcmVzcyIsImRvbmF0aW9uQnV0dG9uTG9hZGluZyIsInNlbmREb25hdGlvblRvQ29udHJhY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJpc0xvYWRlZCIsImxvYWRpbmciLCJyZXN1bHQiLCJlcnJvciIsImNvdW50cnlNYW5hZ2VyTmlnZXJpYSIsImNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnkiLCJTY2hvb2xTdW1tYXJ5IiwiY29ubmVjdGVkU2Nob29scyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsInNjaG9vbFN1bW1hcnkiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIk1hdGgiLCJyb3VuZCIsIndpZHRoIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pbkhlaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUNDLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVELEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBd0I7Ozs7QUFDL0IsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFTLEFBQTZCOztBQUN0QyxBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUE4Qjs7OztBQUNyQyxBQUFPLEFBQXFDOzs7O0FBQzVDLEFBQ0MsQUFDQSxBQUNNLEFBQ1AsQUFBUyxBQUEyQjs7Ozs7OztBQUVwQztJQUNRLEEsUyxBQUE0QixhLEFBQTVCO0ksQUFBUSxVQUFvQixBLGFBQXBCLEE7SUFBUyxBLFMsQUFBVyxhLEFBQVg7SUFDakIsQSxVQUFZLEEsVyxBQUFaOztBQUVSLFNBQUEsQUFBUyxTQUFULEFBQWtCLEtBQUssQUFDdEI7U0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaOzs7SUFDSyxBOzs7Ozs7Ozs7Ozs7Ozs7OE5BQ0wsQTt5QkFBUSxBQUNlLEFBQ3RCO3FDQUZPLEFBRTJCLEFBQ2xDO29CQUhPLEFBR1UsQUFDakI7dUNBSk8sQUFJNkIsQUFDcEM7Z0NBTE8sQUFL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aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2lCQUNRLEFBQ00sQUFDWjtjQUZNLEFBRUcsQUFDVDtnQkFKRixBQUNRLEFBR0s7QUFITCxBQUNOOztlQUZGO2lCQUFBLEFBT0M7QUFQRDtBQUNDLHNCQU1BLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQywyQkFBSSxNQUFMLEFBQVc7ZUFBWDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQzs7ZUFBRDtpQkFGRixBQUNDLEFBQ0MsQUFHRDtBQUhDO0FBQUEsd0JBR0QsQUFBQywyQkFBSSxNQUFMLEFBQVc7ZUFBWDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQztzQkFBRCxBQUNrQixBQUNqQjtjQUZELEFBRVc7O2VBRlg7aUJBQUEsQUFJQztBQUpEO0FBQ0Msc0JBR0MsY0FBRCxXQUFTLEtBQVQsQUFBYSxtQkFBa0IsS0FBL0IsQUFBbUM7ZUFBbkM7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7O2VBQUQ7aUJBTEYsQUFJQyxBQUNDLEFBRUQ7QUFGQztBQUFBLHdCQUVBLGNBQUQsV0FBUyxLQUFULEFBQWEsZ0JBQWUsS0FBNUIsQUFBZ0M7ZUFBaEM7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7O2VBQUQ7aUJBUkYsQUFPQyxBQUNDLEFBRUQ7QUFGQztBQUFBLHdCQUVBLGNBQUQsV0FBUyxLQUFULEFBQWEsZ0JBQWUsS0FBNUIsQUFBZ0M7ZUFBaEM7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7O2VBQUQ7aUJBdElULEFBQ0MsQUFDQyxBQTJHQyxBQUNDLEFBT0MsQUFLQyxBQUNDLEFBVUMsQUFDQyxBQVVUO0FBVlM7QUFBQTs7Ozs7RUEzT29CLGdCQUFNLEEsQUF3UHJDOztrQkFBQSxBQUFlIiwiZmlsZSI6IlZpZXdDb25uZWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=