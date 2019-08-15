
          window.__NEXT_REGISTER_PAGE('/applicationForms/schoolApplication', function() {
            var comp = module.exports =
webpackJsonp([3],{

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1126);


/***/ }),

/***/ 1126:
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

var _NewSchoolForm = __webpack_require__(1127);

var _NewSchoolForm2 = _interopRequireDefault(_NewSchoolForm);

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
			return _react2.default.createElement(_Template2.default, null, _react2.default.createElement(_NewSchoolForm2.default, null));
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),

/***/ 1127:
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

var _createNewSchool = __webpack_require__(1128);

var _createNewSchool2 = _interopRequireDefault(_createNewSchool);

var _getListOfCountryManagers = __webpack_require__(62);

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _deployedContracts = __webpack_require__(57);

var _ListofSmartContractAddresses = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _antd.Select.Option;
var TextArea = _antd.Input.TextArea;

var AutoCompleteOption = _antd.AutoComplete.Option;

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
      confirmDirty: false,
      autoCompleteResult: [],
      schoolName: "",
      schoolPopulation: "",
      schoolLocation: "",
      schoolOwnersETHAddress: ""
    }, _this.createNewSchool = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var result, feedback, countryManager, schools;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _this.setState({
                  loading: true
                });

                _context.next = 4;
                return (0, _getListOfCountryManagers2.default)(_ListofSmartContractAddresses.mainContractAddress);

              case 4:
                result = _context.sent;
                _context.next = 7;
                return (0, _createNewSchool2.default)(result[0], _this.state.schoolName, _this.state.schoolPopulation, _this.state.schoolLocation, _this.state.schoolOwnersETHAddress);

              case 7:
                feedback = _context.sent;
                _context.next = 10;
                return (0, _deployedContracts.CountryManagerDeployed)(result[0]);

              case 10:
                countryManager = _context.sent;
                _context.next = 13;
                return countryManager.methods.getDeployedSchools().call();

              case 13:
                schools = _context.sent;

                console.log(schools);

                _this.setState({
                  loading: false,
                  response: schools[schools.length - 1]
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RegistrationForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;
      var autoCompleteResult = this.state.autoCompleteResult;

      var prefixSelector = getFieldDecorator("prefix", {
        initialValue: "234"
      })(_react2.default.createElement(_antd.Select, { style: { width: 70 } }, _react2.default.createElement(Option, { value: "86" }, "+86"), _react2.default.createElement(Option, { value: "87" }, "+87")));

      return _react2.default.createElement("div", null, _react2.default.createElement("br", null), _react2.default.createElement("br", null), _react2.default.createElement(_antd.Form, { onSubmit: this.createNewSchool, style: { padding: "50px 100px" } }, _react2.default.createElement(_antd.Form.Item, { label: "School Name" }, _react2.default.createElement(_antd.Input, {
        value: this.state.schoolName,
        onChange: function onChange(event) {
          return _this3.setState({ schoolName: event.target.value });
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Population" }, _react2.default.createElement(_antd.Input, {
        value: this.state.schoolPopulation,
        onChange: function onChange(event) {
          return _this3.setState({ schoolPopulation: event.target.value });
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Location" }, _react2.default.createElement(_antd.Input, {
        value: this.state.schoolLocation,
        onChange: function onChange(event) {
          return _this3.setState({ schoolLocation: event.target.value });
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Owners Address" }, _react2.default.createElement(_antd.Input, {
        value: this.state.schoolOwnersETHAddress,
        onChange: function onChange(event) {
          return _this3.setState({ schoolOwnersETHAddress: event.target.value });
        }
      })), _react2.default.createElement(_antd.Form.Item, null, _react2.default.createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit",
        loading: this.state.loading
      }, "Register"))), _react2.default.createElement("h3", { style: { padding: "10px 100px" } }, "Deployed School Address : ", this.state.response));
    }
  }]);

  return RegistrationForm;
}(_react2.default.Component);

var WrappedRegistrationForm = _antd.Form.create({ name: "register" })(RegistrationForm);

exports.default = WrappedRegistrationForm;

/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(25);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _deployedContracts = __webpack_require__(57);

var _web = __webpack_require__(69);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//retrieves a list of created country managers
exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address, name, population, location, owner) {
    var accounts, result, school;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _web2.default.eth.getAccounts();

          case 2:
            accounts = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return (0, _deployedContracts.CountryManagerDeployed)(address);

          case 6:
            result = _context.sent;
            _context.next = 9;
            return result.methods.createNewSchool(name, population, location, owner).send({
              from: accounts[0]
            });

          case 9:
            school = _context.sent;

            console.log(school);
            return _context.abrupt("return", school);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);

            console.log(_context.t0);
            return _context.abrupt("return", _context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 14]]);
  }));

  function createNewSchool(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  }

  return createNewSchool;
}();

/***/ })

},[1125]);
            return { page: comp.default }
          })
        