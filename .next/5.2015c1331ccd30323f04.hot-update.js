webpackHotUpdate(5,{

/***/ 1437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _reactDom = __webpack_require__(352);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Head = __webpack_require__(1438);

var _Head2 = _interopRequireDefault(_Head);

var _SchoolTable = __webpack_require__(1366);

var _SchoolTable2 = _interopRequireDefault(_SchoolTable);

var _LoginModal = __webpack_require__(1626);

var _LoginModal2 = _interopRequireDefault(_LoginModal);

var _ApplyModal = __webpack_require__(1639);

var _ApplyModal2 = _interopRequireDefault(_ApplyModal);

var _ViewConnectivity = __webpack_require__(1434);

var _ViewConnectivity2 = _interopRequireDefault(_ViewConnectivity);

var _routes = __webpack_require__(1346);

var _antd = __webpack_require__(801);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/Template.js";
//import {openLoginModal} from "./modals/modalFunctions"


//define extract child properties
var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer;
var SubMenu = _antd.Menu.SubMenu;
var TabPane = _antd.Tabs.TabPane;

var Template = function (_React$Component) {
	(0, _inherits3.default)(Template, _React$Component);

	function Template() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Template);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Template.__proto__ || (0, _getPrototypeOf2.default)(Template)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			TotalNumberofSchools: "0",
			FundingNeededtoConnectAllSchools: "0",
			FundingReceived: "0",
			AmountNeededtoFundadditionalSchool: "0",
			percentageOfConnectedSchool: "50",
			loginModalVisibility: false,
			applyModalVisibility: false,
			countrySelected: false
		}, _this.handleClick = function (e) {
			_this.setState({
				current: e.key
			});
		}, _this.openLoginModal = function (e) {
			_this.setState({
				loginModalVisibility: true
			});
		}, _this.loginModalhandleCancel = function (e) {
			_this.setState({
				loginModalVisibility: false
			});
		}, _this.loginModalhandleOk = function (e) {
			_routes.Router.push({
				pathname: "/admin"
			});
			_this.setState({
				loginModalVisibility: false
			});
		}, _this.openApplyModal = function (e) {
			_this.setState({
				applyModalVisibility: true
			});
		}, _this.applyModalhandleCancel = function (e) {
			_this.setState({
				applyModalVisibility: false
			});
		}, _this.applyModalhandleOk = function (e) {
			_this.setState({
				applyModalVisibility: false
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Template, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, _react2.default.createElement(_Head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}), _react2.default.createElement(Header, { style: { zIndex: 1, width: "100%" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, _react2.default.createElement(_antd.Menu, {
				selectable: "false",
				onClick: this.handleClick,
				selectedKeys: [this.state.current],
				mode: "horizontal",
				theme: "dark",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}, _react2.default.createElement(_antd.Menu.Item, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}, _react2.default.createElement(_routes.Link, { route: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 100
				}
			}, " Home"))), _react2.default.createElement(SubMenu, {
				title: _react2.default.createElement("span", { className: "submenu-title-wrapper", __source: {
						fileName: _jsxFileName,
						lineNumber: 106
					}
				}, _react2.default.createElement(_antd.Icon, { type: "down", __source: {
						fileName: _jsxFileName,
						lineNumber: 107
					}
				}), "Select Country"),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, _react2.default.createElement(_antd.Menu.ItemGroup, { title: "Africa", __source: {
					fileName: _jsxFileName,
					lineNumber: 112
				}
			}, _react2.default.createElement(_antd.Menu.Item, {
				key: "setting:1",
				onClick: function onClick() {
					console.log("selected!");
					_this2.setState({
						countrySelected: true
					});
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 113
				}
			}, "Nigeria"))), _react2.default.createElement(_antd.Menu.Item, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 127
				}
			}, _react2.default.createElement(_antd.Button, {
				type: "primary",
				onClick: this.openApplyModal,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 128
				}
			}, "Apply as School/ISP")), _react2.default.createElement(_antd.Menu.Item, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 136
				}
			}, _react2.default.createElement(_antd.Button, {
				type: "primary",
				onClick: this.openLoginModal,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			}, "Login")))), this.props.children, _react2.default.createElement(_LoginModal2.default, {
				loginModalVisibility: this.state.loginModalVisibility,
				loginModalhandleCancel: this.loginModalhandleCancel,
				loginModalhandleOk: this.loginModalhandleOk,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 149
				}
			}), _react2.default.createElement(_ApplyModal2.default, {
				applyModalVisibility: this.state.applyModalVisibility,
				applyModalhandleCancel: this.applyModalhandleCancel,
				applyModalhandleOk: this.applyModalhandleOk,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 154
				}
			}), _react2.default.createElement(Footer, { style: { position: "bottom", textAlign: "center" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 160
				}
			}, _react2.default.createElement("h1", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 161
				}
			}, "UNICEF Challenge: Reducing The Divide")));
		}
	}]);

	return Template;
}(_react2.default.Component);

exports.default = Template;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkhlYWQiLCJMaXN0T2ZTY2hvb2xzIiwiTG9naW5Nb2RhbCIsIkFwcGx5TW9kYWwiLCJWaWV3Q29ubmVjdGl2aXR5IiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIk1lbnUiLCJJY29uIiwiUm93IiwiQ29sIiwiQnV0dG9uIiwiRHJvcGRvd24iLCJUYWJzIiwiRGl2aWRlciIsIlByb2dyZXNzIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlN1Yk1lbnUiLCJUYWJQYW5lIiwiVGVtcGxhdGUiLCJzdGF0ZSIsIlRvdGFsTnVtYmVyb2ZTY2hvb2xzIiwiRnVuZGluZ05lZWRlZHRvQ29ubmVjdEFsbFNjaG9vbHMiLCJGdW5kaW5nUmVjZWl2ZWQiLCJBbW91bnROZWVkZWR0b0Z1bmRhZGRpdGlvbmFsU2Nob29sIiwicGVyY2VudGFnZU9mQ29ubmVjdGVkU2Nob29sIiwibG9naW5Nb2RhbFZpc2liaWxpdHkiLCJhcHBseU1vZGFsVmlzaWJpbGl0eSIsImNvdW50cnlTZWxlY3RlZCIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJjdXJyZW50IiwiZSIsImtleSIsIm9wZW5Mb2dpbk1vZGFsIiwibG9naW5Nb2RhbGhhbmRsZUNhbmNlbCIsImxvZ2luTW9kYWxoYW5kbGVPayIsInB1c2giLCJwYXRobmFtZSIsIm9wZW5BcHBseU1vZGFsIiwiYXBwbHlNb2RhbGhhbmRsZUNhbmNlbCIsImFwcGx5TW9kYWxoYW5kbGVPayIsInpJbmRleCIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiY2hpbGRyZW4iLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW1C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QUNDLE1BdkJKLEFBYUMsQUFRQyxBQUNDLEFBY0YsOEJBQUMsY0FBRCxXQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQztVQUFELEFBQ00sQUFDTDthQUFTLEtBRlYsQUFFZTs7ZUFGZjtpQkFBQTtBQUFBO0FBQ0MsTUF0Q0gsQUFvQ0MsQUFDQyxBQVFELHlDQUFDLGNBQUQsV0FBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUM7VUFBRCxBQUNNLEFBQ0w7YUFBUyxLQUZWLEFBRWU7O2VBRmY7aUJBQUE7QUFBQTtBQUNDLE1BbkRMLEFBR0MsQUFDQyxBQTZDQyxBQUNDLEFBVUYsa0JBQUEsQUFBSyxNQTVEUCxBQTREYSxBQUVaLDBCQUFBLEFBQUM7MEJBQ3NCLEtBQUEsQUFBSyxNQUQ1QixBQUNrQyxBQUNqQzs0QkFBd0IsS0FGekIsQUFFOEIsQUFDN0I7d0JBQW9CLEtBSHJCLEFBRzBCOztlQUgxQjtpQkE5REQsQUE4REMsQUFLQTtBQUxBO0FBQ0MsdUJBSUQsQUFBQzswQkFDc0IsS0FBQSxBQUFLLE1BRDVCLEFBQ2tDLEFBQ2pDOzRCQUF3QixLQUZ6QixBQUU4QixBQUM3Qjt3QkFBb0IsS0FIckIsQUFHMEI7O2VBSDFCO2lCQW5FRCxBQW1FQyxBQU1BO0FBTkE7QUFDQyx1QkFLQSxjQUFELFVBQVEsT0FBTyxFQUFFLFVBQUYsQUFBWSxVQUFVLFdBQXJDLEFBQWUsQUFBaUM7ZUFBaEQ7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BM0VILEFBQ0MsQUF5RUMsQUFDQyxBQUlIOzs7OztFQXpJcUIsZ0JBQU0sQSxBQTRJN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/Template.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/Template.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yMDE1YzEzMzFjY2QzMDMyM2YwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVhY3RfY29tcG9uZW50cy9UZW1wbGF0ZS5qcz8wZmVlMDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwiLi9IZWFkXCI7XG5pbXBvcnQgTGlzdE9mU2Nob29scyBmcm9tIFwiLi90YWJsZXMvU2Nob29sVGFibGVcIjtcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gXCIuL21vZGFscy9Mb2dpbk1vZGFsXCI7XG5pbXBvcnQgQXBwbHlNb2RhbCBmcm9tIFwiLi9tb2RhbHMvQXBwbHlNb2RhbFwiO1xuaW1wb3J0IFZpZXdDb25uZWN0aXZpdHkgZnJvbSBcIi4vVmlld0Nvbm5lY3Rpdml0eVwiO1xuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xuLy9pbXBvcnQge29wZW5Mb2dpbk1vZGFsfSBmcm9tIFwiLi9tb2RhbHMvbW9kYWxGdW5jdGlvbnNcIlxuaW1wb3J0IHtcblx0TGF5b3V0LFxuXHRNZW51LFxuXHRJY29uLFxuXHRSb3csXG5cdENvbCxcblx0QnV0dG9uLFxuXHREcm9wZG93bixcblx0VGFicyxcblx0RGl2aWRlcixcblx0UHJvZ3Jlc3Ncbn0gZnJvbSBcImFudGRcIjtcblxuLy9kZWZpbmUgZXh0cmFjdCBjaGlsZCBwcm9wZXJ0aWVzXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XG5cbmNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0VG90YWxOdW1iZXJvZlNjaG9vbHM6IFwiMFwiLFxuXHRcdEZ1bmRpbmdOZWVkZWR0b0Nvbm5lY3RBbGxTY2hvb2xzOiBcIjBcIixcblx0XHRGdW5kaW5nUmVjZWl2ZWQ6IFwiMFwiLFxuXHRcdEFtb3VudE5lZWRlZHRvRnVuZGFkZGl0aW9uYWxTY2hvb2w6IFwiMFwiLFxuXHRcdHBlcmNlbnRhZ2VPZkNvbm5lY3RlZFNjaG9vbDogXCI1MFwiLFxuXHRcdGxvZ2luTW9kYWxWaXNpYmlsaXR5OiBmYWxzZSxcblx0XHRhcHBseU1vZGFsVmlzaWJpbGl0eTogZmFsc2UsXG5cdFx0Y291bnRyeVNlbGVjdGVkOiBmYWxzZVxuXHR9O1xuXG5cdGhhbmRsZUNsaWNrID0gZSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50OiBlLmtleVxuXHRcdH0pO1xuXHR9O1xuXG5cdG9wZW5Mb2dpbk1vZGFsID0gZSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2dpbk1vZGFsVmlzaWJpbGl0eTogdHJ1ZVxuXHRcdH0pO1xuXHR9O1xuXG5cdGxvZ2luTW9kYWxoYW5kbGVDYW5jZWwgPSBlID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvZ2luTW9kYWxWaXNpYmlsaXR5OiBmYWxzZVxuXHRcdH0pO1xuXHR9O1xuXG5cdGxvZ2luTW9kYWxoYW5kbGVPayA9IGUgPT4ge1xuXHRcdFJvdXRlci5wdXNoKHtcblx0XHRcdHBhdGhuYW1lOiBcIi9hZG1pblwiXG5cdFx0fSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2dpbk1vZGFsVmlzaWJpbGl0eTogZmFsc2Vcblx0XHR9KTtcblx0fTtcblxuXHRvcGVuQXBwbHlNb2RhbCA9IGUgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YXBwbHlNb2RhbFZpc2liaWxpdHk6IHRydWVcblx0XHR9KTtcblx0fTtcblxuXHRhcHBseU1vZGFsaGFuZGxlQ2FuY2VsID0gZSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhcHBseU1vZGFsVmlzaWJpbGl0eTogZmFsc2Vcblx0XHR9KTtcblx0fTtcblxuXHRhcHBseU1vZGFsaGFuZGxlT2sgPSBlID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFwcGx5TW9kYWxWaXNpYmlsaXR5OiBmYWxzZVxuXHRcdH0pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PEhlYWQgLz5cblxuXHRcdFx0XHQ8SGVhZGVyIHN0eWxlPXt7IHpJbmRleDogMSwgd2lkdGg6IFwiMTAwJVwiIH19PlxuXHRcdFx0XHRcdDxNZW51XG5cdFx0XHRcdFx0XHRzZWxlY3RhYmxlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cblx0XHRcdFx0XHRcdHNlbGVjdGVkS2V5cz17W3RoaXMuc3RhdGUuY3VycmVudF19XG5cdFx0XHRcdFx0XHRtb2RlPVwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdFx0XHR0aGVtZT1cImRhcmtcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIHJvdXRlPXtcIi9cIn0+XG5cdFx0XHRcdFx0XHRcdFx0PGE+IEhvbWU8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvTWVudS5JdGVtPlxuXG5cdFx0XHRcdFx0XHQ8U3ViTWVudVxuXHRcdFx0XHRcdFx0XHR0aXRsZT17XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic3VibWVudS10aXRsZS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbiB0eXBlPVwiZG93blwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRTZWxlY3QgQ291bnRyeVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8TWVudS5JdGVtR3JvdXAgdGl0bGU9XCJBZnJpY2FcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVudS5JdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9XCJzZXR0aW5nOjFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInNlbGVjdGVkIVwiKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y291bnRyeVNlbGVjdGVkOiB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHROaWdlcmlhXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdDwvTWVudS5JdGVtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8L1N1Yk1lbnU+XG5cblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vcGVuQXBwbHlNb2RhbH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdEFwcGx5IGFzIFNjaG9vbC9JU1Bcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cblxuXHRcdFx0XHRcdFx0PE1lbnUuSXRlbT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9wZW5Mb2dpbk1vZGFsfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0TG9naW5cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cblx0XHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdDwvSGVhZGVyPlxuXG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG5cdFx0XHRcdDxMb2dpbk1vZGFsXG5cdFx0XHRcdFx0bG9naW5Nb2RhbFZpc2liaWxpdHk9e3RoaXMuc3RhdGUubG9naW5Nb2RhbFZpc2liaWxpdHl9XG5cdFx0XHRcdFx0bG9naW5Nb2RhbGhhbmRsZUNhbmNlbD17dGhpcy5sb2dpbk1vZGFsaGFuZGxlQ2FuY2VsfVxuXHRcdFx0XHRcdGxvZ2luTW9kYWxoYW5kbGVPaz17dGhpcy5sb2dpbk1vZGFsaGFuZGxlT2t9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxBcHBseU1vZGFsXG5cdFx0XHRcdFx0YXBwbHlNb2RhbFZpc2liaWxpdHk9e3RoaXMuc3RhdGUuYXBwbHlNb2RhbFZpc2liaWxpdHl9XG5cdFx0XHRcdFx0YXBwbHlNb2RhbGhhbmRsZUNhbmNlbD17dGhpcy5hcHBseU1vZGFsaGFuZGxlQ2FuY2VsfVxuXHRcdFx0XHRcdGFwcGx5TW9kYWxoYW5kbGVPaz17dGhpcy5hcHBseU1vZGFsaGFuZGxlT2t9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PEZvb3RlciBzdHlsZT17eyBwb3NpdGlvbjogXCJib3R0b21cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuXHRcdFx0XHRcdDxoMT5VTklDRUYgQ2hhbGxlbmdlOiBSZWR1Y2luZyBUaGUgRGl2aWRlPC9oMT5cblx0XHRcdFx0PC9Gb290ZXI+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVhY3RfY29tcG9uZW50cy9UZW1wbGF0ZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBV0E7QUFDQTs7OztBQVpBO0FBQ0E7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7QUFXQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBR0E7QUFGQTtBQUlBO0FBQ0E7QUFHQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBRkE7QUFFQTtBQUdBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFGQTtBQUlBO0FBQ0E7QUFHQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBRkE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBOztBQUxBO0FBT0E7QUFQQTtBQUNBOztBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7O0FBRkE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFGQTtBQUxBOztBQUFBO0FBQUE7QUFBQTtBQUNBOztBQWFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUFBO0FBQUE7QUFDQTs7QUFPQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7O0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFySUE7QUFDQTtBQTJJQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9