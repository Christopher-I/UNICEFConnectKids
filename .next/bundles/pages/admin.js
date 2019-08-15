
          window.__NEXT_REGISTER_PAGE('/admin', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(25);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(34);

var _deployedContracts = __webpack_require__(57);

var _web = __webpack_require__(69);

var _web2 = _interopRequireDefault(_web);

var _getListOfCountryManagers = __webpack_require__(62);

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _createNewCountryManager = __webpack_require__(159);

var _createNewCountryManager2 = _interopRequireDefault(_createNewCountryManager);

var _ListofSmartContractAddresses = __webpack_require__(52);

var _getContractSummary = __webpack_require__(63);

var _getSummaryOfAllSchoolsInCountry = __webpack_require__(122);

var _getSummaryOfAllSchoolsInCountry2 = _interopRequireDefault(_getSummaryOfAllSchoolsInCountry);

var _getSummaryOfAll_ISPsInCountry = __webpack_require__(237);

var _getSummaryOfAll_ISPsInCountry2 = _interopRequireDefault(_getSummaryOfAll_ISPsInCountry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _antd.Select.Option;
var TextArea = _antd.Input.TextArea;

var AutoCompleteOption = _antd.AutoComplete.Option;
var countryManagersList = [];
//let summary;

var RegistrationForm = function (_React$Component) {
  (0, _inherits3.default)(RegistrationForm, _React$Component);

  function RegistrationForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RegistrationForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RegistrationForm.__proto__ || (0, _getPrototypeOf2.default)(RegistrationForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      countryName: "",
      confirmDirty: false,
      autoCompleteResult: [],
      errorMessage: "",
      response: "",
      loading: false
    }, _this.createNewCountryM = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var result, address, addressesOfAllCountryManagers;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _this.setState({ loading: true });
                _context.prev = 2;
                _context.next = 5;
                return (0, _deployedContracts.MainDeployed)(_ListofSmartContractAddresses.mainContractAddress);

              case 5:
                result = _context.sent;
                _context.next = 8;
                return (0, _createNewCountryManager2.default)(_ListofSmartContractAddresses.mainContractAddress, _this.state.countryName);

              case 8:
                address = _context.sent;
                _context.next = 11;
                return (0, _getListOfCountryManagers2.default)(_ListofSmartContractAddresses.mainContractAddress).this.setState({
                  response: addressesOfAllCountryManagers[addressesOfAllCountryManagers.length - 1],
                  loading: false
                });

              case 11:
                addressesOfAllCountryManagers = _context.sent;
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](2);

                console.log(_context.t0);
                _this.setState({ errorMessage: _context.t0.message });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.getListOfCountryManagers = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
        var result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                _context2.prev = 1;
                _context2.next = 4;
                return (0, _getListOfCountryManagers2.default)(_ListofSmartContractAddresses.mainContractAddress);

              case 4:
                result = _context2.sent;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);

                _this.setState({ errorMessage: _context2.t0.message });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 7]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.getCountryManagersSummary = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(e) {
        var result, countryManagerNigeria, countryManagerNigeriaSummary;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                e.preventDefault();

                _context3.prev = 1;
                _context3.next = 4;
                return (0, _getListOfCountryManagers2.default)(_ListofSmartContractAddresses.mainContractAddress);

              case 4:
                result = _context3.sent;

                //the first country oin the away is Nigeria
                countryManagerNigeria = result[0];
                //get the summary of the contract manager of Nigeria

                _context3.next = 8;
                return (0, _getContractSummary.GetCountryManagerSummary)(countryManagerNigeria);

              case 8:
                countryManagerNigeriaSummary = _context3.sent;
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);

                _this.setState({ errorMessage: _context3.t0.message });

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[1, 11]]);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RegistrationForm, [{
    key: "componentDidMount",
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidMount() {
        return _ref5.apply(this, arguments);
      }

      return componentDidMount;
    }()

    //creates a new country manager


    //retrieves a list of created country managers

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;
      var autoCompleteResult = this.state.autoCompleteResult;

      var prefixSelector = getFieldDecorator("prefix", {
        initialValue: "234"
      })(_react2.default.createElement(_antd.Select, { style: { width: 70 } }, _react2.default.createElement(Option, { value: "86" }, "+86"), _react2.default.createElement(Option, { value: "87" }, "+87")));

      return _react2.default.createElement("div", null, _react2.default.createElement("h1", { style: { padding: "20px 20px" } }, " Welcome Admin! "), _react2.default.createElement(_antd.Row, null, _react2.default.createElement(_antd.Col, { span: 12, style: { padding: "20px 20px" } }, _react2.default.createElement("div", null, " List of Pending School Applications Awaiting Decision"), _react2.default.createElement("br", null), _react2.default.createElement("div", null, " List of ISP Applications Awaiting Decision")), _react2.default.createElement(_antd.Col, { span: 12, style: { padding: "20px 20px" } }, _react2.default.createElement(_antd.Form, { onSubmit: this.createNewCountryM }, _react2.default.createElement("h4", null, " Add new Country Manager "), _react2.default.createElement(_antd.Form.Item, { label: "Country Name" }, _react2.default.createElement(_antd.Input, {
        value: this.state.countryName,
        onChange: function onChange(event) {
          return _this3.setState({ countryName: event.target.value });
        }
      })), _react2.default.createElement(_antd.Form.Item, null, _react2.default.createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit",
        loading: this.state.loading
      }, "Register"))), _react2.default.createElement("br", null), _react2.default.createElement("h3", null, "Country Manager Address : ", this.state.response))));
    }
  }]);

  return RegistrationForm;
}(_react2.default.Component);

var WrappedRegistrationForm = _antd.Form.create({ name: "register" })(RegistrationForm);

exports.default = WrappedRegistrationForm;

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(602);


/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Template = __webpack_require__(131);

var _Template2 = _interopRequireDefault(_Template);

var _NewCountryManager = __webpack_require__(1120);

var _NewCountryManager2 = _interopRequireDefault(_NewCountryManager);

var _antd = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Admin = function (_React$Component) {
	(0, _inherits3.default)(Admin, _React$Component);

	function Admin() {
		(0, _classCallCheck3.default)(this, Admin);

		return (0, _possibleConstructorReturn3.default)(this, (Admin.__proto__ || (0, _getPrototypeOf2.default)(Admin)).apply(this, arguments));
	}

	(0, _createClass3.default)(Admin, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_Template2.default, null, _react2.default.createElement(_NewCountryManager2.default, null));
		}
	}]);

	return Admin;
}(_react2.default.Component);

exports.default = Admin;

/***/ })

},[601]);
            return { page: comp.default }
          })
        