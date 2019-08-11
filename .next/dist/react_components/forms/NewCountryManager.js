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

var _antd = require("antd");

var _deployedContracts = require("../../ethereum/deployedContractCalls/deployedContracts");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _getListOfCountryManagers = require("../../ethereum/deployedContractCalls/main/getListOfCountryManagers");

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _createNewCountryManager = require("../../ethereum/deployedContractCalls/main/createNewCountryManager");

var _createNewCountryManager2 = _interopRequireDefault(_createNewCountryManager);

var _ListofSmartContractAddresses = require("../../ethereum/ListofSmartContractAddresses");

var _getContractSummary = require("../../ethereum/deployedContractCalls/getContractSummary");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/forms/NewCountryManager.js";


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
      countryName: "",
      confirmDirty: false,
      autoCompleteResult: [],
      errorMessage: ""
    }, _this.createNewCountryM = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var result, address;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.prev = 1;
                _context.next = 4;
                return (0, _deployedContracts.MainDeployed)(_ListofSmartContractAddresses.mainContractAddress);

              case 4:
                result = _context.sent;
                _context.next = 7;
                return (0, _createNewCountryManager2.default)(_ListofSmartContractAddresses.mainContractAddress, _this.state.countryName);

              case 7:
                address = _context.sent;

                console.log(address);
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);

                console.log(_context.t0);
                _this.setState({ errorMessage: _context.t0.message });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 11]]);
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
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(e) {
        var result, result1;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                e.preventDefault();
                _context4.prev = 1;
                _context4.next = 4;
                return (0, _getListOfCountryManagers2.default)(_ListofSmartContractAddresses.mainContractAddress);

              case 4:
                result = _context4.sent;
                _context4.next = 7;
                return result.map(function () {
                  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(value, index) {
                    var result2;
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return (0, _getContractSummary.GetCountryManagerSummary)(value);

                          case 2:
                            result2 = _context3.sent;

                            console.log(result2);

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, _this2);
                  }));

                  return function (_x4, _x5) {
                    return _ref5.apply(this, arguments);
                  };
                }());

              case 7:
                result1 = _context4.sent;
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](1);

                _this.setState({ errorMessage: _context4.t0.message });

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this2, [[1, 10]]);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RegistrationForm, [{
    key: "componentDidMount",
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _ref6.apply(this, arguments);
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
      })(_react2.default.createElement(_antd.Select, { style: { width: 70 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(Option, { value: "86", __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "+86"), _react2.default.createElement(Option, { value: "87", __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "+87")));

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, " Welcome Admin! "), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, " Address: ", this.state.address), _react2.default.createElement(_antd.Button, { type: "primary", onClick: this.getListOfCountryManagers, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Get List of Country Managers"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), _react2.default.createElement(_antd.Button, { type: "primary", onClick: this.getCountryManagersSummary, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "Get getCountryManagersSummary"), _react2.default.createElement(_antd.Form, {
        onSubmit: this.createNewCountryM,
        style: { padding: "50px 100px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, " Add new Country Manager "), _react2.default.createElement(_antd.Form.Item, { label: "Country Name", __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.countryName,
        onChange: function onChange(event) {
          return _this3.setState({ countryName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Additional Details", __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(TextArea, { rows: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      })), _react2.default.createElement(_antd.Form.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_antd.Button, { type: "primary", htmlType: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "Register"))));
    }
  }]);

  return RegistrationForm;
}(_react2.default.Component);

var WrappedRegistrationForm = _antd.Form.create({ name: "register" })(RegistrationForm);

exports.default = WrappedRegistrationForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvZm9ybXMvTmV3Q291bnRyeU1hbmFnZXIuanMiXSwibmFtZXMiOlsiRm9ybSIsIklucHV0IiwiVG9vbHRpcCIsIkljb24iLCJDYXNjYWRlciIsIlNlbGVjdCIsIlJvdyIsIkNvbCIsIkNoZWNrYm94IiwiQnV0dG9uIiwiQXV0b0NvbXBsZXRlIiwiTWFpbkRlcGxveWVkIiwid2ViMyIsIkdldExpc3RPZkNvdW50cnlNYW5hZ2VycyIsIkNyZWF0ZU5ld0NvdW50cnlNYW5nZXIiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwiR2V0Q291bnRyeU1hbmFnZXJTdW1tYXJ5IiwiT3B0aW9uIiwiVGV4dEFyZWEiLCJBdXRvQ29tcGxldGVPcHRpb24iLCJSZWdpc3RyYXRpb25Gb3JtIiwic3RhdGUiLCJjb3VudHJ5TmFtZSIsImNvbmZpcm1EaXJ0eSIsImF1dG9Db21wbGV0ZVJlc3VsdCIsImVycm9yTWVzc2FnZSIsImNyZWF0ZU5ld0NvdW50cnlNIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzdWx0IiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1lc3NhZ2UiLCJnZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnMiLCJnZXRDb3VudHJ5TWFuYWdlcnNTdW1tYXJ5IiwibWFwIiwidmFsdWUiLCJpbmRleCIsInJlc3VsdDIiLCJyZXN1bHQxIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJwcm9wcyIsImZvcm0iLCJwcmVmaXhTZWxlY3RvciIsImluaXRpYWxWYWx1ZSIsIndpZHRoIiwicGFkZGluZyIsImV2ZW50IiwidGFyZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJXcmFwcGVkUmVnaXN0cmF0aW9uRm9ybSIsImNyZWF0ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxB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RUUsQUFJSjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7O29CQUFBO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQUhGLEFBR0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQWUsbUJBQUEsQUFBSyxNQUp0QixBQUlFLEFBQTBCLEFBQzFCLDBCQUFBLEFBQUMsOEJBQU8sTUFBUixBQUFhLFdBQVUsU0FBUyxLQUFoQyxBQUFxQztvQkFBckM7c0JBQUE7QUFBQTtTQUxGLEFBS0UsQUFHQTs7b0JBQUE7c0JBUkYsQUFRRSxBQUNBO0FBREE7QUFBQTs7b0JBQ0E7c0JBVEYsQUFTRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDLDhCQUFPLE1BQVIsQUFBYSxXQUFVLFNBQVMsS0FBaEMsQUFBcUM7b0JBQXJDO3NCQUFBO0FBQUE7U0FWRixBQVVFLEFBR0Esa0RBQUEsQUFBQztrQkFDVyxLQURaLEFBQ2lCLEFBQ2Y7ZUFBTyxFQUFFLFNBRlgsQUFFUyxBQUFXOztvQkFGcEI7c0JBQUEsQUFJRTtBQUpGO0FBQ0UseUJBR0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUNBLDhDQUFDLGNBQUQsV0FBQSxBQUFNLFFBQUssT0FBWCxBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BRDNCLEFBQ1IsQUFBYyxBQUE0QjtBQUg5Qzs7b0JBQUE7c0JBTkosQUFLRSxBQUNFLEFBUUY7QUFSRTtBQUNFLDJCQU9ILGNBQUQsV0FBQSxBQUFNLFFBQUssT0FBWCxBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsWUFBUyxNQUFWLEFBQWdCO29CQUFoQjtzQkFmSixBQWNFLEFBQ0UsQUFHRjtBQUhFOzJCQUdELGNBQUQsV0FBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFPLE1BQVIsQUFBYSxXQUFVLFVBQXZCLEFBQWdDO29CQUFoQztzQkFBQTtBQUFBO1NBakNSLEFBQ0UsQUFhRSxBQWtCRSxBQUNFLEFBT1Q7Ozs7O0VBeEc0QixnQixBQUFNOztBQTJHckMsSUFBTSwwQkFBMEIsV0FBQSxBQUFLLE9BQU8sRUFBRSxNQUFkLEFBQVksQUFBUSxjQUFwRCxBQUFnQyxBQUM5QixBQUdGOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik5ld0NvdW50cnlNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9