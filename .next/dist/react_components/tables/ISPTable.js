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

var _createNewCountryManager = require("../../ethereum/deployedContractCalls/main/createNewCountryManager");

var _createNewCountryManager2 = _interopRequireDefault(_createNewCountryManager);

var _ListofSmartContractAddresses = require("../../ethereum/ListofSmartContractAddresses");

var _getContractSummary = require("../../ethereum/deployedContractCalls/getContractSummary");

var _placeBidModal = require("../modals/placeBidModal");

var _placeBidModal2 = _interopRequireDefault(_placeBidModal);

var _getSummaryOfAllSchoolsInCountry = require("../../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry");

var _getSummaryOfAllSchoolsInCountry2 = _interopRequireDefault(_getSummaryOfAllSchoolsInCountry);

var _getSummaryOfAll_ISPsInCountry = require("../../ethereum/deployedContractCalls/countryManager/getSummaryOfAll_ISPsInCountry");

var _getSummaryOfAll_ISPsInCountry2 = _interopRequireDefault(_getSummaryOfAll_ISPsInCountry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			data: "",
			columns: [{
				title: "ISP Name",
				dataIndex: "0",
				key: "0",
				render: function render(text) {
					return _react2.default.createElement("a", { href: "javascript:;" }, text);
				}
			}, {
				title: "Promised Data Size(GB)",
				dataIndex: "2",
				key: "2"
			}, {
				title: "Promised Upload Speed(MB/s)",
				dataIndex: "3",
				key: "3"
			}, {
				title: "Promised Download Speed(MB/s)",
				dataIndex: "4",
				key: "4"
			}, {
				title: "Reputation/Consistency Score",
				dataIndex: "6",
				key: "6"
			}, {
				title: "Bid",
				key: "tags",
				dataIndex: "4",
				render: function render(bool) {
					if (bool === true) {
						return _react2.default.createElement(_antd.Tag, { color: "green" }, "Current Provider");
					} else {
						return _react2.default.createElement(_antd.Tag, { color: "blue", onClick: _this.placeBidModalOpen }, "Place Bid");
					}
				}
			}]
		}, _this.placeBidModalOpen = function (e) {
			_this.setState({
				placeBidVisibility: true
			});
		}, _this.placeBidModalhandleCancel = function (e) {
			_this.setState({
				placeBidVisibility: false
			});
		}, _this.placeBidModalhandleOk = function (e) {
			_this.setState({
				placeBidVisibility: false
			});
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
			return _react2.default.createElement("div", null, _react2.default.createElement(_placeBidModal2.default, {
				placeBidVisibility: this.state.placeBidVisibility,
				placeBidModalhandleOk: this.placeBidModalhandleOk,
				placeBidModalhandleCancel: this.placeBidModalhandleCancel
			}), _react2.default.createElement(_antd.Table, {
				columns: this.state.columns,
				dataSource: this.state.data
			}));
		}
	}]);

	return ISPTable;
}(_react2.default.Component);

exports.default = ISPTable;