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

var _getListOfCountryManagers = require("../../ethereum/deployedContractCalls/main/getListOfCountryManagers");

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _ListofSmartContractAddresses = require("../../ethereum/ListofSmartContractAddresses");

var _getContractSummary = require("../../ethereum/deployedContractCalls/getContractSummary");

var _EtherScanApiCalls = require("../../ethereum/etherScanApiCalls/EtherScanApiCalls");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/tables/TransactionsTable.js";


var TransactionsTable = function (_React$Component) {
	(0, _inherits3.default)(TransactionsTable, _React$Component);

	function TransactionsTable() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, TransactionsTable);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TransactionsTable.__proto__ || (0, _getPrototypeOf2.default)(TransactionsTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			data: "",
			columns: [{
				title: "Date",
				dataIndex: "timeStamp",
				key: "timeStamp",
				render: function render(text) {
					var x = new Date(text * 1000);
					if (text > 0) {
						return _react2.default.createElement("p", {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 29
							}
						}, x.getDate() + "-" + (x.getMonth() + 1) + "-" + x.getFullYear());
					}
				}
			}, {
				title: "From",
				dataIndex: "from",
				key: "from",
				render: function render(text) {
					if (text === _ListofSmartContractAddresses.countryManagerAddress) {
						return _react2.default.createElement(_antd.Tag, { color: "green", __source: {
								fileName: _jsxFileName,
								lineNumber: 47
							}
						}, "Country Managers Account");
					} else {
						return _react2.default.createElement("a", {
							href: "https://rinkeby.etherscan.io/address/" + text,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 51
							}
						}, text);
					}
				}
			}, {
				title: "To",
				dataIndex: "to",
				key: "2=to",
				render: function render(text) {
					if (text === _ListofSmartContractAddresses.countryManagerAddress) {
						return _react2.default.createElement(_antd.Tag, { color: "blue", __source: {
								fileName: _jsxFileName,
								lineNumber: 67
							}
						}, "Country Managers Account");
					} else {
						return _react2.default.createElement("a", {
							href: "https://rinkeby.etherscan.io/address/" + text,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 70
							}
						}, text);
					}
				}
			}, {
				title: "Value(wei)",
				dataIndex: "value",
				key: "value"
			}]
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(TransactionsTable, [{
		key: "componentDidMount",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var _this2 = this;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								//fetch all transacations data from etherescan
								fetch("https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=" + _ListofSmartContractAddresses.countryManagerAddress + "&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=YourApiKeyToken").then(function (res) {
									return res.json();
								}).then(function (result) {
									_this2.setState({
										isLoaded: true,
										loading: false,
										data: result.result
									});
								},

								// Handle errors.
								function (error) {
									_this2.setState({
										isLoaded: true,
										loading: false,
										error: error
									});
								});

							case 1:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Table, {
				columns: this.state.columns,
				dataSource: this.state.data,
				scroll: { x: 240 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 115
				}
			});
		}
	}]);

	return TransactionsTable;
}(_react2.default.Component);

exports.default = TransactionsTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvdGFibGVzL1RyYW5zYWN0aW9uc1RhYmxlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJUYWciLCJHZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnMiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwiY291bnRyeU1hbmFnZXJBZGRyZXNzIiwiR2V0Q291bnRyeU1hbmFnZXJTdW1tYXJ5IiwiR2V0U2Nob29sU3VtbWFyeSIsImdldEFsbFRyYW5zYWN0aW9ucyIsImdldEJhbGFuY2UiLCJUcmFuc2FjdGlvbnNUYWJsZSIsInN0YXRlIiwiZGF0YSIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsInJlbmRlciIsIngiLCJEYXRlIiwidGV4dCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInNldFN0YXRlIiwiaXNMb2FkZWQiLCJsb2FkaW5nIiwicmVzdWx0IiwiZXJyb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQThCOzs7O0FBQ3JDLEFBQ0MsQUFDQSxBQUNNOztBQUNQLEFBQ0MsQUFDQSxBQUNNOztBQUNQLEFBQ0MsQUFDQSxBQUNNOzs7Ozs7O0lBRUQsQTs7Ozs7Ozs7Ozs7Ozs7Z09BQ0wsQTtTQUFRLEFBQ0QsQUFDTjs7V0FDQyxBQUNRLEFBQ1A7ZUFGRCxBQUVZLEFBQ1g7U0FIRCxBQUdNLEFBQ0w7WUFBUSxzQkFBUSxBQUNmO1NBQUksSUFBSSxJQUFBLEFBQUksS0FBSyxPQUFqQixBQUFRLEFBQWdCLEFBQ3hCO1NBQUksT0FBSixBQUFXLEdBQUcsQUFDYjs2QkFDQyxjQUFBOztrQkFBQTtvQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLElBQ0UsQUFBRSxZQUFGLEFBQ0EsT0FDQyxFQUFBLEFBQUUsYUFGSCxBQUVnQixLQUZoQixBQUdBLE1BQ0EsRUFOSCxBQUNDLEFBS0UsQUFBRSxBQUdMO0FBQ0Q7QUFsQk0sQUFDUjtBQUFBLEFBQ0MsSUFGTztXQW9CUixBQUNRLEFBQ1A7ZUFGRCxBQUVZLEFBQ1g7U0FIRCxBQUdNLEFBQ0w7WUFBUSxzQkFBUSxBQUNmO1NBQUEsQUFBSSxBQUFTLDhEQUF1QixBQUNuQzs2QkFDQyxBQUFDLDJCQUFJLE9BQUwsQUFBVztrQkFBWDtvQkFBQTtBQUFBO09BQUEsRUFERCxBQUNDLEFBRUQ7QUFKRCxZQUlPLEFBQ047NkJBQ0MsY0FBQTt1REFBQSxBQUMrQzs7a0JBRC9DO29CQUFBLEFBR0U7QUFIRjtBQUNDLE9BREQsRUFERCxBQUNDLEFBTUQ7QUFDRDtBQXRDTSxBQW9CUjtBQUFBLEFBQ0M7V0FvQkQsQUFDUSxBQUNQO2VBRkQsQUFFWSxBQUNYO1NBSEQsQUFHTSxBQUNMO1lBQVEsc0JBQVEsQUFDZjtTQUFBLEFBQUksQUFBUyw4REFBdUIsQUFDbkM7NkJBQU8sQUFBQywyQkFBSSxPQUFMLEFBQVc7a0JBQVg7b0JBQUE7QUFBQTtPQUFBLEVBQVAsQUFBTyxBQUNQO0FBRkQsWUFFTyxBQUNOOzZCQUNDLGNBQUE7dURBQUEsQUFDK0M7O2tCQUQvQztvQkFBQSxBQUdFO0FBSEY7QUFDQyxPQURELEVBREQsQUFDQyxBQU1EO0FBQ0Q7QUF6RE0sQUF5Q1I7QUFBQSxBQUNDO1dBaUJELEFBQ1EsQUFDUDtlQUZELEFBRVksQUFDWDtTQWhFSyxBQUVFLEFBMkRSLEFBR00sQTtBQUhOLEFBQ0M7QUE5REssQUFDUDs7Ozs7Ozs7Ozs7O1lBcUVBO0FBQ0E7Y0FBQSxBQUM4RSx5TkFEOUUsQUFHRSxLQUFLLGVBQUE7Z0JBQU8sSUFBUCxBQUFPLEFBQUk7QUFIbEIsV0FBQSxBQUlFLEtBQ0Esa0JBQVUsQUFDVDtnQkFBQSxBQUFLO29CQUFTLEFBQ0gsQUFDVjttQkFGYSxBQUVKLEFBQ1Q7Z0JBQU0sT0FIUCxBQUFjLEFBR0EsQUFFZDtBQUxjLEFBQ2I7QUFQSixBQWFFOztBQUNBO3lCQUFTLEFBQ1I7Z0JBQUEsQUFBSztvQkFBUyxBQUNILEFBQ1Y7bUJBRmEsQUFFSixBQUNUO2lCQUhELEFBQWMsQUFLZDtBQUxjLEFBQ2I7QUFoQko7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkF3QlEsQUFDUjswQkFDQyxBQUFDO2FBQ1MsS0FBQSxBQUFLLE1BRGYsQUFDcUIsQUFDcEI7Z0JBQVksS0FBQSxBQUFLLE1BRmxCLEFBRXdCLEFBQ3ZCO1lBQVEsRUFBRSxHQUhYLEFBR1MsQUFBSzs7ZUFIZDtpQkFERCxBQUNDLEFBTUQ7QUFOQztBQUNDLElBREQ7Ozs7O0VBbEc2QixnQkFBTSxBLEFBMkd0Qzs7a0JBQUEsQUFBZSIsImZpbGUiOiJUcmFuc2FjdGlvbnNUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==