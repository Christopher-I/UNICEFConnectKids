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
			FundingNeededtoConnectAllSchools: " X ",
			FundingReceived: "0",
			AmountNeededtoFundadditionalSchool: "X ",
			percentageOfConnectedSchool: "50",
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

								console.log(countryManagerNigeriaSummary);

								//get summary of all Schools under the contract manager of Nigeria
								_context2.next = 11;
								return (0, _getSummaryOfAllSchoolsInCountry2.default)(countryManagerNigeriaSummary);

							case 11:
								SchoolSummary = _context2.sent;

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
									currentISPNameAddress: countryManagerNigeriaSummary[4]
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
			}, this.props.countrySelected ? _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 132
				}
			}, " ", _react2.default.createElement(Content, { style: { padding: "25px 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 134
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 10,
					height: 190
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 135
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 142
				}
			}, _react2.default.createElement(_antd.Col, { span: 22, __source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 144
				}
			}, _react2.default.createElement("h2", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 145
				}
			}, this.state.countryName), "Connected Schools:", this.state.connectedSchools, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 148
				}
			}), "Total Number of Schools:", " ", this.state.schoolSummary.length, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}), _react2.default.createElement(_antd.Progress, {
				type: "circle",
				strokeColor: {
					"0%": "#108ee9",
					"100%": "#87d068"
				},
				percent: this.state.percentageOfConnectedSchool,
				width: 80,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 152
				}
			}), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 164
				}
			}), "Total Student Population:", this.state.population, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 167
				}
			}), "Country Account Number:", " ", _react2.default.createElement(_routes.Link, {
				route: "https://rinkeby.etherscan.io/address/" + _ListofSmartContractAddresses.countryManagerAddress,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 169
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 172
				}
			}, _ListofSmartContractAddresses.countryManagerAddress))), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 175
				}
			}), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 176
				}
			}, "Funding Needed to Connect All Schools:", " ", _react2.default.createElement(_antd.Tag, { color: "red", __source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			}, this.state.FundingNeededtoConnectAllSchools, " ", "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 186
				}
			}), "Funding Received:", _react2.default.createElement(_antd.Tag, { color: "green", __source: {
					fileName: _jsxFileName,
					lineNumber: 188
				}
			}, this.state.balance, "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 191
				}
			}), "Amount Needed to Fund additional School:", " ", _react2.default.createElement(_antd.Tag, { color: "red", __source: {
					fileName: _jsxFileName,
					lineNumber: 194
				}
			}, this.state.AmountNeededtoFundadditionalSchool, " ", "Wei"), "Current ISP :", " ", _react2.default.createElement(_routes.Link, {
				route: "https://rinkeby.etherscan.io/address/" + _ListofSmartContractAddresses.countryManagerAddress,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 202
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 205
				}
			}, this.state.currentISPName)))), _react2.default.createElement(_antd.Col, { span: 2, __source: {
					fileName: _jsxFileName,
					lineNumber: 212
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
					lineNumber: 214
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 225
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 226
				}
			}), _react2.default.createElement(_antd.Button, {
				type: "primary",
				style: { width: "110px" },
				onClick: this.sendDonationToContract,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 227
				}
			}, "Donate"))), " ")), _react2.default.createElement(Content, { style: { padding: "0 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 240
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 24,
					minHeight: 500
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 241
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 248
				}
			}, _react2.default.createElement(_antd.Col, { span: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 249
				}
			}, _react2.default.createElement(_NigeriaMap2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 250
				}
			})), _react2.default.createElement(_antd.Col, { span: 14, __source: {
					fileName: _jsxFileName,
					lineNumber: 253
				}
			}, _react2.default.createElement(_antd.Tabs, {
				defaultActiveKey: "1",
				onChange: callback,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 254
				}
			}, _react2.default.createElement(TabPane, {
				tab: "List Of Schools",
				key: "1",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 258
				}
			}, _react2.default.createElement(_SchoolTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 262
				}
			})), _react2.default.createElement(TabPane, { tab: "List Of ISPs", key: "2", __source: {
					fileName: _jsxFileName,
					lineNumber: 264
				}
			}, _react2.default.createElement(_ISPTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 265
				}
			})), _react2.default.createElement(TabPane, { tab: "Transactions", key: "3", __source: {
					fileName: _jsxFileName,
					lineNumber: 267
				}
			}, _react2.default.createElement(_TransactionsTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 268
				}
			})))))))) : _react2.default.createElement(Content, { style: { padding: "25px 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 277
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 10,
					minHeight: 500
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 278
				}
			}, _react2.default.createElement("h1", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 285
				}
			}, "Please Select a Country"))));
		}
	}]);

	return ViewConnectivity;
}(_react2.default.Component);

exports.default = ViewConnectivity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvVmlld0Nvbm5lY3Rpdml0eS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIlRhYnMiLCJEaXZpZGVyIiwiQnJlYWRjcnVtYiIsIlByb2dyZXNzIiwiSW5wdXQiLCJUYWciLCJMaXN0T2ZTY2hvb2xzIiwiTGlzdE9mSVNQcyIsIk5pZ2VyaWFNYXAiLCJMaXN0T2ZUcmFuc2FjdGlvbnMiLCJTZW5kRG9uYXRpb24iLCJjb3VudHJ5TWFuYWdlckFkZHJlc3MiLCJMaW5rIiwiUm91dGVyIiwiR2V0TGlzdE9mQ291bnRyeU1hbmFnZXJzIiwiR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeSIsIkdldENvdW50cnlNYW5hZ2VyU3VtbWFyeSIsIkdldFNjaG9vbFN1bW1hcnkiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlRhYlBhbmUiLCJjYWxsYmFjayIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJWaWV3Q29ubmVjdGl2aXR5Iiwic3RhdGUiLCJUb3RhbE51bWJlcm9mU2Nob29scyIsIkZ1bmRpbmdOZWVkZWR0b0Nvbm5lY3RBbGxTY2hvb2xzIiwiRnVuZGluZ1JlY2VpdmVkIiwiQW1vdW50TmVlZGVkdG9GdW5kYWRkaXRpb25hbFNjaG9vbCIsInBlcmNlbnRhZ2VPZkNvbm5lY3RlZFNjaG9vbCIsImxvZ2luTW9kYWxWaXNpYmlsaXR5IiwiYXBwbHlNb2RhbFZpc2liaWxpdHkiLCJjb3VudHJ5U2VsZWN0ZWQiLCJiYWxhbmNlIiwiZG9uYXRpb25BbW91bnQiLCJwb3B1bGF0aW9uIiwiY291bnRyeU5hbWUiLCJjdXJyZW50SVNQTmFtZSIsImN1cnJlbnRJU1BOYW1lQWRkcmVzcyIsInNlbmREb25hdGlvblRvQ29udHJhY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJpc0xvYWRlZCIsImxvYWRpbmciLCJyZXN1bHQiLCJlcnJvciIsImNvdW50cnlNYW5hZ2VyTmlnZXJpYSIsImNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnkiLCJTY2hvb2xTdW1tYXJ5IiwiY29ubmVjdGVkU2Nob29scyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsInNjaG9vbFN1bW1hcnkiLCJwcm9wcyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibWluSGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQ0MsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUQsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUF3Qjs7OztBQUMvQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQVMsQUFBNkI7O0FBQ3RDLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQThCOzs7O0FBQ3JDLEFBQU8sQUFBcUM7Ozs7QUFDNUMsQUFDQyxBQUNBLEFBQ00sQUFDUCxBQUFTLEFBQTJCOzs7Ozs7O0FBRXBDO0ksQUFDUSxTLEFBQTRCLGEsQUFBNUI7SUFBUSxBLFVBQW9CLEEsYSxBQUFwQjtJLEFBQVMsU0FBVyxBLGFBQVgsQTtJQUNqQixBLFUsQUFBWSxXQUFaLEE7O0FBRVIsU0FBQSxBQUFTLFNBQVQsQUFBa0IsS0FBSyxBQUN0QjtTQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7OztJLEFBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs4TixBQUNMO3lCQUFRLEFBQ2UsQUFDdEI7cUNBRk8sQUFFMkIsQUFDbEM7b0JBSE8sQUFHVSxBQUNqQjt1Q0FKTyxBQUk2QixBQUNwQztnQ0FMTyxBQUtzQixBQUM3Qjt5QkFOTyxBQU1lLEFBQ3RCO3lCQVBP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O2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7O2VBQUQ7aUJBRkYsQUFDQyxBQUNDLEFBR0Q7QUFIQztBQUFBLHdCQUdELEFBQUMsMkJBQUksTUFBTCxBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7c0JBQUQsQUFDa0IsQUFDakI7Y0FGRCxBQUVXOztlQUZYO2lCQUFBLEFBSUM7QUFKRDtBQUNDLHNCQUdDLGNBQUQ7U0FBQSxBQUNLLEFBQ0o7U0FGRCxBQUVLOztlQUZMO2lCQUFBLEFBSUM7QUFKRDtBQUNDLHNCQUdBLEFBQUM7O2VBQUQ7aUJBUkYsQUFJQyxBQUlDLEFBRUQ7QUFGQztBQUFBLHdCQUVBLGNBQUQsV0FBUyxLQUFULEFBQWEsZ0JBQWUsS0FBNUIsQUFBZ0M7ZUFBaEM7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7O2VBQUQ7aUJBWEYsQUFVQyxBQUNDLEFBRUQ7QUFGQztBQUFBLHdCQUVBLGNBQUQsV0FBUyxLQUFULEFBQWEsZ0JBQWUsS0FBNUIsQUFBZ0M7ZUFBaEM7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7O2VBQUQ7aUJBeklQLEFBQ0EsQUE0R0MsQUFDQyxBQU9DLEFBS0MsQUFDQyxBQWFDLEFBQ0M7QUFBQTtBQUFBLCtCQVNOLGNBQUQsV0FBUyxPQUFPLEVBQUUsU0FBbEIsQUFBZ0IsQUFBVztlQUEzQjtpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDQyxjQUFBOztpQkFDUSxBQUNNLEFBQ1o7Y0FGTSxBQUVHLEFBQ1Q7Z0JBSkYsQUFDUSxBQUdLO0FBSEwsQUFDTjs7ZUFGRjtpQkFBQSxBQU9DO0FBUEQ7QUFDQyxzQkFNQSxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQTVKTCxBQUNDLEFBbUpFLEFBQ0MsQUFPQyxBQU1MOzs7OztFQS9QNkIsZ0JBQU0sQSxBQWtRckM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVmlld0Nvbm5lY3Rpdml0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==