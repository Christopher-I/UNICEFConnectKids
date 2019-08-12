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

var _getSummaryOfAllSchoolsInCountry = require("../../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry");

var _getSummaryOfAllSchoolsInCountry2 = _interopRequireDefault(_getSummaryOfAllSchoolsInCountry);

var _getSummaryOfAll_ISPsInCountry = require("../../ethereum/deployedContractCalls/countryManager/getSummaryOfAll_ISPsInCountry");

var _getSummaryOfAll_ISPsInCountry2 = _interopRequireDefault(_getSummaryOfAll_ISPsInCountry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/forms/NewCountryManager.js";


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
      })(_react2.default.createElement(_antd.Select, { style: { width: 70 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(Option, { value: "86", __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "+86"), _react2.default.createElement(Option, { value: "87", __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "+87")));

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, " Welcome Admin! "), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, " Address: ", this.state.address), _react2.default.createElement(_antd.Button, { type: "primary", onClick: this.getListOfCountryManagers, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "Get List of Country Managers"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), _react2.default.createElement(_antd.Button, { type: "primary", onClick: this.getCountryManagersSummary, __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "Get getCountryManagersSummary"), _react2.default.createElement(_antd.Form, {
        onSubmit: this.createNewCountryM,
        style: { padding: "50px 100px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, " Add new Country Manager "), _react2.default.createElement(_antd.Form.Item, { label: "Country Name", __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.countryName,
        onChange: function onChange(event) {
          return _this3.setState({ countryName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Additional Details", __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement(TextArea, { rows: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      })), _react2.default.createElement(_antd.Form.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement(_antd.Button, { type: "primary", htmlType: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "Register"))));
    }
  }]);

  return RegistrationForm;
}(_react2.default.Component);

var WrappedRegistrationForm = _antd.Form.create({ name: "register" })(RegistrationForm);

exports.default = WrappedRegistrationForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvZm9ybXMvTmV3Q291bnRyeU1hbmFnZXIuanMiXSwibmFtZXMiOlsiRm9ybSIsIklucHV0IiwiVG9vbHRpcCIsIkljb24iLCJDYXNjYWRlciIsIlNlbGVjdCIsIlJvdyIsIkNvbCIsIkNoZWNrYm94IiwiQnV0dG9uIiwiQXV0b0NvbXBsZXRlIiwiTWFpbkRlcGxveWVkIiwid2ViMyIsIkdldExpc3RPZkNvdW50cnlNYW5hZ2VycyIsIkNyZWF0ZU5ld0NvdW50cnlNYW5nZXIiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwib3duZXIiLCJHZXRDb3VudHJ5TWFuYWdlclN1bW1hcnkiLCJHZXRTY2hvb2xTdW1tYXJ5IiwiR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeSIsIkdldFN1bW1hcnlPZkFsbElTUHNJbkNvdW50cnkiLCJPcHRpb24iLCJUZXh0QXJlYSIsIkF1dG9Db21wbGV0ZU9wdGlvbiIsImNvdW50cnlNYW5hZ2Vyc0xpc3QiLCJSZWdpc3RyYXRpb25Gb3JtIiwic3RhdGUiLCJjb3VudHJ5TmFtZSIsImNvbmZpcm1EaXJ0eSIsImF1dG9Db21wbGV0ZVJlc3VsdCIsImVycm9yTWVzc2FnZSIsImNyZWF0ZU5ld0NvdW50cnlNIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzdWx0IiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1lc3NhZ2UiLCJnZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnMiLCJnZXRDb3VudHJ5TWFuYWdlcnNTdW1tYXJ5IiwiY291bnRyeU1hbmFnZXJOaWdlcmlhIiwiY291bnRyeU1hbmFnZXJOaWdlcmlhU3VtbWFyeSIsImdldEZpZWxkRGVjb3JhdG9yIiwicHJvcHMiLCJmb3JtIiwicHJlZml4U2VsZWN0b3IiLCJpbml0aWFsVmFsdWUiLCJ3aWR0aCIsInBhZGRpbmciLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJXcmFwcGVkUmVnaXN0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LFdBQUEsQUFBTSxRQUFLLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLFlBQVMsTUFBVixBQUFnQjtvQkFBaEI7c0JBZkosQUFjRSxBQUNFLEFBR0Y7QUFIRTsyQkFHRCxjQUFELFdBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBTyxNQUFSLEFBQWEsV0FBVSxVQUF2QixBQUFnQztvQkFBaEM7c0JBQUE7QUFBQTtTQWpDUixBQUNFLEFBYUUsQUFrQkUsQUFDRSxBQU9UOzs7OztFQXRINEIsZ0IsQUFBTTs7QUF5SHJDLElBQU0sMEJBQTBCLFdBQUEsQUFBSyxPQUFPLEVBQUUsTUFBZCxBQUFZLEFBQVEsY0FBcEQsQUFBZ0MsQUFDOUIsQUFHRjs7a0JBQUEsQUFBZSIsImZpbGUiOiJOZXdDb3VudHJ5TWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==