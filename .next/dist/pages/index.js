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

var _Layout = require("../react_components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/pages/index.js?entry";


//define layout properties
var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer;

//define Menu properties

var menu = _react2.default.createElement(_antd.Menu, {
	__source: {
		fileName: _jsxFileName,
		lineNumber: 11
	}
}, _react2.default.createElement(_antd.Menu.Item, {
	__source: {
		fileName: _jsxFileName,
		lineNumber: 12
	}
}, _react2.default.createElement("a", {
	target: "_blank",
	rel: "noopener noreferrer",
	href: "http://www.alipay.com/",
	__source: {
		fileName: _jsxFileName,
		lineNumber: 13
	}
}, "Nigeria")));

var Home = function (_React$Component) {
	(0, _inherits3.default)(Home, _React$Component);

	function Home() {
		(0, _classCallCheck3.default)(this, Home);

		return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
	}

	(0, _createClass3.default)(Home, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}), _react2.default.createElement(Header, { style: { zIndex: 1, width: "100%" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, _react2.default.createElement(_antd.Dropdown, { overlay: menu, __source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, _react2.default.createElement("a", {
				style: { size: "large" },
				className: "ant-dropdown-link",
				href: "#",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, "Select Country ", _react2.default.createElement(_antd.Icon, { type: "down", __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			})))), _react2.default.createElement(Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, " This is content")), _react2.default.createElement(Footer, { style: { position: "bottom", textAlign: "center" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement("h1", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, "UNICEF CONNECT KIDS AROUND THE WORLD HACKATHON")));
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJDU1MiLCJMYXlvdXQiLCJNZW51IiwiSWNvbiIsIkJ1dHRvbiIsIkRyb3Bkb3duIiwiVGFicyIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJtZW51IiwiSG9tZSIsInpJbmRleCIsIndpZHRoIiwic2l6ZSIsInBvc2l0aW9uIiwidGV4dEFsaWduIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFVOzs7Ozs7O0FBRS9DO0ksQUFDUSxTQUE0QixBLGFBQTVCLEE7SUFBUSxBLFUsQUFBb0IsYSxBQUFwQjtJQUFTLEEsU0FBVyxBLGFBQVgsQTs7QUFFekI7O0FBQ0EsSUFBTSx1QkFDTCxBQUFDOztZQUFEO2NBQUEsQUFDQztBQUREO0FBQUEsQ0FBQSxrQkFDRSxjQUFELFdBQUEsQUFBTTs7WUFBTjtjQUFBLEFBQ0M7QUFERDtBQUFBLG1CQUNDLGNBQUE7U0FBQSxBQUNRLEFBQ1A7TUFGRCxBQUVLLEFBQ0o7T0FIRCxBQUdNOztZQUhOO2NBQUE7QUFBQTtBQUNDLEdBSkosQUFDQyxBQUNDLEFBQ0M7O0ksQUFXRzs7Ozs7Ozs7Ozs7MkJBQ0ksQUFDUjswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsQUFBQzs7ZUFBRDtpQkFERCxBQUNDLEFBRUE7QUFGQTtBQUFBLHVCQUVDLGNBQUQsVUFBUSxPQUFPLEVBQUUsUUFBRixBQUFVLEdBQUcsT0FBNUIsQUFBZSxBQUFvQjtlQUFuQztpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyxnQ0FBUyxTQUFWLEFBQW1CO2VBQW5CO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBO1dBQ1EsRUFBRSxNQURWLEFBQ1EsQUFBUSxBQUNmO2VBRkQsQUFFVyxBQUNWO1VBSEQsQUFHTTs7ZUFITjtpQkFBQTtBQUFBO0FBQ0MsTUFJZSxtQ0FBQSxBQUFDLDRCQUFLLE1BQU4sQUFBVztlQUFYO2lCQVZuQixBQUdDLEFBQ0MsQUFDQyxBQUtnQixBQUlsQjtBQUprQjswQkFJakIsY0FBRDs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQWZGLEFBY0MsQUFDQyxBQUVELHNDQUFDLGNBQUQsVUFBUSxPQUFPLEVBQUUsVUFBRixBQUFZLFVBQVUsV0FBckMsQUFBZSxBQUFpQztlQUFoRDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFuQkgsQUFDQyxBQWlCQyxBQUNDLEFBSUg7Ozs7O0VBekJpQixnQkFBTSxBLEFBNEJ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==