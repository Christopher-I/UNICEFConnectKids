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
                return (0, _getListOfCountryManagers2.default)(_ListofSmartContractAddresses.mainContractAddress);

              case 11:
                addressesOfAllCountryManagers = _context.sent;

                _this.setState({
                  response: addressesOfAllCountryManagers[addressesOfAllCountryManagers.length - 1],
                  loading: false
                });
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](2);

                console.log(_context.t0);
                _this.setState({ errorMessage: _context.t0.message });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 15]]);
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
          lineNumber: 121
        }
      }, _react2.default.createElement(Option, { value: "86", __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "+86"), _react2.default.createElement(Option, { value: "87", __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "+87")));

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement("h1", { style: { padding: "20px 20px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, " Welcome Admin! "), _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement(_antd.Col, { span: 12, style: { padding: "20px 20px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, " List of Pending School Applications Awaiting Decision"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, " List of ISP Applications Awaiting Decision")), _react2.default.createElement(_antd.Col, { span: 12, style: { padding: "20px 20px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement(_antd.Form, { onSubmit: this.createNewCountryM, __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, " Add new Country Manager "), _react2.default.createElement(_antd.Form.Item, { label: "Country Name", __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.countryName,
        onChange: function onChange(event) {
          return _this3.setState({ countryName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      })), _react2.default.createElement(_antd.Form.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit",
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "Register"))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "Country Manager Address : ", this.state.response))));
    }
  }]);

  return RegistrationForm;
}(_react2.default.Component);

var WrappedRegistrationForm = _antd.Form.create({ name: "register" })(RegistrationForm);

exports.default = WrappedRegistrationForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvZm9ybXMvTmV3Q291bnRyeU1hbmFnZXIuanMiXSwibmFtZXMiOlsiRm9ybSIsIklucHV0IiwiVG9vbHRpcCIsIkljb24iLCJDYXNjYWRlciIsIlNlbGVjdCIsIlJvdyIsIkNvbCIsIkNoZWNrYm94IiwiQnV0dG9uIiwiQXV0b0NvbXBsZXRlIiwiTWFpbkRlcGxveWVkIiwid2ViMyIsIkdldExpc3RPZkNvdW50cnlNYW5hZ2VycyIsIkNyZWF0ZU5ld0NvdW50cnlNYW5nZXIiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwib3duZXIiLCJHZXRDb3VudHJ5TWFuYWdlclN1bW1hcnkiLCJHZXRTY2hvb2xTdW1tYXJ5IiwiR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeSIsIkdldFN1bW1hcnlPZkFsbElTUHNJbkNvdW50cnkiLCJPcHRpb24iLCJUZXh0QXJlYSIsIkF1dG9Db21wbGV0ZU9wdGlvbiIsImNvdW50cnlNYW5hZ2Vyc0xpc3QiLCJSZWdpc3RyYXRpb25Gb3JtIiwic3RhdGUiLCJjb3VudHJ5TmFtZSIsImNvbmZpcm1EaXJ0eSIsImF1dG9Db21wbGV0ZVJlc3VsdCIsImVycm9yTWVzc2FnZSIsInJlc3BvbnNlIiwibG9hZGluZyIsImNyZWF0ZU5ld0NvdW50cnlNIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJyZXN1bHQiLCJhZGRyZXNzIiwiYWRkcmVzc2VzT2ZBbGxDb3VudHJ5TWFuYWdlcnMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImdldExpc3RPZkNvdW50cnlNYW5hZ2VycyIsImdldENvdW50cnlNYW5hZ2Vyc1N1bW1hcnkiLCJjb3VudHJ5TWFuYWdlck5pZ2VyaWEiLCJjb3VudHJ5TWFuYWdlck5pZ2VyaWFTdW1tYXJ5IiwiZ2V0RmllbGREZWNvcmF0b3IiLCJwcm9wcyIsImZvcm0iLCJwcmVmaXhTZWxlY3RvciIsImluaXRpYWxWYWx1ZSIsIndpZHRoIiwicGFkZGluZyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIldyYXBwZWRSZWdpc3RyYXRpb25Gb3JtIiwiY3JlYXRlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBUyxBQUFvQjs7QUFDN0IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBOEI7Ozs7QUFDckMsQUFBTyxBQUE0Qjs7OztBQUNuQyxBQUNFLEFBQ0EsQUFDSzs7QUFDUCxBQUNFLEFBQ0EsQUFDSzs7QUFDUCxBQUFPLEFBQXFDOzs7O0FBQzVDLEFBQU8sQUFBa0M7Ozs7Ozs7OztJLEFBRWpDLFNBQVcsQSxhQUFYLEE7SUFDQSxBLFcsQUFBYSxZQUFiLEE7O0FBQ1IsSUFBTSxxQkFBcUIsbUJBQTNCLEFBQXdDO0FBQ3hDLElBQU0sc0JBQU4sQUFBNEI7QUFDNUI7O0lBRU0sQTs7Ozs7Ozs7Ozs7Ozs7O2dPLEFBQ0o7bUJBQVEsQUFDTyxBQUNiO29CQUZNLEFBRVEsQUFDZDswQkFITSxBQUdjLEFBQ3BCO29CQUpNLEFBSVEsQUFDZDtnQkFMTSxBQUtJLEFBQ1Y7ZUFBUyxBLEFBTkg7QUFBQSxBQUNOLGFBV0YsQTsyRkFBb0IsaUJBQUEsQUFBTSxHQUFOOzZCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNsQjtrQkFBQSxBQUFFLEFBQ0Y7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FGRSxBQUVsQixBQUFjLEFBQVc7Z0NBRlA7Z0NBQUE7dUJBQUEsQUFJRyxBQUFhOzttQkFBNUI7QUFKWSxrQ0FBQTtnQ0FBQTt1QkFNSSxBQUNsQiwwRkFDQSxNQUFBLEFBQUssTUFSUyxBQU1JLEFBRVA7O21CQUZUO0FBTlksbUNBQUE7Z0NBQUE7dUJBQUEsQUFXNEIsQUFDMUM7O21CQURJO0FBWFUseURBZWhCOztzQkFBQSxBQUFLOzRCQUVELDhCQUNF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QUssT0FBWCxBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BRDNCLEFBQ1IsQUFBYyxBQUE0QjtBQUg5Qzs7b0JBQUE7c0JBSEosQUFFRSxBQUNFLEFBUUY7QUFSRTtBQUNFLDJCQU9ILGNBQUQsV0FBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2NBQUQsQUFDTyxBQUNMO2tCQUZGLEFBRVcsQUFDVDtpQkFBUyxLQUFBLEFBQUssTUFIaEIsQUFHc0I7O29CQUh0QjtzQkFBQTtBQUFBO0FBQ0UsU0FkUixBQUNFLEFBV0UsQUFDRSxBQVNKOztvQkFBQTtzQkF0QkYsQUFzQkUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQStCLG1DQUFBLEFBQUssTUFqQzVDLEFBQ0UsQUFFRSxBQU9FLEFBdUJFLEFBQTBDLEFBS25EOzs7OztFQWxJNEIsZ0IsQUFBTTs7QUFxSXJDLElBQU0sMEJBQTBCLFdBQUEsQUFBSyxPQUFPLEVBQUUsTUFBZCxBQUFZLEFBQVEsY0FBcEQsQUFBZ0MsQUFDOUIsQUFHRjs7a0JBQUEsQUFBZSIsImZpbGUiOiJOZXdDb3VudHJ5TWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==