webpackHotUpdate(5,{

/***/ 1634:
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

var _antd = __webpack_require__(419);

var _SchoolTable = __webpack_require__(578);

var _SchoolTable2 = _interopRequireDefault(_SchoolTable);

var _ISPTable = __webpack_require__(1635);

var _ISPTable2 = _interopRequireDefault(_ISPTable);

var _NigeriaMap = __webpack_require__(1637);

var _NigeriaMap2 = _interopRequireDefault(_NigeriaMap);

var _TransactionsTable = __webpack_require__(1638);

var _TransactionsTable2 = _interopRequireDefault(_TransactionsTable);

var _sendDonation = __webpack_require__(1641);

var _sendDonation2 = _interopRequireDefault(_sendDonation);

var _ListofSmartContractAddresses = __webpack_require__(450);

var _routes = __webpack_require__(505);

var _getListOfCountryManagers = __webpack_require__(456);

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _getSummaryOfAllSchoolsInCountry = __webpack_require__(477);

var _getSummaryOfAllSchoolsInCountry2 = _interopRequireDefault(_getSummaryOfAllSchoolsInCountry);

var _getContractSummary = __webpack_require__(440);

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
					lineNumber: 131
				}
			}, _react2.default.createElement("div", {
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
			}), "Total Number of Schools:", " ", this.state.TotalNumberofSchools, _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 151
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
					lineNumber: 178
				}
			}, this.state.FundingNeededtoConnectAllSchools, " ", "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 185
				}
			}), "Funding Received:", _react2.default.createElement(_antd.Tag, { color: "green", __source: {
					fileName: _jsxFileName,
					lineNumber: 187
				}
			}, this.state.balance, "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
					fileName: _jsxFileName,
					lineNumber: 190
				}
			}), "Amount Needed to Fund additional School:", " ", _react2.default.createElement(_antd.Tag, { color: "red", __source: {
					fileName: _jsxFileName,
					lineNumber: 192
				}
			}, this.state.AmountNeededtoFundadditionalSchool, " ", "Wei"), "Current ISP :", " ", _react2.default.createElement(_routes.Link, {
				route: "https://rinkeby.etherscan.io/address/" + _ListofSmartContractAddresses.countryManagerAddress,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 200
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 203
				}
			}, this.state.currentISPName)))), _react2.default.createElement(_antd.Col, { span: 2, __source: {
					fileName: _jsxFileName,
					lineNumber: 208
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
					lineNumber: 210
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 221
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 222
				}
			}), _react2.default.createElement(_antd.Button, {
				type: "primary",
				style: { width: "110px" },
				onClick: this.sendDonationToContract,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 223
				}
			}, "Donate"))), " ")), _react2.default.createElement(Content, { style: { padding: "0 50px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 234
				}
			}, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 24,
					minHeight: 500
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 235
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 242
				}
			}, _react2.default.createElement(_antd.Col, { span: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 243
				}
			}, _react2.default.createElement(_NigeriaMap2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 244
				}
			})), _react2.default.createElement(_antd.Col, { span: 14, __source: {
					fileName: _jsxFileName,
					lineNumber: 247
				}
			}, _react2.default.createElement(_antd.Tabs, {
				defaultActiveKey: "1",
				onChange: callback,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 248
				}
			}, _react2.default.createElement(TabPane, { tab: "List Of Schools", key: "1", __source: {
					fileName: _jsxFileName,
					lineNumber: 252
				}
			}, _react2.default.createElement(_SchoolTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 253
				}
			})), _react2.default.createElement(TabPane, { tab: "List Of ISPs", key: "2", __source: {
					fileName: _jsxFileName,
					lineNumber: 255
				}
			}, _react2.default.createElement(_ISPTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 256
				}
			})), _react2.default.createElement(TabPane, { tab: "Transactions", key: "3", __source: {
					fileName: _jsxFileName,
					lineNumber: 258
				}
			}, _react2.default.createElement(_TransactionsTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 259
				}
			})))))))));
		}
	}]);

	return ViewConnectivity;
}(_react2.default.Component);

exports.default = ViewConnectivity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvVmlld0Nvbm5lY3Rpdml0eS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIlRhYnMiLCJEaXZpZGVyIiwiQnJlYWRjcnVtYiIsIlByb2dyZXNzIiwiSW5wdXQiLCJUYWciLCJMaXN0T2ZTY2hvb2xzIiwiTGlzdE9mSVNQcyIsIk5pZ2VyaWFNYXAiLCJMaXN0T2ZUcmFuc2FjdGlvbnMiLCJTZW5kRG9uYXRpb24iLCJjb3VudHJ5TWFuYWdlckFkZHJlc3MiLCJMaW5rIiwiUm91dGVyIiwiR2V0TGlzdE9mQ291bnRyeU1hbmFnZXJzIiwiR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeSIsIkdldENvdW50cnlNYW5hZ2VyU3VtbWFyeSIsIkdldFNjaG9vbFN1bW1hcnkiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlRhYlBhbmUiLCJjYWxsYmFjayIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJWaWV3Q29ubmVjdGl2aXR5Iiwic3RhdGUiLCJUb3RhbE51bWJlcm9mU2Nob29scyIsIkZ1bmRpbmdOZWVkZWR0b0Nvbm5lY3RBbGxTY2hvb2xzIiwiRnVuZGluZ1JlY2VpdmVkIiwiQW1vdW50TmVlZGVkdG9GdW5kYWRkaXRpb25hbFNjaG9vbCIsInBlcmNlbnRhZ2VPZkNvbm5lY3RlZFNjaG9vbCIsImxvZ2luTW9kYWxWaXNpYmlsaXR5IiwiYXBwbHlNb2RhbFZpc2liaWxpdHkiLCJjb3VudHJ5U2VsZWN0ZWQiLCJiYWxhbmNlIiwiZG9uYXRpb25BbW91bnQiLCJwb3B1bGF0aW9uIiwiY291bnRyeU5hbWUiLCJjdXJyZW50SVNQTmFtZSIsImN1cnJlbnRJU1BOYW1lQWRkcmVzcyIsInNlbmREb25hdGlvblRvQ29udHJhY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJpc0xvYWRlZCIsImxvYWRpbmciLCJyZXN1bHQiLCJlcnJvciIsImNvdW50cnlNYW5hZ2VyTmlnZXJpYSIsImNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnkiLCJTY2hvb2xTdW1tYXJ5IiwiY29ubmVjdGVkU2Nob29scyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsInNjaG9vbFN1bW1hcnkiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIk1hdGgiLCJyb3VuZCIsIndpZHRoIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pbkhlaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUNDLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVELEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBd0I7Ozs7QUFDL0IsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFTLEFBQTZCOztBQUN0QyxBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUE4Qjs7OztBQUNyQyxBQUFPLEFBQXFDOzs7O0FBQzVDLEFBQ0MsQUFDQSxBQUNNLEFBQ1AsQUFBUyxBQUEyQjs7Ozs7OztBQUVwQztJQUNRLEEsU0FBNEIsQSxhQUE1QixBO0ksQUFBUSxVQUFvQixBLGFBQXBCLEE7SSxBQUFTLFMsQUFBVyxhQUFYLEE7SSxBQUNqQixVQUFZLEEsVyxBQUFaOztBQUVSLFNBQUEsQUFBUyxTQUFULEFBQWtCLEtBQUssQUFDdEI7U0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaOzs7SUFDSyxBOzs7Ozs7Ozs7Ozs7Ozs7OE5BQ0wsQTt5QkFBUSxBQUNlLEFBQ3RCO3FDQUZPLEFBRTJCLEFBQ2xDO29CQUhPLEFBR1UsQUFDakI7dUNBSk8sQUFJNkIsQUFDcEM7Z0NBTE8sQUFLc0IsQUFDN0I7eUJBTk8sQUFNZSxBQUN0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QUksTUFBTCxBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7O2VBQUQ7aUJBRkYsQUFDQyxBQUNDLEFBR0Q7QUFIQztBQUFBLHdCQUdELEFBQUMsMkJBQUksTUFBTCxBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7c0JBQUQsQUFDa0IsQUFDakI7Y0FGRCxBQUVXOztlQUZYO2lCQUFBLEFBSUM7QUFKRDtBQUNDLHNCQUdDLGNBQUQsV0FBUyxLQUFULEFBQWEsbUJBQWtCLEtBQS9CLEFBQW1DO2VBQW5DO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDOztlQUFEO2lCQUxGLEFBSUMsQUFDQyxBQUVEO0FBRkM7QUFBQSx3QkFFQSxjQUFELFdBQVMsS0FBVCxBQUFhLGdCQUFlLEtBQTVCLEFBQWdDO2VBQWhDO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDOztlQUFEO2lCQVJGLEFBT0MsQUFDQyxBQUVEO0FBRkM7QUFBQSx3QkFFQSxjQUFELFdBQVMsS0FBVCxBQUFhLGdCQUFlLEtBQTVCLEFBQWdDO2VBQWhDO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDOztlQUFEO2lCQWpJVCxBQUNDLEFBQ0MsQUFzR0MsQUFDQyxBQU9DLEFBS0MsQUFDQyxBQVVDLEFBQ0MsQUFVVDtBQVZTO0FBQUE7Ozs7O0VBL05vQixnQkFBTSxBLEFBNE9yQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJWaWV3Q29ubmVjdGl2aXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/ViewConnectivity.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/ViewConnectivity.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42MzFiZGYzOWIzMWRlMWFmZGM2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVhY3RfY29tcG9uZW50cy9WaWV3Q29ubmVjdGl2aXR5LmpzPzAzYmM1YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0TGF5b3V0LFxuXHRSb3csXG5cdENvbCxcblx0QnV0dG9uLFxuXHRUYWJzLFxuXHREaXZpZGVyLFxuXHRCcmVhZGNydW1iLFxuXHRQcm9ncmVzcyxcblx0SW5wdXQsXG5cdFRhZ1xufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpc3RPZlNjaG9vbHMgZnJvbSBcIi4vdGFibGVzL1NjaG9vbFRhYmxlXCI7XG5pbXBvcnQgTGlzdE9mSVNQcyBmcm9tIFwiLi90YWJsZXMvSVNQVGFibGVcIjtcbmltcG9ydCBOaWdlcmlhTWFwIGZyb20gXCIuL2ltZy9OaWdlcmlhTWFwXCI7XG5pbXBvcnQgTGlzdE9mVHJhbnNhY3Rpb25zIGZyb20gXCIuL3RhYmxlcy9UcmFuc2FjdGlvbnNUYWJsZVwiO1xuaW1wb3J0IFNlbmREb25hdGlvbiBmcm9tIFwiLi4vZXRoZXJldW0vZGVwbG95ZWRDb250cmFjdENhbGxzL2NvdW50cnlNYW5hZ2VyL3NlbmREb25hdGlvblwiO1xuaW1wb3J0IHsgY291bnRyeU1hbmFnZXJBZGRyZXNzIH0gZnJvbSBcIi4uL2V0aGVyZXVtL0xpc3RvZlNtYXJ0Q29udHJhY3RBZGRyZXNzZXNcIjtcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcbmltcG9ydCBHZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnMgZnJvbSBcIi4uL2V0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9tYWluL2dldExpc3RPZkNvdW50cnlNYW5hZ2Vyc1wiO1xuaW1wb3J0IEdldFN1bW1hcnlPZkFsbFNjaG9vbHNJbkNvdW50cnkgZnJvbSBcIi4uL2V0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9jb3VudHJ5TWFuYWdlci9nZXRTdW1tYXJ5T2ZBbGxTY2hvb2xzSW5Db3VudHJ5XCI7XG5pbXBvcnQge1xuXHRHZXRDb3VudHJ5TWFuYWdlclN1bW1hcnksXG5cdEdldFNjaG9vbFN1bW1hcnlcbn0gZnJvbSBcIi4uL2V0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9nZXRDb250cmFjdFN1bW1hcnlcIjtcbmltcG9ydCB7IG1haW5Db250cmFjdEFkZHJlc3MgfSBmcm9tIFwiLi4vZXRoZXJldW0vTGlzdG9mU21hcnRDb250cmFjdEFkZHJlc3Nlc1wiO1xuXG4vL2RlZmluZSBleHRyYWN0IGNoaWxkIHByb3BlcnRpZXNcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcbmNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcblxuZnVuY3Rpb24gY2FsbGJhY2soa2V5KSB7XG5cdGNvbnNvbGUubG9nKGtleSk7XG59XG5jbGFzcyBWaWV3Q29ubmVjdGl2aXR5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0VG90YWxOdW1iZXJvZlNjaG9vbHM6IFwiMFwiLFxuXHRcdEZ1bmRpbmdOZWVkZWR0b0Nvbm5lY3RBbGxTY2hvb2xzOiBcIiBYIFwiLFxuXHRcdEZ1bmRpbmdSZWNlaXZlZDogXCIwXCIsXG5cdFx0QW1vdW50TmVlZGVkdG9GdW5kYWRkaXRpb25hbFNjaG9vbDogXCJYIFwiLFxuXHRcdHBlcmNlbnRhZ2VPZkNvbm5lY3RlZFNjaG9vbDogXCI1MFwiLFxuXHRcdGxvZ2luTW9kYWxWaXNpYmlsaXR5OiBmYWxzZSxcblx0XHRhcHBseU1vZGFsVmlzaWJpbGl0eTogZmFsc2UsXG5cdFx0Y291bnRyeVNlbGVjdGVkOiBmYWxzZSxcblx0XHRiYWxhbmNlOiBcIlwiLFxuXHRcdGRvbmF0aW9uQW1vdW50OiBcIlwiLFxuXHRcdHBvcHVsYXRpb246IFwiXCIsXG5cdFx0Y291bnRyeU5hbWU6IFwiTmlnZXJpYVwiLFxuXHRcdGN1cnJlbnRJU1BOYW1lOiBcIlBlbmRpbmcuLlwiLFxuXHRcdGN1cnJlbnRJU1BOYW1lQWRkcmVzczogXCJQZW5kaW5nLi5cIlxuXHR9O1xuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGZldGNoKFxuXHRcdFx0YGh0dHBzOi8vYXBpLXJpbmtlYnkuZXRoZXJzY2FuLmlvL2FwaT9tb2R1bGU9YWNjb3VudCZhY3Rpb249YmFsYW5jZSZhZGRyZXNzPSR7Y291bnRyeU1hbmFnZXJBZGRyZXNzfSZ0YWc9bGF0ZXN0JmFwaWtleT1Zb3VyQXBpS2V5VG9rZW5gXG5cdFx0KVxuXHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0XHQudGhlbihcblx0XHRcdFx0cmVzdWx0ID0+IHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGlzTG9hZGVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdFx0XHRiYWxhbmNlOiByZXN1bHQucmVzdWx0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gSGFuZGxlIGVycm9ycy5cblx0XHRcdFx0ZXJyb3IgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0aXNMb2FkZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0XHRcdGVycm9yXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHQvL2dldHMgYSBsaXN0IG9mIGNvdW50cnkgbWFuYWdlcnNcblx0XHRsZXQgcmVzdWx0ID0gYXdhaXQgR2V0TGlzdE9mQ291bnRyeU1hbmFnZXJzKG1haW5Db250cmFjdEFkZHJlc3MpO1xuXG5cdFx0Ly90aGUgZmlyc3QgY291bnRyeSBvaW4gdGhlIGF3YXkgaXMgTmlnZXJpYVxuXHRcdGNvbnN0IGNvdW50cnlNYW5hZ2VyTmlnZXJpYSA9IHJlc3VsdFswXTtcblx0XHQvLyAvL2dldCB0aGUgc3VtbWFyeSBvZiB0aGUgY29udHJhY3QgbWFuYWdlciBvZiBOaWdlcmlhXG5cdFx0Y29uc3QgY291bnRyeU1hbmFnZXJOaWdlcmlhU3VtbWFyeSA9IGF3YWl0IEdldENvdW50cnlNYW5hZ2VyU3VtbWFyeShcblx0XHRcdGNvdW50cnlNYW5hZ2VyTmlnZXJpYVxuXHRcdCk7XG5cdFx0Y29uc29sZS5sb2coY291bnRyeU1hbmFnZXJOaWdlcmlhU3VtbWFyeSk7XG5cblx0XHQvL2dldCBzdW1tYXJ5IG9mIGFsbCBTY2hvb2xzIHVuZGVyIHRoZSBjb250cmFjdCBtYW5hZ2VyIG9mIE5pZ2VyaWFcblx0XHRjb25zdCBTY2hvb2xTdW1tYXJ5ID0gYXdhaXQgR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeShcblx0XHRcdGNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnlcblx0XHQpO1xuXG5cdFx0Ly8gLy9nZXQgc3VtbWFyeSBvZiBhbGwgSVNQIHVuZGVyIHRoZSBjb250cmFjdCBtYW5hZ2VyIG9mIE5pZ2VyaWFcblx0XHQvLyBjb25zdCBJU1BTdW1tYXJ5ID0gYXdhaXQgR2V0U3VtbWFyeU9mQWxsSVNQc0luQ291bnRyeShcblx0XHQvLyBcdGNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnlcblx0XHQvLyk7XG5cblx0XHRsZXQgcG9wdWxhdGlvbiA9IDA7XG5cdFx0bGV0IGNvbm5lY3RlZFNjaG9vbHMgPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBTY2hvb2xTdW1tYXJ5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwb3B1bGF0aW9uICs9IHBhcnNlSW50KFNjaG9vbFN1bW1hcnlbaV1bM10pO1xuXG5cdFx0XHRpZiAoU2Nob29sU3VtbWFyeVtpXVs0XSkge1xuXHRcdFx0XHRjb25uZWN0ZWRTY2hvb2xzKys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzY2hvb2xTdW1tYXJ5OiBTY2hvb2xTdW1tYXJ5LFxuXHRcdFx0cG9wdWxhdGlvbjogcG9wdWxhdGlvbixcblx0XHRcdGNvbm5lY3RlZFNjaG9vbHM6IGNvbm5lY3RlZFNjaG9vbHMsXG5cdFx0XHRwZXJjZW50YWdlT2ZDb25uZWN0ZWRTY2hvb2w6XG5cdFx0XHRcdChjb25uZWN0ZWRTY2hvb2xzIC8gU2Nob29sU3VtbWFyeS5sZW5ndGgpICogMTAwLFxuXHRcdFx0Y3VycmVudElTUE5hbWU6IGNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnlbM10sXG5cdFx0XHRjdXJyZW50SVNQTmFtZUFkZHJlc3M6IGNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnlbNF0sXG5cdFx0XHRUb3RhbE51bWJlcm9mU2Nob29sczogU2Nob29sU3VtbWFyeS5sZW5ndGhcblx0XHR9KTtcblx0fVxuXG5cdHNlbmREb25hdGlvblRvQ29udHJhY3QgPSBhc3luYyBlID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc29sZS5sb2coXG5cdFx0XHRhd2FpdCBTZW5kRG9uYXRpb24oY291bnRyeU1hbmFnZXJBZGRyZXNzLCB0aGlzLnN0YXRlLmRvbmF0aW9uQW1vdW50KVxuXHRcdCk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdHtcIiBcIn1cblx0XHRcdFx0XHQ8Q29udGVudCBzdHlsZT17eyBwYWRkaW5nOiBcIjI1cHggNTBweFwiIH19PlxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTkwXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHRcdFx0PENvbCBzcGFuPXsyMn0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+e3RoaXMuc3RhdGUuY291bnRyeU5hbWV9PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Q29ubmVjdGVkIFNjaG9vbHM6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmNvbm5lY3RlZFNjaG9vbHN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFRvdGFsIE51bWJlciBvZiBTY2hvb2xzOntcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuVG90YWxOdW1iZXJvZlNjaG9vbHN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxQcm9ncmVzc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJjaXJjbGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUNvbG9yPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIjAlXCI6IFwiIzEwOGVlOVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCIxMDAlXCI6IFwiIzg3ZDA2OFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwZXJjZW50PXtNYXRoLnJvdW5kKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucGVyY2VudGFnZU9mQ29ubmVjdGVkU2Nob29sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17ODB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFRvdGFsIFN0dWRlbnQgUG9wdWxhdGlvbjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUucG9wdWxhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Q291bnRyeSBBY2NvdW50IE51bWJlcjp7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm91dGU9e2BodHRwczovL3JpbmtlYnkuZXRoZXJzY2FuLmlvL2FkZHJlc3MvJHtjb3VudHJ5TWFuYWdlckFkZHJlc3N9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPntjb3VudHJ5TWFuYWdlckFkZHJlc3N9PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0RnVuZGluZyBOZWVkZWQgdG8gQ29ubmVjdCBBbGwgU2Nob29sczp7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWcgY29sb3I9XCJyZWRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5GdW5kaW5nTmVlZGVkdG9Db25uZWN0QWxsU2Nob29sc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH17XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0V2VpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRGdW5kaW5nIFJlY2VpdmVkOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFnIGNvbG9yPVwiZ3JlZW5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5iYWxhbmNlfVdlaVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhZz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0QW1vdW50IE5lZWRlZCB0byBGdW5kIGFkZGl0aW9uYWwgU2Nob29sOntcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhZyBjb2xvcj1cInJlZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LkFtb3VudE5lZWRlZHRvRnVuZGFkZGl0aW9uYWxTY2hvb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFdlaVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhZz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Q3VycmVudCBJU1AgOntcIiBcIn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3V0ZT17YGh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vYWRkcmVzcy8ke2NvdW50cnlNYW5hZ2VyQWRkcmVzc31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+e3RoaXMuc3RhdGUuY3VycmVudElTUE5hbWV9PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cblxuXHRcdFx0XHRcdFx0XHRcdDxDb2wgc3Bhbj17Mn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRFbnRlciBBbW91bnRcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldlaVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjExMHB4XCIgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZG9uYXRpb25BbW91bnR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9uYXRpb25BbW91bnQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjExMHB4XCIgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5zZW5kRG9uYXRpb25Ub0NvbnRyYWN0fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHREb25hdGVcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0XHQ8L1Jvdz57XCIgXCJ9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0NvbnRlbnQ+XG5cdFx0XHRcdFx0PENvbnRlbnQgc3R5bGU9e3sgcGFkZGluZzogXCIwIDUwcHhcIiB9fT5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNmZmZcIixcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAyNCxcblx0XHRcdFx0XHRcdFx0XHRtaW5IZWlnaHQ6IDUwMFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8Um93PlxuXHRcdFx0XHRcdFx0XHRcdDxDb2wgc3Bhbj17MTB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PE5pZ2VyaWFNYXAgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cblxuXHRcdFx0XHRcdFx0XHRcdDxDb2wgc3Bhbj17MTR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdEFjdGl2ZUtleT1cIjFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17Y2FsbGJhY2t9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJQYW5lIHRhYj1cIkxpc3QgT2YgU2Nob29sc1wiIGtleT1cIjFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdE9mU2Nob29scyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJQYW5lIHRhYj1cIkxpc3QgT2YgSVNQc1wiIGtleT1cIjJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdE9mSVNQcyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJQYW5lIHRhYj1cIlRyYW5zYWN0aW9uc1wiIGtleT1cIjNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdE9mVHJhbnNhY3Rpb25zIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFiUGFuZT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvVGFicz5cblx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0NvbnRlbnQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3Q29ubmVjdGl2aXR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVhY3RfY29tcG9uZW50cy9WaWV3Q29ubmVjdGl2aXR5LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7OztBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFiQTtBQW9GQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW5FQTtBQUNBO0FBRUE7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBOzs7OztBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7Ozs7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFDQTs7O0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBRkE7O0FBRkE7QUFPQTtBQVBBO0FBQ0E7O0FBTUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTs7QUFFQTtBQUVBO0FBSEE7QUFHQTtBQUlBOztBQVZBO0FBWUE7QUFaQTtBQUNBO0FBV0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUVBO0FBR0E7QUFIQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUZBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQU9BOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU5BOztBQUFBO0FBV0E7QUFYQTtBQUNBOztBQVVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUNBOztBQUhBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQURBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBRkE7O0FBRkE7QUFPQTtBQVBBO0FBQ0E7O0FBTUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUdBO0FBSEE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQVVBO0FBVkE7QUFBQTs7Ozs7QUEvTkE7QUFDQTtBQTJPQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9