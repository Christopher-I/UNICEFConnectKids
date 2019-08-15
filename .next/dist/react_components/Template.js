"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Head = require("./Head");

var _Head2 = _interopRequireDefault(_Head);

var _SchoolTable = require("./tables/SchoolTable");

var _SchoolTable2 = _interopRequireDefault(_SchoolTable);

var _LoginModal = require("./modals/LoginModal");

var _LoginModal2 = _interopRequireDefault(_LoginModal);

var _ApplyModal = require("./modals/ApplyModal");

var _ApplyModal2 = _interopRequireDefault(_ApplyModal);

var _ViewConnectivity = require("./ViewConnectivity");

var _ViewConnectivity2 = _interopRequireDefault(_ViewConnectivity);

var _routes = require("../routes");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//define extract child properties
var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer;
//import {openLoginModal} from "./modals/modalFunctions"

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

			var childrenWithProps = _react2.default.Children.map(this.props.children, function (child) {
				return _react2.default.cloneElement(child, {
					countrySelected: _this2.state.countrySelected
				});
			});
			return _react2.default.createElement(_antd.Layout, null, _react2.default.createElement(_Head2.default, null), _react2.default.createElement(Header, { style: { zIndex: 1, width: "100%" } }, _react2.default.createElement(_antd.Menu, {
				selectable: "false",
				onClick: this.handleClick,
				selectedKeys: [this.state.current],
				mode: "horizontal",
				theme: "dark"
			}, _react2.default.createElement(_antd.Menu.Item, {
				onClick: function onClick() {
					console.log("selected!");
					_this2.setState({
						countrySelected: false
					});
				}
			}, _react2.default.createElement(_routes.Link, { route: "/" }, _react2.default.createElement("a", null, " Home"))), _react2.default.createElement(SubMenu, {
				title: _react2.default.createElement("span", { className: "submenu-title-wrapper" }, _react2.default.createElement(_antd.Icon, { type: "down" }), "Select Country")
			}, _react2.default.createElement(_antd.Menu.ItemGroup, { title: "Africa" }, _react2.default.createElement(_antd.Menu.Item, {
				key: "setting:1",
				onClick: function onClick() {
					_this2.setState({
						countrySelected: true
					});
				}
			}, "Nigeria"))), _react2.default.createElement(_antd.Menu.Item, null, _react2.default.createElement(_antd.Button, {
				type: "primary",
				onClick: this.openApplyModal
			}, "Apply as School/ISP")), _react2.default.createElement(_antd.Menu.Item, null, _react2.default.createElement(_antd.Button, {
				type: "primary",
				onClick: this.openLoginModal
			}, "Login")))), childrenWithProps, _react2.default.createElement(_LoginModal2.default, {
				loginModalVisibility: this.state.loginModalVisibility,
				loginModalhandleCancel: this.loginModalhandleCancel,
				loginModalhandleOk: this.loginModalhandleOk
			}), _react2.default.createElement(_ApplyModal2.default, {
				applyModalVisibility: this.state.applyModalVisibility,
				applyModalhandleCancel: this.applyModalhandleCancel,
				applyModalhandleOk: this.applyModalhandleOk
			}), _react2.default.createElement(Footer, { style: { position: "bottom", textAlign: "center" } }, _react2.default.createElement("h1", null, "UNICEF Challenge: Reducing The Divide")));
		}
	}]);

	return Template;
}(_react2.default.Component);

exports.default = Template;