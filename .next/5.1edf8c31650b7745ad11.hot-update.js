webpackHotUpdate(5,{

/***/ 577:
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

var _antd = __webpack_require__(429);

var _sample = __webpack_require__(1424);

var _sample2 = _interopRequireDefault(_sample);

var _getListOfCountryManagers = __webpack_require__(467);

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _createNewCountryManager = __webpack_require__(576);

var _createNewCountryManager2 = _interopRequireDefault(_createNewCountryManager);

var _ListofSmartContractAddresses = __webpack_require__(458);

var _getContractSummary = __webpack_require__(449);

var _getSummaryOfAllSchoolsInCountry = __webpack_require__(504);

var _getSummaryOfAllSchoolsInCountry2 = _interopRequireDefault(_getSummaryOfAllSchoolsInCountry);

var _getSummaryOfAll_ISPsInCountry = __webpack_require__(913);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/tables/SchoolTable.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/tables/SchoolTable.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xZWRmOGMzMTY1MGI3NzQ1YWQxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVhY3RfY29tcG9uZW50cy90YWJsZXMvU2Nob29sVGFibGUuanM/ZDZhNDQ2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgVGFnLCBNb2RhbCwgUHJvZ3Jlc3MgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEludGVybmV0U3BlZWRDaGFydCBmcm9tIFwiLi4vLi4vcGFnZXMvY2hhcnQvc2FtcGxlXCI7XG5pbXBvcnQgR2V0TGlzdE9mQ291bnRyeU1hbmFnZXJzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9kZXBsb3llZENvbnRyYWN0Q2FsbHMvbWFpbi9nZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnNcIjtcbmltcG9ydCBDcmVhdGVOZXdDb3VudHJ5TWFuZ2VyIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9kZXBsb3llZENvbnRyYWN0Q2FsbHMvbWFpbi9jcmVhdGVOZXdDb3VudHJ5TWFuYWdlclwiO1xuaW1wb3J0IHtcblx0bWFpbkNvbnRyYWN0QWRkcmVzcyxcblx0b3duZXJcbn0gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL0xpc3RvZlNtYXJ0Q29udHJhY3RBZGRyZXNzZXNcIjtcbmltcG9ydCB7XG5cdEdldENvdW50cnlNYW5hZ2VyU3VtbWFyeSxcblx0R2V0U2Nob29sU3VtbWFyeVxufSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vZGVwbG95ZWRDb250cmFjdENhbGxzL2dldENvbnRyYWN0U3VtbWFyeVwiO1xuaW1wb3J0IEdldFN1bW1hcnlPZkFsbFNjaG9vbHNJbkNvdW50cnkgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9jb3VudHJ5TWFuYWdlci9nZXRTdW1tYXJ5T2ZBbGxTY2hvb2xzSW5Db3VudHJ5XCI7XG5pbXBvcnQgR2V0U3VtbWFyeU9mQWxsSVNQc0luQ291bnRyeSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vZGVwbG95ZWRDb250cmFjdENhbGxzL2NvdW50cnlNYW5hZ2VyL2dldFN1bW1hcnlPZkFsbF9JU1BzSW5Db3VudHJ5XCI7XG5cbmNsYXNzIFNjaG9vbFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0ZGF0YTogXCJcIixcblx0XHRjb25uZWN0aXZpdHlNb2RhbFZpc2liaWxpdHk6IGZhbHNlLFxuXHRcdGNvbHVtbnMxOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIlNjaG9vbCBOYW1lXCIsXG5cdFx0XHRcdGRhdGFJbmRleDogXCIwXCIsXG5cdFx0XHRcdGtleTogXCIwXCIsXG5cdFx0XHRcdHJlbmRlcjogdGV4dCA9PiA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+e3RleHR9PC9hPlxuXHRcdFx0fSxcblxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJQb3B1bGF0aW9uXCIsXG5cdFx0XHRcdGRhdGFJbmRleDogXCIzXCIsXG5cdFx0XHRcdGtleTogXCIzXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIkxvY2F0aW9uXCIsXG5cdFx0XHRcdGRhdGFJbmRleDogXCIyXCIsXG5cdFx0XHRcdGtleTogXCIyXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIlN0YXR1c1wiLFxuXHRcdFx0XHRrZXk6IFwidGFnc1wiLFxuXHRcdFx0XHRkYXRhSW5kZXg6IFwiNFwiLFxuXHRcdFx0XHRyZW5kZXI6IGJvb2wgPT4ge1xuXHRcdFx0XHRcdGlmIChib29sID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPFRhZyBjb2xvcj1cImdyZWVuXCI+Q29ubmVjdGVkPC9UYWc+O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPFRhZyBjb2xvcj1cInJlZFwiPk5vdCBDb25uZWN0ZWQ8L1RhZz47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJcIixcblx0XHRcdFx0a2V5OiBcImFjdGlvblwiLFxuXHRcdFx0XHRyZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IChcblx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub3BlbkNvbm5lY3Rpdml0eU1vZGFsfVxuXHRcdFx0XHRcdFx0XHRocmVmPVwiamF2YXNjcmlwdDo7XCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0RGV0YWlsc1xuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdF1cblx0fTtcblxuXHRvcGVuQ29ubmVjdGl2aXR5TW9kYWwgPSBlID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNvbm5lY3Rpdml0eU1vZGFsVmlzaWJpbGl0eTogdHJ1ZVxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbm5lY3Rpdml0eU1vZGFsaGFuZGxlQ2FuY2VsID0gZSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjb25uZWN0aXZpdHlNb2RhbFZpc2liaWxpdHk6IGZhbHNlXG5cdFx0fSk7XG5cdH07XG5cblx0Y29ubmVjdGl2aXR5TW9kYWxoYW5kbGVPayA9IGUgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y29ubmVjdGl2aXR5TW9kYWxWaXNpYmlsaXR5OiBmYWxzZVxuXHRcdH0pO1xuXHR9O1xuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvL2dldHMgYSBsaXN0IG9mIGNvdW50cnkgbWFuYWdlcnNcblx0XHRcdGxldCByZXN1bHQgPSBhd2FpdCBHZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnMobWFpbkNvbnRyYWN0QWRkcmVzcyk7XG5cdFx0XHQvL3RoZSBmaXJzdCBjb3VudHJ5IG9pbiB0aGUgYXdheSBpcyBOaWdlcmlhXG5cdFx0XHRjb25zdCBjb3VudHJ5TWFuYWdlck5pZ2VyaWEgPSByZXN1bHRbMF07XG5cdFx0XHQvL2dldCB0aGUgc3VtbWFyeSBvZiB0aGUgY29udHJhY3QgbWFuYWdlciBvZiBOaWdlcmlhXG5cdFx0XHRjb25zdCBjb3VudHJ5TWFuYWdlck5pZ2VyaWFTdW1tYXJ5ID0gYXdhaXQgR2V0Q291bnRyeU1hbmFnZXJTdW1tYXJ5KFxuXHRcdFx0XHRjb3VudHJ5TWFuYWdlck5pZ2VyaWFcblx0XHRcdCk7XG5cdFx0XHQvL2dldCBzdW1tYXJ5IG9mIGFsbCBzY2hvb2xzIHVuZGVyIHRoZSBjb250cmFjdCBtYW5hZ2VyIG9mIE5pZ2VyaWFcblx0XHRcdGNvbnN0IHNjaG9vbFN1bW1hcnkgPSBhd2FpdCBHZXRTdW1tYXJ5T2ZBbGxTY2hvb2xzSW5Db3VudHJ5KFxuXHRcdFx0XHRjb3VudHJ5TWFuYWdlck5pZ2VyaWFTdW1tYXJ5XG5cdFx0XHQpO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2Nob29sU3VtbWFyeSkpKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkYXRhOiBzY2hvb2xTdW1tYXJ5XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gLy9nZXQgc3VtbWFyeSBvZiBhbGwgSVNQIHVuZGVyIHRoZSBjb250cmFjdCBtYW5hZ2VyIG9mIE5pZ2VyaWFcblx0XHRcdC8vIGNvbnN0IElTUFN1bW1hcnkgPSBhd2FpdCBHZXRTdW1tYXJ5T2ZBbGxJU1BzSW5Db3VudHJ5KFxuXHRcdFx0Ly8gICBjb3VudHJ5TWFuYWdlck5pZ2VyaWFTdW1tYXJ5XG5cdFx0XHQvLyApO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coSVNQU3VtbWFyeSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxUYWJsZVxuXHRcdFx0XHRcdGNvbHVtbnM9e3RoaXMuc3RhdGUuY29sdW1uczF9XG5cdFx0XHRcdFx0ZGF0YVNvdXJjZT17dGhpcy5zdGF0ZS5kYXRhfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHR0aXRsZT1cIklTUCBQZXJmb21hbmNlIENoYXJ0XCJcblx0XHRcdFx0XHR2aXNpYmxlPXt0aGlzLnN0YXRlLmNvbm5lY3Rpdml0eU1vZGFsVmlzaWJpbGl0eX1cblx0XHRcdFx0XHRvbk9rPXt0aGlzLmNvbm5lY3Rpdml0eU1vZGFsaGFuZGxlT2t9XG5cdFx0XHRcdFx0b25DYW5jZWw9e3RoaXMuY29ubmVjdGl2aXR5TW9kYWxoYW5kbGVDYW5jZWx9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHREYXRhIENvbnN1bXB0aW9uIEJsdWUtU2Nob29sLCBHcmVlbiAtIElTUFxuXHRcdFx0XHRcdDxQcm9ncmVzc1xuXHRcdFx0XHRcdFx0cGVyY2VudD17NTB9XG5cdFx0XHRcdFx0XHRzdWNjZXNzUGVyY2VudD17MzB9XG5cdFx0XHRcdFx0XHRzaG93SW5mbz17ZmFsc2V9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRHQlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cblx0XHRcdFx0XHRcdDxJbnRlcm5ldFNwZWVkQ2hhcnQgLz57XCIgXCJ9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaG9vbFRhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVhY3RfY29tcG9uZW50cy90YWJsZXMvU2Nob29sVGFibGUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBVkE7QUFDQTtBQWFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTs7QUFGQTtBQUFBO0FBQUE7QUFDQTs7QUFMQTtBQWpDQTtBQWtEQTtBQUdBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFGQTtBQUlBO0FBQ0E7QUFHQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7QUFFQTtBQUNBO0FBREE7OztBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUNBOztBQUpBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUFBOztBQUhBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBeEhBO0FBQ0E7QUErSEE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==