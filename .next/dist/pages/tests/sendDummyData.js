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

var _sendDummyData = require("../../ethereum/deployedContractCalls/school/sendDummyData");

var _sendDummyData2 = _interopRequireDefault(_sendDummyData);

var _antd = require("antd");

var _ListofSmartContractAddresses = require("../../ethereum/ListofSmartContractAddresses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendDummyData = function (_React$Component) {
	(0, _inherits3.default)(sendDummyData, _React$Component);

	function sendDummyData() {
		(0, _classCallCheck3.default)(this, sendDummyData);

		return (0, _possibleConstructorReturn3.default)(this, (sendDummyData.__proto__ || (0, _getPrototypeOf2.default)(sendDummyData)).apply(this, arguments));
	}

	(0, _createClass3.default)(sendDummyData, [{
		key: "CallDummyData",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								e.preventDefault();
								_context.t0 = console;
								_context.next = 4;
								return (0, _sendDummyData2.default)(_ListofSmartContractAddresses.schoolAddress);

							case 4:
								_context.t1 = _context.sent;

								_context.t0.log.call(_context.t0, _context.t1);

							case 6:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function CallDummyData(_x) {
				return _ref.apply(this, arguments);
			}

			return CallDummyData;
		}()
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Button, { onClick: this.CallDummyData }, "Send Dummy Data ");
		}
	}]);

	return sendDummyData;
}(_react2.default.Component);

exports.default = sendDummyData;