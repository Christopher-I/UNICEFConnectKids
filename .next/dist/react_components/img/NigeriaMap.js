"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

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

var _getSummaryOfAllSchoolsInCountry = require("../../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry");

var _getSummaryOfAllSchoolsInCountry2 = _interopRequireDefault(_getSummaryOfAllSchoolsInCountry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NigeriaMap = function (_React$Component) {
	(0, _inherits3.default)(NigeriaMap, _React$Component);

	function NigeriaMap() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, NigeriaMap);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NigeriaMap.__proto__ || (0, _getPrototypeOf2.default)(NigeriaMap)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			TrinitySchoolData: "",
			lagosSchoolsData: "",
			abujaSchoolsData: "",
			kadunaSchoolsData: "",
			lagosVisibility: false,
			abujaVisibility: "",
			kadunaVisibility: ""
		}, _this.hideKaduna = function () {
			_this.setState({
				kadunaVisibility: false
			});
		}, _this.hideAbuja = function () {
			_this.setState({
				abujaVisibility: false
			});
		}, _this.hidelagos = function () {
			_this.setState({
				lagosVisibility: false
			});
		}, _this.handleVisibleChangeKaduna = function (kadunaVisibility) {
			_this.setState({ kadunaVisibility: kadunaVisibility });
		}, _this.handleVisibleChangeAbuja = function (abujaVisibility) {
			_this.setState({ abujaVisibility: abujaVisibility });
		}, _this.handleVisibleChangeLagos = function (lagosVisibility) {
			_this.setState({ lagosVisibility: lagosVisibility });
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(NigeriaMap, [{
		key: "componentDidMount",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var result, countryManagerNigeria, countryManagerNigeriaSummary, schoolSummary, i;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _getListOfCountryManagers2.default)(_ListofSmartContractAddresses.mainContractAddress);

							case 2:
								result = _context.sent;

								//the first country oin the away is Nigeria
								countryManagerNigeria = result[0];
								//get the summary of the contract manager of Nigeria

								_context.next = 6;
								return (0, _getContractSummary.GetCountryManagerSummary)(countryManagerNigeria);

							case 6:
								countryManagerNigeriaSummary = _context.sent;
								_context.next = 9;
								return (0, _getSummaryOfAllSchoolsInCountry2.default)(countryManagerNigeriaSummary);

							case 9:
								schoolSummary = _context.sent;

								for (i = 0; i < schoolSummary.length; i++) {
									if (schoolSummary[i][2].toLowerCase() === "lagos") {
										this.setState({
											lagosSchoolsData: schoolSummary[i]
										});
									} else if (schoolSummary[i][2].toLowerCase() === "abuja") {
										this.setState({
											abujaSchoolsData: schoolSummary[i]
										});
									} else if (schoolSummary[i][2].toLowerCase() === "kaduna") {
										this.setState({
											kadunaSchoolsData: schoolSummary[i]
										});
									}
								}

								console.log(JSON.parse((0, _stringify2.default)(schoolSummary)));

								this.setState({
									data: schoolSummary
								});

							case 13:
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
			return _react2.default.createElement("div", { style: { position: "relative" } }, this.state.kadunaSchoolsData && _react2.default.createElement(_antd.Popover, {
				content: _react2.default.createElement("div", null, _react2.default.createElement("p", null, "Population:", " ", this.state.kadunaSchoolsData[3]), _react2.default.createElement("p", null, "School Name:", " ", this.state.kadunaSchoolsData[0]), _react2.default.createElement("p", null, "ETH Address:", " ", this.state.kadunaSchoolsData[1]), _react2.default.createElement("a", { onClick: this.hideKaduna })),
				title: "Location: Kaduna",
				trigger: "click",
				visible: this.state.kadunaVisibility,
				onVisibleChange: this.handleVisibleChangeKaduna
			}, _react2.default.createElement("a", null, _react2.default.createElement(_antd.Icon, {
				style: {
					position: "absolute",
					top: "150px",
					left: "300px"
				},
				type: "environment",
				theme: "twoTone",
				twoToneColor: this.state.kadunaSchoolsData[4] ? "#52c41a" : "red"
			}))), this.state.abujaSchoolsData && _react2.default.createElement(_antd.Popover, {
				content: _react2.default.createElement("div", null, _react2.default.createElement("p", null, "Population: ", this.state.abujaSchoolsData[3]), _react2.default.createElement("p", null, "School Name:", " ", this.state.abujaSchoolsData[0]), _react2.default.createElement("p", null, "ETH Address:", " ", this.state.abujaSchoolsData[1]), _react2.default.createElement("a", { onClick: this.hideAbuja })),
				title: "Location: Abuja",
				trigger: "click",
				visible: this.state.abujaVisibility,
				onVisibleChange: this.handleVisibleChangeAbuja
			}, _react2.default.createElement("a", null, _react2.default.createElement(_antd.Icon, {
				style: {
					position: "absolute",
					top: "220px",
					left: "260px"
				},
				type: "environment",
				theme: "twoTone",
				twoToneColor: this.state.abujaSchoolsData[4] ? "#52c41a" : "red"
			}))), this.state.lagosSchoolsData && _react2.default.createElement(_antd.Popover, {
				content: _react2.default.createElement("div", null, _react2.default.createElement("p", null, "Population: ", this.state.lagosSchoolsData[3]), _react2.default.createElement("p", null, "School Name:", " ", this.state.lagosSchoolsData[0]), _react2.default.createElement("p", null, "ETH Address:", " ", this.state.lagosSchoolsData[1]), _react2.default.createElement("a", { onClick: this.hideLagos })),
				title: "Location: Lagos",
				trigger: "click",
				visible: this.state.lagosVisibility,
				onVisibleChange: this.handleVisibleChangeLagos
			}, _react2.default.createElement("a", null, _react2.default.createElement(_antd.Icon, {
				style: {
					position: "absolute",
					top: "320px",
					left: "70px"
				},
				type: "environment",
				theme: "twoTone",
				twoToneColor: this.state.lagosSchoolsData[4] ? "#52c41a" : "red"
			}))), _react2.default.createElement("img", {
				style: { width: 650, height: 450 },
				alt: "example",
				src: "https://upload.wikimedia.org/wikipedia/en/b/b9/Map_of_Nigerian_States_with_names.png"
			}));
		}
	}]);

	return NigeriaMap;
}(_react2.default.Component);

exports.default = NigeriaMap;

//source nigeria map used was from wikipedia