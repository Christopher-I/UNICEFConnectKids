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

var _connectivityDetails = require("../../react_components/modals/connectivityDetails");

var _connectivityDetails2 = _interopRequireDefault(_connectivityDetails);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sample = function (_React$Component) {
	(0, _inherits3.default)(sample, _React$Component);

	function sample() {
		(0, _classCallCheck3.default)(this, sample);

		return (0, _possibleConstructorReturn3.default)(this, (sample.__proto__ || (0, _getPrototypeOf2.default)(sample)).apply(this, arguments));
	}

	(0, _createClass3.default)(sample, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_connectivityDetails2.default, null);
		}
	}]);

	return sample;
}(_react2.default.Component);

exports.default = sample;