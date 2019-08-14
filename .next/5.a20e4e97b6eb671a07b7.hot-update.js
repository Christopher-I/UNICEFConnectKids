webpackHotUpdate(5,{

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(429);

var _SchoolTable = __webpack_require__(576);

var _SchoolTable2 = _interopRequireDefault(_SchoolTable);

var _ISPTable = __webpack_require__(1635);

var _ISPTable2 = _interopRequireDefault(_ISPTable);

var _NigeriaMap = __webpack_require__(1636);

var _NigeriaMap2 = _interopRequireDefault(_NigeriaMap);

var _TransactionsTable = __webpack_require__(1637);

var _TransactionsTable2 = _interopRequireDefault(_TransactionsTable);

var _sendDonation = __webpack_require__(1640);

var _sendDonation2 = _interopRequireDefault(_sendDonation);

var _ListofSmartContractAddresses = __webpack_require__(457);

var _routes = __webpack_require__(504);

var _getListOfCountryManagers = __webpack_require__(489);

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _getSummaryOfAllSchoolsInCountry = __webpack_require__(575);

var _getSummaryOfAllSchoolsInCountry2 = _interopRequireDefault(_getSummaryOfAllSchoolsInCountry);

var _getContractSummary = __webpack_require__(458);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/ViewConnectivity.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/ViewConnectivity.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hMjBlNGU5N2I2ZWI2NzFhMDdiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVhY3RfY29tcG9uZW50cy9WaWV3Q29ubmVjdGl2aXR5LmpzP2E5NGZkZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0TGF5b3V0LFxuXHRSb3csXG5cdENvbCxcblx0QnV0dG9uLFxuXHRUYWJzLFxuXHREaXZpZGVyLFxuXHRCcmVhZGNydW1iLFxuXHRQcm9ncmVzcyxcblx0SW5wdXQsXG5cdFRhZ1xufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpc3RPZlNjaG9vbHMgZnJvbSBcIi4vdGFibGVzL1NjaG9vbFRhYmxlXCI7XG5pbXBvcnQgTGlzdE9mSVNQcyBmcm9tIFwiLi90YWJsZXMvSVNQVGFibGVcIjtcbmltcG9ydCBOaWdlcmlhTWFwIGZyb20gXCIuL2ltZy9OaWdlcmlhTWFwXCI7XG5pbXBvcnQgTGlzdE9mVHJhbnNhY3Rpb25zIGZyb20gXCIuL3RhYmxlcy9UcmFuc2FjdGlvbnNUYWJsZVwiO1xuaW1wb3J0IFNlbmREb25hdGlvbiBmcm9tIFwiLi4vZXRoZXJldW0vZGVwbG95ZWRDb250cmFjdENhbGxzL2NvdW50cnlNYW5hZ2VyL3NlbmREb25hdGlvblwiO1xuaW1wb3J0IHsgY291bnRyeU1hbmFnZXJBZGRyZXNzIH0gZnJvbSBcIi4uL2V0aGVyZXVtL0xpc3RvZlNtYXJ0Q29udHJhY3RBZGRyZXNzZXNcIjtcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCBHZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnMgZnJvbSBcIi4uL2V0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9tYWluL2dldExpc3RPZkNvdW50cnlNYW5hZ2Vyc1wiO1xuaW1wb3J0IEdldFN1bW1hcnlPZkFsbFNjaG9vbHNJbkNvdW50cnkgZnJvbSBcIi4uL2V0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9jb3VudHJ5TWFuYWdlci9nZXRTdW1tYXJ5T2ZBbGxTY2hvb2xzSW5Db3VudHJ5XCI7XG5pbXBvcnQge1xuXHRHZXRDb3VudHJ5TWFuYWdlclN1bW1hcnksXG5cdEdldFNjaG9vbFN1bW1hcnlcbn0gZnJvbSBcIi4uL2V0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9nZXRDb250cmFjdFN1bW1hcnlcIjtcbmltcG9ydCB7IG1haW5Db250cmFjdEFkZHJlc3MgfSBmcm9tIFwiLi4vZXRoZXJldW0vTGlzdG9mU21hcnRDb250cmFjdEFkZHJlc3Nlc1wiO1xuXG4vL2RlZmluZSBleHRyYWN0IGNoaWxkIHByb3BlcnRpZXNcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcbmNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcblxuZnVuY3Rpb24gY2FsbGJhY2soa2V5KSB7XG5cdGNvbnNvbGUubG9nKGtleSk7XG59XG5jbGFzcyBWaWV3Q29ubmVjdGl2aXR5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0VG90YWxOdW1iZXJvZlNjaG9vbHM6IFwiMFwiLFxuXHRcdEZ1bmRpbmdOZWVkZWR0b0Nvbm5lY3RBbGxTY2hvb2xzOiBcIiBYIFwiLFxuXHRcdEZ1bmRpbmdSZWNlaXZlZDogXCIwXCIsXG5cdFx0QW1vdW50TmVlZGVkdG9GdW5kYWRkaXRpb25hbFNjaG9vbDogXCJYIFwiLFxuXHRcdHBlcmNlbnRhZ2VPZkNvbm5lY3RlZFNjaG9vbDogXCI1MFwiLFxuXHRcdGxvZ2luTW9kYWxWaXNpYmlsaXR5OiBmYWxzZSxcblx0XHRhcHBseU1vZGFsVmlzaWJpbGl0eTogZmFsc2UsXG5cdFx0Y291bnRyeVNlbGVjdGVkOiBmYWxzZSxcblx0XHRiYWxhbmNlOiBcIlwiLFxuXHRcdGRvbmF0aW9uQW1vdW50OiBcIlwiLFxuXHRcdHBvcHVsYXRpb246IFwiXCIsXG5cdFx0Y291bnRyeU5hbWU6IFwiTmlnZXJpYVwiLFxuXHRcdGN1cnJlbnRJU1BOYW1lOiBcIlBlbmRpbmcuLlwiLFxuXHRcdGN1cnJlbnRJU1BOYW1lQWRkcmVzczogXCJQZW5kaW5nLi5cIlxuXHR9O1xuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGZldGNoKFxuXHRcdFx0YGh0dHBzOi8vYXBpLXJpbmtlYnkuZXRoZXJzY2FuLmlvL2FwaT9tb2R1bGU9YWNjb3VudCZhY3Rpb249YmFsYW5jZSZhZGRyZXNzPSR7Y291bnRyeU1hbmFnZXJBZGRyZXNzfSZ0YWc9bGF0ZXN0JmFwaWtleT1Zb3VyQXBpS2V5VG9rZW5gXG5cdFx0KVxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0XHQudGhlbihcblx0XHRcdFx0cmVzdWx0ID0+IHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGlzTG9hZGVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdFx0XHRiYWxhbmNlOiByZXN1bHQucmVzdWx0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gSGFuZGxlIGVycm9ycy5cblx0XHRcdFx0ZXJyb3IgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0aXNMb2FkZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0XHRcdGVycm9yXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHQvL2dldHMgYSBsaXN0IG9mIGNvdW50cnkgbWFuYWdlcnNcblx0XHRsZXQgcmVzdWx0ID0gYXdhaXQgR2V0TGlzdE9mQ291bnRyeU1hbmFnZXJzKG1haW5Db250cmFjdEFkZHJlc3MpO1xuXG5cdFx0Ly90aGUgZmlyc3QgY291bnRyeSBvaW4gdGhlIGF3YXkgaXMgTmlnZXJpYVxuXHRcdGNvbnN0IGNvdW50cnlNYW5hZ2VyTmlnZXJpYSA9IHJlc3VsdFswXTtcblx0XHQvLyAvL2dldCB0aGUgc3VtbWFyeSBvZiB0aGUgY29udHJhY3QgbWFuYWdlciBvZiBOaWdlcmlhXG5cdFx0Y29uc3QgY291bnRyeU1hbmFnZXJOaWdlcmlhU3VtbWFyeSA9IGF3YWl0IEdldENvdW50cnlNYW5hZ2VyU3VtbWFyeShcblx0XHRcdGNvdW50cnlNYW5hZ2VyTmlnZXJpYVxuXHRcdCk7XG5cdFx0Y29uc29sZS5sb2coY291bnRyeU1hbmFnZXJOaWdlcmlhU3VtbWFyeSk7XG5cblx0XHQvL2dldCBzdW1tYXJ5IG9mIGFsbCBTY2hvb2xzIHVuZGVyIHRoZSBjb250cmFjdCBtYW5hZ2VyIG9mIE5pZ2VyaWFcblx0XHRjb25zdCBTY2hvb2xTdW1tYXJ5ID0gYXdhaXQgR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeShcblx0XHRcdGNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnlcblx0XHQpO1xuXG5cdFx0Ly8gLy9nZXQgc3VtbWFyeSBvZiBhbGwgSVNQIHVuZGVyIHRoZSBjb250cmFjdCBtYW5hZ2VyIG9mIE5pZ2VyaWFcblx0XHQvLyBjb25zdCBJU1BTdW1tYXJ5ID0gYXdhaXQgR2V0U3VtbWFyeU9mQWxsSVNQc0luQ291bnRyeShcblx0XHQvLyBcdGNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnlcblx0XHQvLyk7XG5cblx0XHRsZXQgcG9wdWxhdGlvbiA9IDA7XG5cdFx0bGV0IGNvbm5lY3RlZFNjaG9vbHMgPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBTY2hvb2xTdW1tYXJ5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwb3B1bGF0aW9uICs9IHBhcnNlSW50KFNjaG9vbFN1bW1hcnlbaV1bM10pO1xuXG5cdFx0XHRpZiAoU2Nob29sU3VtbWFyeVtpXVs0XSkge1xuXHRcdFx0XHRjb25uZWN0ZWRTY2hvb2xzKys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzY2hvb2xTdW1tYXJ5OiBTY2hvb2xTdW1tYXJ5LFxuXHRcdFx0cG9wdWxhdGlvbjogcG9wdWxhdGlvbixcblx0XHRcdGNvbm5lY3RlZFNjaG9vbHM6IGNvbm5lY3RlZFNjaG9vbHMsXG5cdFx0XHRwZXJjZW50YWdlT2ZDb25uZWN0ZWRTY2hvb2w6XG5cdFx0XHRcdChjb25uZWN0ZWRTY2hvb2xzIC8gU2Nob29sU3VtbWFyeS5sZW5ndGgpICogMTAwLFxuXHRcdFx0Y3VycmVudElTUE5hbWU6IGNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnlbM10sXG5cdFx0XHRjdXJyZW50SVNQTmFtZUFkZHJlc3M6IGNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnlbNF1cblx0XHR9KTtcblx0fVxuXG5cdHNlbmREb25hdGlvblRvQ29udHJhY3QgPSBhc3luYyBlID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc29sZS5sb2coXG5cdFx0XHRhd2FpdCBTZW5kRG9uYXRpb24oY291bnRyeU1hbmFnZXJBZGRyZXNzLCB0aGlzLnN0YXRlLmRvbmF0aW9uQW1vdW50KVxuXHRcdCk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jb3VudHJ5U2VsZWN0ZWQgPyAoXG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtcIiBcIn1cblx0XHRcdFx0XHRcdDxDb250ZW50IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjVweCA1MHB4XCIgfX0+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjZmZmXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMCxcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTkwXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29sIHNwYW49ezIyfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+e3RoaXMuc3RhdGUuY291bnRyeU5hbWV9PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDb25uZWN0ZWQgU2Nob29sczpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5jb25uZWN0ZWRTY2hvb2xzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VG90YWwgTnVtYmVyIG9mIFNjaG9vbHM6e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLnNjaG9vbFN1bW1hcnkubGVuZ3RofVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFByb2dyZXNzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiY2lyY2xlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUNvbG9yPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiMCVcIjogXCIjMTA4ZWU5XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiMTAwJVwiOiBcIiM4N2QwNjhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBlcmNlbnQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnBlcmNlbnRhZ2VPZkNvbm5lY3RlZFNjaG9vbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezgwfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRUb3RhbCBTdHVkZW50IFBvcHVsYXRpb246XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUucG9wdWxhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdENvdW50cnkgQWNjb3VudCBOdW1iZXI6e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3V0ZT17YGh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vYWRkcmVzcy8ke2NvdW50cnlNYW5hZ2VyQWRkcmVzc31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPntjb3VudHJ5TWFuYWdlckFkZHJlc3N9PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEZ1bmRpbmcgTmVlZGVkIHRvIENvbm5lY3QgQWxsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2Nob29sczp7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhZyBjb2xvcj1cInJlZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LkZ1bmRpbmdOZWVkZWR0b0Nvbm5lY3RBbGxTY2hvb2xzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0V2VpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRGdW5kaW5nIFJlY2VpdmVkOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWcgY29sb3I9XCJncmVlblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuYmFsYW5jZX1XZWlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhZz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEFtb3VudCBOZWVkZWQgdG8gRnVuZCBhZGRpdGlvbmFsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2Nob29sOntcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFnIGNvbG9yPVwicmVkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuQW1vdW50TmVlZGVkdG9GdW5kYWRkaXRpb25hbFNjaG9vbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fXtcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFdlaVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEN1cnJlbnQgSVNQIDp7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdXRlPXtgaHR0cHM6Ly9yaW5rZWJ5LmV0aGVyc2Nhbi5pby9hZGRyZXNzLyR7Y291bnRyeU1hbmFnZXJBZGRyZXNzfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmN1cnJlbnRJU1BOYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbCBzcGFuPXsyfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0RW50ZXIgQW1vdW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV2VpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMTBweFwiIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZG9uYXRpb25BbW91bnR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9uYXRpb25BbW91bnQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInByaW1hcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjExMHB4XCIgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2VuZERvbmF0aW9uVG9Db250cmFjdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdERvbmF0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0XHRcdDwvUm93PntcIiBcIn1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L0NvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8Q29udGVudCBzdHlsZT17eyBwYWRkaW5nOiBcIjAgNTBweFwiIH19PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMjQsXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW5IZWlnaHQ6IDUwMFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8Um93PlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbCBzcGFuPXsxMH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxOaWdlcmlhTWFwIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbCBzcGFuPXsxNH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdEFjdGl2ZUtleT1cIjFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtjYWxsYmFja31cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJQYW5lXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWI9XCJMaXN0IE9mIFNjaG9vbHNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PVwiMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpc3RPZlNjaG9vbHMgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiTGlzdCBPZiBJU1BzXCIga2V5PVwiMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpc3RPZklTUHMgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYlBhbmUgdGFiPVwiVHJhbnNhY3Rpb25zXCIga2V5PVwiM1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpc3RPZlRyYW5zYWN0aW9ucyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFiUGFuZT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJzPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9Db250ZW50PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxDb250ZW50IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjVweCA1MHB4XCIgfX0+XG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjZmZmXCIsXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTAsXG5cdFx0XHRcdFx0XHRcdFx0bWluSGVpZ2h0OiA1MDBcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGgxPlBsZWFzZSBTZWxlY3QgYSBDb3VudHJ5PC9oMT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvQ29udGVudD5cblx0XHRcdFx0KX1cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld0Nvbm5lY3Rpdml0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlYWN0X2NvbXBvbmVudHMvVmlld0Nvbm5lY3Rpdml0eS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQVVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUlBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBYkE7QUFtRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsRUE7QUFDQTtBQUVBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBOzs7O0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFHQTtBQUNBO0FBQUE7QUFGQTs7QUFGQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBOztBQUVBO0FBRUE7QUFIQTtBQUlBO0FBR0E7O0FBVkE7QUFZQTtBQVpBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBREE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFHQTtBQUhBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBRkE7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBT0E7O0FBREE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBTkE7O0FBQUE7QUFXQTtBQVhBO0FBQ0E7O0FBVUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBRUE7O0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBREE7QUFDQTs7QUFHQTtBQUNBO0FBQUE7QUFGQTs7QUFGQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBR0E7QUFIQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUNBO0FBQUE7QUFGQTs7QUFGQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUF6UEE7QUFDQTtBQWlRQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9