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
					if (text.toUpperCase() === _ListofSmartContractAddresses.countryManagerAddress.toUpperCase()) {
						return _react2.default.createElement(_antd.Tag, { color: "green", __source: {
								fileName: _jsxFileName,
								lineNumber: 50
							}
						}, "Country Managers Account");
					} else {
						return _react2.default.createElement("a", {
							href: "https://rinkeby.etherscan.io/address/" + text,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 54
							}
						}, text);
					}
				}
			}, {
				title: "To",
				dataIndex: "to",
				key: "2=to",
				render: function render(text) {
					if (text.toUpperCase() === _ListofSmartContractAddresses.countryManagerAddress.toUpperCase()) {
						return _react2.default.createElement(_antd.Tag, { color: "blue", __source: {
								fileName: _jsxFileName,
								lineNumber: 73
							}
						}, "Country Managers Account");
					} else {
						return _react2.default.createElement("a", {
							href: "https://rinkeby.etherscan.io/address/" + text,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 76
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
					lineNumber: 121
				}
			});
		}
	}]);

	return TransactionsTable;
}(_react2.default.Component);

exports.default = TransactionsTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvdGFibGVzL1RyYW5zYWN0aW9uc1RhYmxlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJUYWciLCJHZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnMiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwiY291bnRyeU1hbmFnZXJBZGRyZXNzIiwiR2V0Q291bnRyeU1hbmFnZXJTdW1tYXJ5IiwiR2V0U2Nob29sU3VtbWFyeSIsImdldEFsbFRyYW5zYWN0aW9ucyIsImdldEJhbGFuY2UiLCJUcmFuc2FjdGlvbnNUYWJsZSIsInN0YXRlIiwiZGF0YSIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsInJlbmRlciIsIngiLCJEYXRlIiwidGV4dCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwidG9VcHBlckNhc2UiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJpc0xvYWRlZCIsImxvYWRpbmciLCJyZXN1bHQiLCJlcnJvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU87O0FBQ2hCLEFBQU8sQUFBOEI7Ozs7QUFDckMsQUFDQyxBQUNBLEFBQ007O0FBQ1AsQUFDQyxBQUNBLEFBQ007O0FBQ1AsQUFDQyxBQUNBLEFBQ007Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7Ozs7OztnTyxBQUNMO1NBQVEsQUFDRCxBQUNOOztXQUNDLEFBQ1EsQUFDUDtlQUZELEFBRVksQUFDWDtTQUhELEFBR00sQUFDTDtZQUFRLHNCQUFRLEFBQ2Y7U0FBSSxJQUFJLElBQUEsQUFBSSxLQUFLLE9BQWpCLEFBQVEsQUFBZ0IsQUFDeEI7U0FBSSxPQUFKLEFBQVcsR0FBRyxBQUNiOzZCQUNDLGNBQUE7O2tCQUFBO29CQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsSUFDRSxBQUFFLFlBQUYsQUFDQSxPQUNDLEVBQUEsQUFBRSxhQUZILEFBRWdCLEtBRmhCLEFBR0EsTUFDQSxFQU5ILEFBQ0MsQUFLRSxBQUFFLEFBR0w7QUFDRDtBQWxCTSxBQUNSO0FBQUEsQUFDQyxJQUZPO1dBb0JSLEFBQ1EsQUFDUDtlQUZELEFBRVksQUFDWDtTQUhELEFBR00sQUFDTDtZQUFRLHNCQUFRLEFBQ2Y7U0FDQyxLQUFBLEFBQUssa0JBQ0wsb0RBRkQsQUFFQyxBQUFzQixlQUNyQixBQUNEOzZCQUNDLEFBQUMsMkJBQUksT0FBTCxBQUFXO2tCQUFYO29CQUFBO0FBQUE7T0FBQSxFQURELEFBQ0MsQUFFRDtBQVBELFlBT08sQUFDTjs2QkFDQyxjQUFBO3VEQUFBLEFBQytDOztrQkFEL0M7b0JBQUEsQUFHRTtBQUhGO0FBQ0MsT0FERCxFQURELEFBQ0MsQUFNRDtBQUNEO0FBekNNLEFBb0JSO0FBQUEsQUFDQztXQXVCRCxBQUNRLEFBQ1A7ZUFGRCxBQUVZLEFBQ1g7U0FIRCxBQUdNLEFBQ0w7WUFBUSxzQkFBUSxBQUNmO1NBQ0MsS0FBQSxBQUFLLGtCQUNMLG9EQUZELEFBRUMsQUFBc0IsZUFDckIsQUFDRDs2QkFBTyxBQUFDLDJCQUFJLE9BQUwsQUFBVztrQkFBWDtvQkFBQTtBQUFBO09BQUEsRUFBUCxBQUFPLEFBQ1A7QUFMRCxZQUtPLEFBQ047NkJBQ0MsY0FBQTt1REFBQSxBQUMrQzs7a0JBRC9DO29CQUFBLEFBR0U7QUFIRjtBQUNDLE9BREQsRUFERCxBQUNDLEFBTUQ7QUFDRDtBQS9ETSxBQTRDUjtBQUFBLEFBQ0M7V0FvQkQsQUFDUSxBQUNQO2VBRkQsQUFFWSxBQUNYO1NBdEVLLEFBRUUsQUFpRVIsQUFHTSxBO0FBSE4sQUFDQztBQXBFSyxBQUNQOzs7Ozs7Ozs7Ozs7WUEyRUE7QUFDQTtjQUFBLEFBQzhFLHlOQUQ5RSxBQUdFLEtBQUssZUFBQTtnQkFBTyxJQUFQLEFBQU8sQUFBSTtBQUhsQixXQUFBLEFBSUUsS0FDQSxrQkFBVSxBQUNUO2dCQUFBLEFBQUs7b0JBQVMsQUFDSCxBQUNWO21CQUZhLEFBRUosQUFDVDtnQkFBTSxPQUhQLEFBQWMsQUFHQSxBQUVkO0FBTGMsQUFDYjtBQVBKLEFBYUU7O0FBQ0E7eUJBQVMsQUFDUjtnQkFBQSxBQUFLO29CQUFTLEFBQ0gsQUFDVjttQkFGYSxBQUVKLEFBQ1Q7aUJBSEQsQUFBYyxBQUtkO0FBTGMsQUFDYjtBQWhCSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXdCUSxBQUNSOzBCQUNDLEFBQUM7YUFDUyxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNwQjtnQkFBWSxLQUFBLEFBQUssTUFGbEIsQUFFd0IsQUFDdkI7WUFBUSxFQUFFLEdBSFgsQUFHUyxBQUFLOztlQUhkO2lCQURELEFBQ0MsQUFNRDtBQU5DO0FBQ0MsSUFERDs7Ozs7RUF4RzZCLGdCQUFNLEEsQUFpSHRDOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRyYW5zYWN0aW9uc1RhYmxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9