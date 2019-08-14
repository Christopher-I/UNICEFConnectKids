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

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/img/NigeriaMap.js";


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
			return _react2.default.createElement("div", { style: { position: "relative" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 94
				}
			}, this.state.kadunaSchoolsData && _react2.default.createElement(_antd.Popover, {
				content: _react2.default.createElement("div", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 98
					}
				}, _react2.default.createElement("p", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 99
					}
				}, "Population:", " ", this.state.kadunaSchoolsData[3]), _react2.default.createElement("p", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 103
					}
				}, "School Name:", " ", this.state.kadunaSchoolsData[0]), _react2.default.createElement("p", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 107
					}
				}, "ETH Address:", " ", this.state.kadunaSchoolsData[1]), _react2.default.createElement("a", { onClick: this.hideKaduna, __source: {
						fileName: _jsxFileName,
						lineNumber: 112
					}
				})),
				title: "Location: Kaduna",
				trigger: "click",
				visible: this.state.kadunaVisibility,
				onVisibleChange: this.handleVisibleChangeKaduna,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 120
				}
			}, _react2.default.createElement(_antd.Icon, {
				style: {
					position: "absolute",
					top: "150px",
					left: "300px"
				},
				type: "environment",
				theme: "twoTone",
				twoToneColor: this.state.kadunaSchoolsData[4] ? "#52c41a" : "red",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 121
				}
			}))), this.state.abujaSchoolsData && _react2.default.createElement(_antd.Popover, {
				content: _react2.default.createElement("div", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 142
					}
				}, _react2.default.createElement("p", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 143
					}
				}, "Population: ", this.state.abujaSchoolsData[3]), _react2.default.createElement("p", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 146
					}
				}, "School Name:", " ", this.state.abujaSchoolsData[0]), _react2.default.createElement("p", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 150
					}
				}, "ETH Address:", " ", this.state.abujaSchoolsData[1]), _react2.default.createElement("a", { onClick: this.hideAbuja, __source: {
						fileName: _jsxFileName,
						lineNumber: 155
					}
				})),
				title: "Location: Abuja",
				trigger: "click",
				visible: this.state.abujaVisibility,
				onVisibleChange: this.handleVisibleChangeAbuja,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 140
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 163
				}
			}, _react2.default.createElement(_antd.Icon, {
				style: {
					position: "absolute",
					top: "220px",
					left: "260px"
				},
				type: "environment",
				theme: "twoTone",
				twoToneColor: this.state.abujaSchoolsData[4] ? "#52c41a" : "red",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 164
				}
			}))), this.state.lagosSchoolsData && _react2.default.createElement(_antd.Popover, {
				content: _react2.default.createElement("div", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 185
					}
				}, _react2.default.createElement("p", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 186
					}
				}, "Population: ", this.state.lagosSchoolsData[3]), _react2.default.createElement("p", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 189
					}
				}, "School Name:", " ", this.state.lagosSchoolsData[0]), _react2.default.createElement("p", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 193
					}
				}, "ETH Address:", " ", this.state.lagosSchoolsData[1]), _react2.default.createElement("a", { onClick: this.hideLagos, __source: {
						fileName: _jsxFileName,
						lineNumber: 198
					}
				})),
				title: "Location: Lagos",
				trigger: "click",
				visible: this.state.lagosVisibility,
				onVisibleChange: this.handleVisibleChangeLagos,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 183
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 206
				}
			}, _react2.default.createElement(_antd.Icon, {
				style: {
					position: "absolute",
					top: "320px",
					left: "70px"
				},
				type: "environment",
				theme: "twoTone",
				twoToneColor: this.state.lagosSchoolsData[4] ? "#52c41a" : "red",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 207
				}
			}))), _react2.default.createElement("img", {
				style: { width: 650, height: 450 },
				alt: "example",
				src: "https://upload.wikimedia.org/wikipedia/en/b/b9/Map_of_Nigerian_States_with_names.png",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 225
				}
			}));
		}
	}]);

	return NigeriaMap;
}(_react2.default.Component);

exports.default = NigeriaMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvaW1nL05pZ2VyaWFNYXAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJJY29uIiwiUG9wb3ZlciIsIkJ1dHRvbiIsIkdldExpc3RPZkNvdW50cnlNYW5hZ2VycyIsIkNyZWF0ZU5ld0NvdW50cnlNYW5nZXIiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwib3duZXIiLCJHZXRDb3VudHJ5TWFuYWdlclN1bW1hcnkiLCJHZXRTY2hvb2xTdW1tYXJ5IiwiR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeSIsIk5pZ2VyaWFNYXAiLCJzdGF0ZSIsIlRyaW5pdHlTY2hvb2xEYXRhIiwibGFnb3NTY2hvb2xzRGF0YSIsImFidWphU2Nob29sc0RhdGEiLCJrYWR1bmFTY2hvb2xzRGF0YSIsImxhZ29zVmlzaWJpbGl0eSIsImFidWphVmlzaWJpbGl0eSIsImthZHVuYVZpc2liaWxpdHkiLCJoaWRlS2FkdW5hIiwic2V0U3RhdGUiLCJoaWRlQWJ1amEiLCJoaWRlbGFnb3MiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlS2FkdW5hIiwiaGFuZGxlVmlzaWJsZUNoYW5nZUFidWphIiwiaGFuZGxlVmlzaWJsZUNoYW5nZUxhZ29zIiwicmVzdWx0IiwiY291bnRyeU1hbmFnZXJOaWdlcmlhIiwiY291bnRyeU1hbmFnZXJOaWdlcmlhU3VtbWFyeSIsInNjaG9vbFN1bW1hcnkiLCJpIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImhpZGVMYWdvcyIsIndpZHRoIiwiaGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBUzs7QUFDeEIsQUFBTyxBQUE4Qjs7OztBQUNyQyxBQUFPLEFBQTRCOzs7O0FBQ25DLEFBQ0MsQUFD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QUF1QkM7QUF2QkQ7QUFDQyxJQURELGtCQXVCQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUM7O2VBQ08sQUFDSSxBQUNWO1VBRk0sQUFFRCxBQUNMO1dBSkYsQUFDUSxBQUdBLEFBRVA7QUFMTyxBQUNOO1VBRkYsQUFNTSxBQUNMO1dBUEQsQUFPTyxBQUNOO2tCQUNDLEtBQUEsQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIsS0FBNUIsQUFDRyxZQVZMLEFBV0s7O2VBWEw7aUJBdEVKLEFBOENFLEFBdUJDLEFBQ0MsQUFrQkY7QUFsQkU7QUFDQyxjQWlCSCxBQUFLLE1BQUwsQUFBVyxvQ0FDWCxBQUFDOzZCQUVDLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0M7QUFERDtBQUFBLEtBQUEsa0JBQ0MsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLE9BQ2MscUJBQUEsQUFBSyxNQUFMLEFBQVcsaUJBRjFCLEFBQ0MsQUFDYyxBQUE0QixBQUUxQyxxQkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsT0FDYyxnQkFEZCxBQUVFLFVBQUEsQUFBSyxNQUFMLEFBQVcsaUJBTmQsQUFJQyxBQUVFLEFBQTRCLEFBRTlCLHFCQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxPQUNjLGdCQURkLEFBRUUsVUFBQSxBQUFLLE1BQUwsQUFBVyxpQkFWZCxBQVFDLEFBRUUsQUFBNEIsQUFHOUIsMENBQUcsU0FBUyxLQUFaLEFBQWlCO2dCQUFqQjtrQkFmSCxBQUVFLEFBYUMsQUFHRjtBQUhFOztXQWZILEFBa0JPLEFBQ047YUFuQkQsQUFtQlMsQUFDUjthQUFTLEtBQUEsQUFBSyxNQXBCZixBQW9CcUIsQUFDcEI7cUJBQWlCLEtBckJsQixBQXFCdUI7O2VBckJ2QjtpQkFBQSxBQXVCQztBQXZCRDtBQUNDLElBREQsa0JBdUJDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQzs7ZUFDTyxBQUNJLEFBQ1Y7VUFGTSxBQUVELEFBQ0w7V0FKRixBQUNRLEFBR0EsQUFFUDtBQUxPLEFBQ047VUFGRixBQU1NLEFBQ0w7V0FQRCxBQU9PLEFBQ047a0JBQ0MsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFBWCxBQUE0QixLQUE1QixBQUNHLFlBVkwsQUFXSzs7ZUFYTDtpQkFqSEosQUF5RkUsQUF1QkMsQUFDQyxBQWtCSDtBQWxCRztBQUNDO1dBa0JJLEVBQUUsT0FBRixBQUFTLEtBQUssUUFEdEIsQUFDUSxBQUFzQixBQUM3QjtTQUZELEFBRUssQUFDSjtTQUhELEFBR0s7O2VBSEw7aUJBcElGLEFBQ0MsQUFtSUMsQUFPRjtBQVBFO0FBQ0M7Ozs7O0VBbk5vQixnQkFBTSxBLEFBNE4vQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJOaWdlcmlhTWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9