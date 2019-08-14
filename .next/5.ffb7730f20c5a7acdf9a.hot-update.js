webpackHotUpdate(5,{

/***/ 1637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(1626);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _getListOfCountryManagers = __webpack_require__(467);

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _createNewCountryManager = __webpack_require__(576);

var _createNewCountryManager2 = _interopRequireDefault(_createNewCountryManager);

var _ListofSmartContractAddresses = __webpack_require__(458);

var _getContractSummary = __webpack_require__(449);

var _getSummaryOfAllSchoolsInCountry = __webpack_require__(504);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/img/NigeriaMap.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/img/NigeriaMap.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mZmI3NzMwZjIwYzVhN2FjZGY5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVhY3RfY29tcG9uZW50cy9pbWcvTmlnZXJpYU1hcC5qcz83MGRiN2Q0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEljb24sIFBvcG92ZXIsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgR2V0TGlzdE9mQ291bnRyeU1hbmFnZXJzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9kZXBsb3llZENvbnRyYWN0Q2FsbHMvbWFpbi9nZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnNcIjtcbmltcG9ydCBDcmVhdGVOZXdDb3VudHJ5TWFuZ2VyIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9kZXBsb3llZENvbnRyYWN0Q2FsbHMvbWFpbi9jcmVhdGVOZXdDb3VudHJ5TWFuYWdlclwiO1xuaW1wb3J0IHtcblx0bWFpbkNvbnRyYWN0QWRkcmVzcyxcblx0b3duZXJcbn0gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL0xpc3RvZlNtYXJ0Q29udHJhY3RBZGRyZXNzZXNcIjtcbmltcG9ydCB7XG5cdEdldENvdW50cnlNYW5hZ2VyU3VtbWFyeSxcblx0R2V0U2Nob29sU3VtbWFyeVxufSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vZGVwbG95ZWRDb250cmFjdENhbGxzL2dldENvbnRyYWN0U3VtbWFyeVwiO1xuaW1wb3J0IEdldFN1bW1hcnlPZkFsbFNjaG9vbHNJbkNvdW50cnkgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9jb3VudHJ5TWFuYWdlci9nZXRTdW1tYXJ5T2ZBbGxTY2hvb2xzSW5Db3VudHJ5XCI7XG5cbmNsYXNzIE5pZ2VyaWFNYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRUcmluaXR5U2Nob29sRGF0YTogXCJcIixcblx0XHRsYWdvc1NjaG9vbHNEYXRhOiBcIlwiLFxuXHRcdGFidWphU2Nob29sc0RhdGE6IFwiXCIsXG5cdFx0a2FkdW5hU2Nob29sc0RhdGE6IFwiXCIsXG5cdFx0bGFnb3NWaXNpYmlsaXR5OiBmYWxzZSxcblx0XHRhYnVqYVZpc2liaWxpdHk6IFwiXCIsXG5cdFx0a2FkdW5hVmlzaWJpbGl0eTogXCJcIlxuXHR9O1xuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHQvL2dldHMgYSBsaXN0IG9mIGNvdW50cnkgbWFuYWdlcnNcblx0XHRsZXQgcmVzdWx0ID0gYXdhaXQgR2V0TGlzdE9mQ291bnRyeU1hbmFnZXJzKG1haW5Db250cmFjdEFkZHJlc3MpO1xuXHRcdC8vdGhlIGZpcnN0IGNvdW50cnkgb2luIHRoZSBhd2F5IGlzIE5pZ2VyaWFcblx0XHRjb25zdCBjb3VudHJ5TWFuYWdlck5pZ2VyaWEgPSByZXN1bHRbMF07XG5cdFx0Ly9nZXQgdGhlIHN1bW1hcnkgb2YgdGhlIGNvbnRyYWN0IG1hbmFnZXIgb2YgTmlnZXJpYVxuXHRcdGNvbnN0IGNvdW50cnlNYW5hZ2VyTmlnZXJpYVN1bW1hcnkgPSBhd2FpdCBHZXRDb3VudHJ5TWFuYWdlclN1bW1hcnkoXG5cdFx0XHRjb3VudHJ5TWFuYWdlck5pZ2VyaWFcblx0XHQpO1xuXHRcdC8vZ2V0IHN1bW1hcnkgb2YgYWxsIHNjaG9vbHMgdW5kZXIgdGhlIGNvbnRyYWN0IG1hbmFnZXIgb2YgTmlnZXJpYVxuXHRcdGNvbnN0IHNjaG9vbFN1bW1hcnkgPSBhd2FpdCBHZXRTdW1tYXJ5T2ZBbGxTY2hvb2xzSW5Db3VudHJ5KFxuXHRcdFx0Y291bnRyeU1hbmFnZXJOaWdlcmlhU3VtbWFyeVxuXHRcdCk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNjaG9vbFN1bW1hcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChzY2hvb2xTdW1tYXJ5W2ldWzJdLnRvTG93ZXJDYXNlKCkgPT09IFwibGFnb3NcIikge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRsYWdvc1NjaG9vbHNEYXRhOiBzY2hvb2xTdW1tYXJ5W2ldXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmIChzY2hvb2xTdW1tYXJ5W2ldWzJdLnRvTG93ZXJDYXNlKCkgPT09IFwiYWJ1amFcIikge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRhYnVqYVNjaG9vbHNEYXRhOiBzY2hvb2xTdW1tYXJ5W2ldXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmIChzY2hvb2xTdW1tYXJ5W2ldWzJdLnRvTG93ZXJDYXNlKCkgPT09IFwia2FkdW5hXCIpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0a2FkdW5hU2Nob29sc0RhdGE6IHNjaG9vbFN1bW1hcnlbaV1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzY2hvb2xTdW1tYXJ5KSkpO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkYXRhOiBzY2hvb2xTdW1tYXJ5XG5cdFx0fSk7XG5cdH1cblxuXHRoaWRlS2FkdW5hID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0a2FkdW5hVmlzaWJpbGl0eTogZmFsc2Vcblx0XHR9KTtcblx0fTtcblxuXHRoaWRlQWJ1amEgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhYnVqYVZpc2liaWxpdHk6IGZhbHNlXG5cdFx0fSk7XG5cdH07XG5cblx0aGlkZWxhZ29zID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bGFnb3NWaXNpYmlsaXR5OiBmYWxzZVxuXHRcdH0pO1xuXHR9O1xuXG5cdGhhbmRsZVZpc2libGVDaGFuZ2VLYWR1bmEgPSBrYWR1bmFWaXNpYmlsaXR5ID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsga2FkdW5hVmlzaWJpbGl0eSB9KTtcblx0fTtcblxuXHRoYW5kbGVWaXNpYmxlQ2hhbmdlQWJ1amEgPSBhYnVqYVZpc2liaWxpdHkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBhYnVqYVZpc2liaWxpdHkgfSk7XG5cdH07XG5cblx0aGFuZGxlVmlzaWJsZUNoYW5nZUxhZ29zID0gbGFnb3NWaXNpYmlsaXR5ID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgbGFnb3NWaXNpYmlsaXR5IH0pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5rYWR1bmFTY2hvb2xzRGF0YSAmJiAoXG5cdFx0XHRcdFx0PFBvcG92ZXJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9e1xuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0UG9wdWxhdGlvbjp7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5rYWR1bmFTY2hvb2xzRGF0YVszXX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRTY2hvb2wgTmFtZTp7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5rYWR1bmFTY2hvb2xzRGF0YVswXX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRFVEggQWRkcmVzczp7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5rYWR1bmFTY2hvb2xzRGF0YVsxXX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cblx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXt0aGlzLmhpZGVLYWR1bmF9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGl0bGU9XCJMb2NhdGlvbjogS2FkdW5hXCJcblx0XHRcdFx0XHRcdHRyaWdnZXI9XCJjbGlja1wiXG5cdFx0XHRcdFx0XHR2aXNpYmxlPXt0aGlzLnN0YXRlLmthZHVuYVZpc2liaWxpdHl9XG5cdFx0XHRcdFx0XHRvblZpc2libGVDaGFuZ2U9e3RoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZUthZHVuYX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0PEljb25cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogXCIxNTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogXCIzMDBweFwiXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW52aXJvbm1lbnRcIlxuXHRcdFx0XHRcdFx0XHRcdHRoZW1lPVwidHdvVG9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0dHdvVG9uZUNvbG9yPXtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUua2FkdW5hU2Nob29sc0RhdGFbNF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PyBcIiM1MmM0MWFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwicmVkXCJcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9Qb3BvdmVyPlxuXHRcdFx0XHQpfVxuXG5cdFx0XHRcdHt0aGlzLnN0YXRlLmFidWphU2Nob29sc0RhdGEgJiYgKFxuXHRcdFx0XHRcdDxQb3BvdmVyXG5cdFx0XHRcdFx0XHRjb250ZW50PXtcblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFBvcHVsYXRpb246IHt0aGlzLnN0YXRlLmFidWphU2Nob29sc0RhdGFbM119XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0U2Nob29sIE5hbWU6e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuYWJ1amFTY2hvb2xzRGF0YVswXX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRFVEggQWRkcmVzczp7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5hYnVqYVNjaG9vbHNEYXRhWzFdfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblxuXHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9e3RoaXMuaGlkZUFidWphfSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRpdGxlPVwiTG9jYXRpb246IEFidWphXCJcblx0XHRcdFx0XHRcdHRyaWdnZXI9XCJjbGlja1wiXG5cdFx0XHRcdFx0XHR2aXNpYmxlPXt0aGlzLnN0YXRlLmFidWphVmlzaWJpbGl0eX1cblx0XHRcdFx0XHRcdG9uVmlzaWJsZUNoYW5nZT17dGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlQWJ1amF9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdDxJY29uXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IFwiMjIwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IFwiMjYwcHhcIlxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVudmlyb25tZW50XCJcblx0XHRcdFx0XHRcdFx0XHR0aGVtZT1cInR3b1RvbmVcIlxuXHRcdFx0XHRcdFx0XHRcdHR3b1RvbmVDb2xvcj17XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmFidWphU2Nob29sc0RhdGFbNF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PyBcIiM1MmM0MWFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwicmVkXCJcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9Qb3BvdmVyPlxuXHRcdFx0XHQpfVxuXG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxhZ29zU2Nob29sc0RhdGEgJiYgKFxuXHRcdFx0XHRcdDxQb3BvdmVyXG5cdFx0XHRcdFx0XHRjb250ZW50PXtcblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFBvcHVsYXRpb246IHt0aGlzLnN0YXRlLmxhZ29zU2Nob29sc0RhdGFbM119XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0U2Nob29sIE5hbWU6e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUubGFnb3NTY2hvb2xzRGF0YVswXX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRFVEggQWRkcmVzczp7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5sYWdvc1NjaG9vbHNEYXRhWzFdfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblxuXHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9e3RoaXMuaGlkZUxhZ29zfSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRpdGxlPVwiTG9jYXRpb246IExhZ29zXCJcblx0XHRcdFx0XHRcdHRyaWdnZXI9XCJjbGlja1wiXG5cdFx0XHRcdFx0XHR2aXNpYmxlPXt0aGlzLnN0YXRlLmxhZ29zVmlzaWJpbGl0eX1cblx0XHRcdFx0XHRcdG9uVmlzaWJsZUNoYW5nZT17dGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlTGFnb3N9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdDxJY29uXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IFwiMzIwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IFwiNzBweFwiXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW52aXJvbm1lbnRcIlxuXHRcdFx0XHRcdFx0XHRcdHRoZW1lPVwidHdvVG9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0dHdvVG9uZUNvbG9yPXtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUubGFnb3NTY2hvb2xzRGF0YVs0XVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFwiIzUyYzQxYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogXCJyZWRcIlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L1BvcG92ZXI+XG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiA2NTAsIGhlaWdodDogNDUwIH19XG5cdFx0XHRcdFx0YWx0PVwiZXhhbXBsZVwiXG5cdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vYi9iOS9NYXBfb2ZfTmlnZXJpYW5fU3RhdGVzX3dpdGhfbmFtZXMucG5nXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmlnZXJpYU1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlYWN0X2NvbXBvbmVudHMvaW1nL05pZ2VyaWFNYXAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTkE7QUE4Q0E7QUFHQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFGQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQTlEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7O0FBRUE7QUFDQTtBQURBOzs7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFHQTtBQUhBOztBQUlBO0FBQ0E7QUFBQTtBQUNBOztBQXRCQTtBQXdCQTtBQXhCQTtBQUNBOztBQXVCQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUNBO0FBRUE7QUFKQTtBQUtBO0FBQ0E7QUFDQTs7QUFUQTtBQWtCQTtBQWxCQTtBQUNBO0FBb0JBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFHQTtBQUhBOztBQUlBO0FBQ0E7QUFBQTtBQUNBOztBQXJCQTtBQXVCQTtBQXZCQTtBQUNBOztBQXNCQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUNBO0FBRUE7QUFKQTtBQUtBO0FBQ0E7QUFDQTs7QUFUQTtBQWtCQTtBQWxCQTtBQUNBO0FBb0JBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFHQTtBQUhBOztBQUlBO0FBQ0E7QUFBQTtBQUNBOztBQXJCQTtBQXVCQTtBQXZCQTtBQUNBOztBQXNCQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUNBO0FBRUE7QUFKQTtBQUtBO0FBQ0E7QUFDQTs7QUFUQTtBQWtCQTtBQWxCQTtBQUNBO0FBa0JBO0FBRUE7QUFBQTs7QUFIQTtBQU9BO0FBUEE7QUFDQTs7Ozs7QUFuTkE7QUFDQTtBQTJOQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9