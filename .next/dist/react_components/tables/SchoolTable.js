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

var _sample = require("../../pages/chart/sample");

var _sample2 = _interopRequireDefault(_sample);

var _getListOfCountryManagers = require("../../ethereum/deployedContractCalls/main/getListOfCountryManagers");

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _createNewCountryManager = require("../../ethereum/deployedContractCalls/main/createNewCountryManager");

var _createNewCountryManager2 = _interopRequireDefault(_createNewCountryManager);

var _ListofSmartContractAddresses = require("../../ethereum/ListofSmartContractAddresses");

var _getContractSummary = require("../../ethereum/deployedContractCalls/getContractSummary");

var _getSummaryOfAllSchoolsInCountry = require("../../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry");

var _getSummaryOfAllSchoolsInCountry2 = _interopRequireDefault(_getSummaryOfAllSchoolsInCountry);

var _getSummaryOfAll_ISPsInCountry = require("../../ethereum/deployedContractCalls/countryManager/getSummaryOfAll_ISPsInCountry");

var _getSummaryOfAll_ISPsInCountry2 = _interopRequireDefault(_getSummaryOfAll_ISPsInCountry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/tables/SchoolTable.js";


var SchoolTable = function (_React$Component) {
	(0, _inherits3.default)(SchoolTable, _React$Component);

	function SchoolTable() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, SchoolTable);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SchoolTable.__proto__ || (0, _getPrototypeOf2.default)(SchoolTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			data: "",
			connectivityModalVisibility: false,
			columns1: [{
				title: "School Name",
				dataIndex: "0",
				key: "0",
				render: function render(text) {
					return _react2.default.createElement("a", { href: "javascript:;", __source: {
							fileName: _jsxFileName,
							lineNumber: 26
						}
					}, text);
				}
			}, {
				title: "Population",
				dataIndex: "3",
				key: "3"
			}, {
				title: "Location",
				dataIndex: "2",
				key: "2"
			}, {
				title: "Status",
				key: "tags",
				dataIndex: "4",
				render: function render(bool) {
					if (bool === true) {
						return _react2.default.createElement(_antd.Tag, { color: "green", __source: {
								fileName: _jsxFileName,
								lineNumber: 45
							}
						}, "Connected");
					} else {
						return _react2.default.createElement(_antd.Tag, { color: "red", __source: {
								fileName: _jsxFileName,
								lineNumber: 47
							}
						}, "Not Connected");
					}
				}
			}, {
				title: "",
				key: "action",
				render: function render(text, record) {
					return _react2.default.createElement("span", {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 55
						}
					}, _react2.default.createElement("a", {
						onClick: _this.openConnectivityModal,
						href: "javascript:;",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 56
						}
					}, "Details"));
				}
			}]
		}, _this.openConnectivityModal = function (e) {
			_this.setState({
				connectivityModalVisibility: true
			});
		}, _this.connectivityModalhandleCancel = function (e) {
			_this.setState({
				connectivityModalVisibility: false
			});
		}, _this.connectivityModalhandleOk = function (e) {
			_this.setState({
				connectivityModalVisibility: false
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(SchoolTable, [{
		key: "componentDidMount",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var result, countryManagerNigeria, countryManagerNigeriaSummary, schoolSummary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;
								_context.next = 3;
								return (0, _getListOfCountryManagers2.default)(_ListofSmartContractAddresses.mainContractAddress);

							case 3:
								result = _context.sent;

								//the first country oin the away is Nigeria
								countryManagerNigeria = result[0];
								//get the summary of the contract manager of Nigeria

								_context.next = 7;
								return (0, _getContractSummary.GetCountryManagerSummary)(countryManagerNigeria);

							case 7:
								countryManagerNigeriaSummary = _context.sent;
								_context.next = 10;
								return (0, _getSummaryOfAllSchoolsInCountry2.default)(countryManagerNigeriaSummary);

							case 10:
								schoolSummary = _context.sent;

								//console.log(JSON.parse(JSON.stringify(schoolSummary)));
								this.setState({
									data: schoolSummary
								});

								// //get summary of all ISP under the contract manager of Nigeria
								// const ISPSummary = await GetSummaryOfAllISPsInCountry(
								//   countryManagerNigeriaSummary
								// );
								// console.log(ISPSummary);
								_context.next = 17;
								break;

							case 14:
								_context.prev = 14;
								_context.t0 = _context["catch"](0);

								this.setState({ errorMessage: _context.t0.message });

							case 17:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this, [[0, 14]]);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 118
				}
			}, _react2.default.createElement(_antd.Table, {
				columns: this.state.columns1,
				dataSource: this.state.data,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 119
				}
			}), _react2.default.createElement(_antd.Modal, {
				title: "ISP Perfomance Chart",
				visible: this.state.connectivityModalVisibility,
				onOk: this.connectivityModalhandleOk,
				onCancel: this.connectivityModalhandleCancel,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 123
				}
			}, "Data Consumption Blue-School, Green - ISP", _react2.default.createElement(_antd.Progress, {
				percent: 50,
				successPercent: 30,
				showInfo: false,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 130
				}
			}), "GB", _react2.default.createElement("div", { style: { marginBottom: 16 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 136
				}
			}, _react2.default.createElement(_sample2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			}), " ")));
		}
	}]);

	return SchoolTable;
}(_react2.default.Component);

exports.default = SchoolTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvdGFibGVzL1NjaG9vbFRhYmxlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJUYWciLCJNb2RhbCIsIlByb2dyZXNzIiwiSW50ZXJuZXRTcGVlZENoYXJ0IiwiR2V0TGlzdE9mQ291bnRyeU1hbmFnZXJzIiwiQ3JlYXRlTmV3Q291bnRyeU1hbmdlciIsIm1haW5Db250cmFjdEFkZHJlc3MiLCJvd25lciIsIkdldENvdW50cnlNYW5hZ2VyU3VtbWFyeSIsIkdldFNjaG9vbFN1bW1hcnkiLCJHZXRTdW1tYXJ5T2ZBbGxTY2hvb2xzSW5Db3VudHJ5IiwiR2V0U3VtbWFyeU9mQWxsSVNQc0luQ291bnRyeSIsIlNjaG9vbFRhYmxlIiwic3RhdGUiLCJkYXRhIiwiY29ubmVjdGl2aXR5TW9kYWxWaXNpYmlsaXR5IiwiY29sdW1uczEiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsInJlbmRlciIsInRleHQiLCJib29sIiwicmVjb3JkIiwib3BlbkNvbm5lY3Rpdml0eU1vZGFsIiwic2V0U3RhdGUiLCJjb25uZWN0aXZpdHlNb2RhbGhhbmRsZUNhbmNlbCIsImNvbm5lY3Rpdml0eU1vZGFsaGFuZGxlT2siLCJyZXN1bHQiLCJjb3VudHJ5TWFuYWdlck5pZ2VyaWEiLCJjb3VudHJ5TWFuYWdlck5pZ2VyaWFTdW1tYXJ5Iiwic2Nob29sU3VtbWFyeSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJtYXJnaW5Cb3R0b20iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPLEFBQUssQUFBTzs7QUFDNUIsQUFBTyxBQUF3Qjs7OztBQUMvQixBQUFPLEFBQThCOzs7O0FBQ3JDLEFBQU8sQUFBNEI7Ozs7QUFDbkMsQUFDQyxBQUNBLEFBQ007O0FBQ1AsQUFDQyxBQUNBLEFBQ007O0FBQ1AsQUFBTyxBQUFxQzs7OztBQUM1QyxBQUFPLEFBQWtDOzs7Ozs7Ozs7SSxBQUVuQzs7Ozs7Ozs7Ozs7Ozs7b05BQ0wsQTtTQUFRLEFBQ0QsQUFDTjtnQ0FGTyxBQUVzQixBQUM3Qjs7V0FDQyxBQUNRLEFBQ1A7ZUFGRCxBQUVZLEFBQ1g7U0FIRCxBQUdNLEFBQ0w7WUFBUSxzQkFBQTs0QkFBUSxjQUFBLE9BQUcsTUFBSCxBQUFRO2lCQUFSO21CQUFBLEFBQXdCO0FBQXhCO01BQUEsRUFBUixBQUFRO0FBTFIsQUFDVDtBQUFBLEFBQ0MsSUFGUTtXQVFULEFBQ1EsQUFDUDtlQUZELEFBRVksQUFDWDtTQVhRLEFBUVQsQUFHTTtBQUhOLEFBQ0M7V0FJRCxBQUNRLEFBQ1A7ZUFGRCxBQUVZLEFBQ1g7U0FoQlEsQUFhVCxBQUdNO0FBSE4sQUFDQztXQUlELEFBQ1EsQUFDUDtTQUZELEFBRU0sQUFDTDtlQUhELEFBR1ksQUFDWDtZQUFRLHNCQUFRLEFBQ2Y7U0FBSSxTQUFKLEFBQWEsTUFBTSxBQUNsQjs2QkFBTyxBQUFDLDJCQUFJLE9BQUwsQUFBVztrQkFBWDtvQkFBQTtBQUFBO09BQUEsRUFBUCxBQUFPLEFBQ1A7QUFGRCxZQUVPLEFBQ047NkJBQU8sQUFBQywyQkFBSSxPQUFMLEFBQVc7a0JBQVg7b0JBQUE7QUFBQTtPQUFBLEVBQVAsQUFBTyxBQUNQO0FBQ0Q7QUE1Qk8sQUFrQlQ7QUFBQSxBQUNDO1dBV0QsQUFDUSxBQUNQO1NBRkQsQUFFTSxBQUNMO1lBQVEsZ0JBQUEsQUFBQyxNQUFELEFBQU8sUUFBUDs0QkFDUCxjQUFBOztpQkFBQTttQkFBQSxBQUNDO0FBREQ7QUFBQSxNQUFBLGtCQUNDLGNBQUE7ZUFDVSxNQURWLEFBQ2UsQUFDZDtZQUZELEFBRU07O2lCQUZOO21CQUFBO0FBQUE7QUFDQyxRQUhLLEFBQ1AsQUFDQztBQXRDRyxBQUdHLEFBOEJULEE7QUFBQSxBQUNDO0FBbENLLEFBQ1AsV0FpREQsQSx3QkFBd0IsYUFBSyxBQUM1QjtTQUFBLEFBQUs7aUNBQUwsQUFBYyxBQUNnQixBQUU5QjtBQUhjLEFBQ2I7QSxXLEFBSUYsZ0NBQWdDLGFBQUssQUFDcEM7U0FBQSxBQUFLO2lDQUFMLEFBQWMsQUFDZ0IsQUFFOUI7QUFIYyxBQUNiO0EsVyxBQUlGLDRCQUE0QixhQUFLLEFBQ2hDO1NBQUEsQUFBSztpQ0FBTCxBQUFjLEFBQ2dCLEFBRTlCO0FBSGMsQUFDYjtBOzs7Ozs7Ozs7Ozs7OztlQU9tQixBQUF5QixBOztZQUF4QztBLDBCQUNKOztBQUNNO0EsZ0NBQXdCLE9BQU8sQSxBQUFQLEFBQzlCOzs7O2VBQzJDLGtELEFBQUEsQUFDMUM7O1lBREs7QTs7ZUFJc0IsK0MsQUFBQSxBQUMzQjs7WUFESztBLGlDQUlOOztBQUNBO2FBQUEsQUFBSztlQUFMLEFBQWMsQUFDUCxBQUdQO0FBSmMsQUFDYjs7QUFJRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozt3Q0FFQTs7YUFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBQTlCLEFBQWMsQUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFJM0IsQUFDUjswQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsQUFBQzthQUNTLEtBQUEsQUFBSyxNQURmLEFBQ3FCLEFBQ3BCO2dCQUFZLEtBQUEsQUFBSyxNQUZsQixBQUV3Qjs7ZUFGeEI7aUJBREQsQUFDQyxBQUlBO0FBSkE7QUFDQyx1QkFHRCxBQUFDO1dBQUQsQUFDTyxBQUNOO2FBQVMsS0FBQSxBQUFLLE1BRmYsQUFFcUIsQUFDcEI7VUFBTSxLQUhQLEFBR1ksQUFDWDtjQUFVLEtBSlgsQUFJZ0I7O2VBSmhCO2lCQUFBO0FBQUE7QUFDQyxNQU1BLDZEQUFBLEFBQUM7YUFBRCxBQUNVLEFBQ1Q7b0JBRkQsQUFFaUIsQUFDaEI7Y0FIRCxBQUdXOztlQUhYO2lCQVBELEFBT0M7QUFBQTtBQUNDLE9BS0Qsc0JBQUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxjQUFkLEFBQVksQUFBZ0I7ZUFBNUI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7O2VBQUQ7aUJBREQsQUFDQyxBQUF1QjtBQUF2QjtBQUFBLE9BcEJKLEFBQ0MsQUFLQyxBQWFDLEFBTUg7Ozs7O0VBN0h3QixnQkFBTSxBLEFBZ0loQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJTY2hvb2xUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==