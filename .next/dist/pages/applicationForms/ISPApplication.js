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

var _Template = require("../../react_components/Template");

var _Template2 = _interopRequireDefault(_Template);

var _NewISPForm = require("../../react_components/forms/NewISPForm");

var _NewISPForm2 = _interopRequireDefault(_NewISPForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
	(0, _inherits3.default)(Home, _React$Component);

	function Home() {
		(0, _classCallCheck3.default)(this, Home);

		return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
	}

	(0, _createClass3.default)(Home, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_Template2.default, null, _react2.default.createElement(_NewISPForm2.default, null));
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;