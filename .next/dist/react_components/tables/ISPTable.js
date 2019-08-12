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

var _ISPTableColumnAndData = require("./ISPTableColumnAndData");

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

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/tables/ISPTable.js";


var ISPTable = function (_React$Component) {
	(0, _inherits3.default)(ISPTable, _React$Component);

	function ISPTable() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ISPTable);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ISPTable.__proto__ || (0, _getPrototypeOf2.default)(ISPTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			data: ""
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ISPTable, [{
		key: "componentDidMount",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var result, countryManagerNigeria, countryManagerNigeriaSummary, ISPSummary;
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
								// //get the summary of the contract manager of Nigeria

								_context.next = 7;
								return (0, _getContractSummary.GetCountryManagerSummary)(countryManagerNigeria);

							case 7:
								countryManagerNigeriaSummary = _context.sent;
								_context.next = 10;
								return (0, _getSummaryOfAll_ISPsInCountry2.default)(countryManagerNigeriaSummary);

							case 10:
								ISPSummary = _context.sent;

								this.setState({
									data: ISPSummary
								});

								console.log(this.state.data);
								_context.next = 18;
								break;

							case 15:
								_context.prev = 15;
								_context.t0 = _context["catch"](0);

								this.setState({ errorMessage: _context.t0.message });

							case 18:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this, [[0, 15]]);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Table, { columns: _ISPTableColumnAndData.columns, dataSource: this.state.data, __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			});
		}
	}]);

	return ISPTable;
}(_react2.default.Component);

exports.default = ISPTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvdGFibGVzL0lTUFRhYmxlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsIkdldExpc3RPZkNvdW50cnlNYW5hZ2VycyIsIkNyZWF0ZU5ld0NvdW50cnlNYW5nZXIiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwib3duZXIiLCJHZXRDb3VudHJ5TWFuYWdlclN1bW1hcnkiLCJHZXRTY2hvb2xTdW1tYXJ5IiwiR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeSIsIkdldFN1bW1hcnlPZkFsbElTUHNJbkNvdW50cnkiLCJJU1BUYWJsZSIsInN0YXRlIiwicmVzdWx0IiwiY291bnRyeU1hbmFnZXJOaWdlcmlhIiwiY291bnRyeU1hbmFnZXJOaWdlcmlhU3VtbWFyeSIsIklTUFN1bW1hcnkiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUyxBQUFTLEFBQVk7O0FBQzlCLEFBQU8sQUFBOEI7Ozs7QUFDckMsQUFBTyxBQUE0Qjs7OztBQUNuQyxBQUNDLEFBQ0EsQUFDTTs7QUFDUCxBQUNDLEFBQ0EsQUFDTTs7QUFDUCxBQUFPLEFBQXFDOzs7O0FBQzVDLEFBQU8sQUFBa0M7Ozs7Ozs7OztJLEFBRW5DOzs7Ozs7Ozs7Ozs7Ozs4TSxBQUNMO1MsQUFBUSxBQUNEO0FBREMsQUFDUDs7Ozs7Ozs7Ozs7Ozs7ZUFNb0IsQUFBeUIsQSxBQUF6Qjs7WUFBZjtBLDBCQUNKOztBQUNNO0EsZ0NBQXdCLE9BQUEsQSxBQUFPLEFBQ3JDOzs7O2VBQzJDLGtEQUFBLEEsQUFDMUM7O1lBREs7QTs7ZUFLbUIsNkNBQUEsQUFDeEIsQTs7WUFESztBLDhCQUlOOzthQUFBLEFBQUs7ZUFBTCxBQUFjLEFBQ1AsQUFHUDtBQUpjLEFBQ2I7O2dCQUdELEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUI7Ozs7Ozt3Q0FFdkI7O2FBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQUE5QixBQUFjLEFBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBSTNCLEFBQ1I7MEJBQU8sQUFBQyw2QkFBRCxBQUFPLEFBQVMseUNBQVMsWUFBWSxLQUFBLEFBQUssTUFBMUMsQUFBZ0Q7ZUFBaEQ7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7Ozs7RUFoQ2MsZ0JBQU0sQSxBQW9DN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSVNQVGFibGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=