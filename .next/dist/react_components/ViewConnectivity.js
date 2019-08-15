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

			return _react2.default.createElement(_antd.Layout, null, _react2.default.createElement("div", null, " ", _react2.default.createElement(Content, { style: { padding: "25px 50px" } }, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 10,
					height: 190
				}
			}, _react2.default.createElement(_antd.Row, null, _react2.default.createElement(_antd.Col, { span: 22 }, _react2.default.createElement("div", null, _react2.default.createElement("h2", null, this.state.countryName), "Connected Schools:", this.state.connectedSchools, _react2.default.createElement(_antd.Divider, { type: "vertical" }), "Total Number of Schools:", " ", this.state.TotalNumberofSchools, _react2.default.createElement(_antd.Divider, { type: "vertical" }), _react2.default.createElement(_antd.Progress, {
				type: "circle",
				strokeColor: {
					"0%": "#108ee9",
					"100%": "#87d068"
				},
				percent: Math.round(this.state.percentageOfConnectedSchool),
				width: 80
			}), _react2.default.createElement(_antd.Divider, { type: "vertical" }), "Total Student Population:", this.state.population, _react2.default.createElement(_antd.Divider, { type: "vertical" }), "Country ETH Address:", " ", _react2.default.createElement(_routes.Link, {
				route: "https://rinkeby.etherscan.io/address/" + _ListofSmartContractAddresses.countryManagerAddress
			}, _react2.default.createElement("a", null, _ListofSmartContractAddresses.countryManagerAddress))), _react2.default.createElement("br", null), _react2.default.createElement("div", null, "Funding Needed to Connect All Schools:", " ", _react2.default.createElement(_antd.Tag, { color: "grey" }, this.state.FundingNeededtoConnectAllSchools, " ", "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical" }), "Funding Received:", _react2.default.createElement(_antd.Tag, { color: "green" }, this.state.balance, "Wei"), _react2.default.createElement(_antd.Divider, { type: "vertical" }), "Amount Needed to Fund additional School:", " ", _react2.default.createElement(_antd.Tag, { color: "grey" }, this.state.AmountNeededtoFundadditionalSchool, " ", "Wei"), "Current Internet Provider:", " ", _react2.default.createElement(_routes.Link, {
				route: "https://rinkeby.etherscan.io/address/" + this.state.currentISPNameAddress
			}, _react2.default.createElement("a", null, this.state.currentISPName)))), _react2.default.createElement(_antd.Col, { span: 2 }, "Enter Amount", _react2.default.createElement(_antd.Input, {
				placeholder: "Wei",
				style: { width: "110px" },
				value: this.state.donationAmount,
				onChange: function onChange(event) {
					return _this4.setState({
						donationAmount: event.target.value
					});
				}
			}), _react2.default.createElement("br", null), _react2.default.createElement("br", null), _react2.default.createElement(_antd.Button, {
				type: "primary",
				style: { width: "110px" },
				onClick: this.sendDonationToContract,
				loading: this.state.donationButtonLoading
			}, "Donate"))), " ")), _react2.default.createElement(Content, { style: { padding: "0 50px" } }, _react2.default.createElement("div", {
				style: {
					background: "#fff",
					padding: 24,
					minHeight: 500
				}
			}, _react2.default.createElement(_antd.Row, null, _react2.default.createElement(_antd.Col, { span: 10 }, _react2.default.createElement(_NigeriaMap2.default, null)), _react2.default.createElement(_antd.Col, { span: 14 }, _react2.default.createElement(_antd.Tabs, {
				defaultActiveKey: "1",
				onChange: callback
			}, _react2.default.createElement(TabPane, { tab: "List Of Schools", key: "1" }, _react2.default.createElement(_SchoolTable2.default, null)), _react2.default.createElement(TabPane, { tab: "List Of ISPs", key: "2" }, _react2.default.createElement(_ISPTable2.default, null)), _react2.default.createElement(TabPane, { tab: "Transactions", key: "3" }, _react2.default.createElement(_TransactionsTable2.default, null)))))))));
		}
	}]);

	return ViewConnectivity;
}(_react2.default.Component);

exports.default = ViewConnectivity;