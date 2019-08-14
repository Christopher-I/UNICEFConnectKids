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

var _createNewSchool = require("../../ethereum/deployedContractCalls/countryManager/createNewSchool");

var _createNewSchool2 = _interopRequireDefault(_createNewSchool);

var _getListOfCountryManagers = require("../../ethereum/deployedContractCalls/main/getListOfCountryManagers");

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _ListofSmartContractAddresses = require("../../ethereum/ListofSmartContractAddresses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/forms/NewSchoolForm.js";


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
        var result, feedback;
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

                console.log(feedback);

                _this.setState({
                  loading: false,
                  response: feedback.to
                });

              case 10:
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
      })(_react2.default.createElement(_antd.Select, { style: { width: 70 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(Option, { value: "86", __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "+86"), _react2.default.createElement(Option, { value: "87", __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "+87")));

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement(_antd.Form, { onSubmit: this.createNewSchool, style: { padding: "50px 100px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_antd.Form.Item, { label: "School Name", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.schoolName,
        onChange: function onChange(event) {
          return _this3.setState({ schoolName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Population", __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.schoolPopulation,
        onChange: function onChange(event) {
          return _this3.setState({ schoolPopulation: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Location", __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.schoolLocation,
        onChange: function onChange(event) {
          return _this3.setState({ schoolLocation: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Owners Address", __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.schoolOwnersETHAddress,
        onChange: function onChange(event) {
          return _this3.setState({ schoolOwnersETHAddress: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Contact Info", __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_antd.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Additional Details", __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(TextArea, { rows: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })), _react2.default.createElement(_antd.Form.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit",
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "Register"))), _react2.default.createElement("h3", { style: { padding: "10px 100px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "Deployed School Address : ", this.state.response));
    }
  }]);

  return RegistrationForm;
}(_react2.default.Component);

var WrappedRegistrationForm = _antd.Form.create({ name: "register" })(RegistrationForm);

exports.default = WrappedRegistrationForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvZm9ybXMvTmV3U2Nob29sRm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwiSW5wdXQiLCJUb29sdGlwIiwiSWNvbiIsIkNhc2NhZGVyIiwiU2VsZWN0IiwiUm93IiwiQ29sIiwiQ2hlY2tib3giLCJCdXR0b24iLCJBdXRvQ29tcGxldGUiLCJDcmVhdGVOZXdTY2hvb2wiLCJHZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnMiLCJtYWluQ29udHJhY3RBZGRyZXNzIiwib3duZXIiLCJPcHRpb24iLCJUZXh0QXJlYSIsIkF1dG9Db21wbGV0ZU9wdGlvbiIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJzdGF0ZSIsImNvbmZpcm1EaXJ0eSIsImF1dG9Db21wbGV0ZVJlc3VsdCIsInNjaG9vbE5hbWUiLCJzY2hvb2xQb3B1bGF0aW9uIiwic2Nob29sTG9jYXRpb24iLCJzY2hvb2xPd25lcnNFVEhBZGRyZXNzIiwiY3JlYXRlTmV3U2Nob29sIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJsb2FkaW5nIiwicmVzdWx0IiwiZmVlZGJhY2siLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJ0byIsImdldEZpZWxkRGVjb3JhdG9yIiwicHJvcHMiLCJmb3JtIiwicHJlZml4U2VsZWN0b3IiLCJpbml0aWFsVmFsdWUiLCJ3aWR0aCIsInBhZGRpbmciLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJXcmFwcGVkUmVnaXN0cmF0aW9uRm9ybSIsImNyZWF0ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBTyxBQUE4Qjs7OztBQUNyQyxBQUNFLEFBQ0EsQUFDSzs7Ozs7OztJLEFBRUMsU0FBVyxBLGFBQVgsQTtJQUNBLEEsV0FBYSxBLFlBQWIsQTs7QUFDUixJQUFNLHFCQUFxQixtQkFBM0IsQUFBd0M7O0ksQUFFbEM7Ozs7Ozs7Ozs7Ozs7OztnT0FDSixBO29CQUFRLEFBQ1EsQUFDZDswQkFGTSxBQUVjLEFBQ3BCO2tCQUhNLEFBR00sQUFDWjt3QkFKTSxBQUlZLEFBQ2xCO3NCQUxNLEFBS1UsQUFDaEI7OEJBTk0sQUFNa0IsQTtBQU5sQixBQUNOLGFBUUYsQTsyRkFBa0IsaUJBQUEsQUFBTSxHQUFOO29CQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNoQjtrQkFBQSxBQUFFLEFBQ0Y7c0JBQUEsQUFBSzsyQkFGVyxBQUVoQixBQUFjLEFBQ0g7QUFERyxBQUNaOztnQ0FIYzt1QkFBQSxBQU1HLEFBQXlCOzttQkFBeEM7QUFOWSxrQ0FBQTtnQ0FBQTt1QkFPTywrQkFDckIsT0FEcUIsQUFDckIsQUFBTyxJQUNQLE1BQUEsQUFBSyxNQUZnQixBQUVWLFlBQ1gsTUFBQSxBQUFLLE1BSGdCLEFBR1Ysa0JBQ1gsTUFBQSxBQUFLLE1BSmdCLEFBSVYsZ0JBQ1gsTUFBQSxBQUFLLE1BWlMsQUFPTyxBQUtWOzttQkFMUDtBQVBVLG9DQWNoQjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7c0JBQUEsQUFBSzsyQkFBUyxBQUNILEFBQ1Q7NEJBQVUsU0FsQkksQUFnQmhCLEFBQWMsQUFFTztBQUZQLEFBQ1o7O21CQWpCYzttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBOzs7Ozs7Ozs7OzZCQXNCVDttQkFBQTs7VUFBQSxBQUNDLG9CQUFzQixLQUFBLEFBQUssTUFENUIsQUFDa0MsS0FEbEMsQUFDQztVQURELEFBRUMscUJBQXVCLEtBRnhCLEFBRTZCLE1BRjdCLEFBRUMsQUFFUjs7VUFBTSxtQ0FBaUIsQUFBa0I7c0JBQWxCLEFBQTRCLEFBQ25DO0FBRG1DLEFBQ2pELE9BRHFCLGtCQUdyQixBQUFDLDhCQUFPLE9BQU8sRUFBRSxPQUFqQixBQUFlLEFBQVM7b0JBQXhCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsVUFBUSxPQUFSLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSx3QkFBQyxjQUFELFVBQVEsT0FBUixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FMSixBQUF1QixBQUdyQixBQUVFLEFBSUo7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUE7O29CQUNFO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyw0QkFBSyxVQUFVLEtBQWhCLEFBQXFCLGlCQUFpQixPQUFPLEVBQUUsU0FBL0MsQUFBNkMsQUFBVztvQkFBeEQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsV0FBQSxBQUFNLFFBQUssT0FBWCxBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLFlBQVksTUFBQSxBQUFNLE9BRDFCLEFBQ1IsQUFBYyxBQUEyQjtBQUg3Qzs7b0JBQUE7c0JBRkosQUFDRSxBQUNFLEFBUUY7QUFSRTtBQUNFLDJCQU9ILGNBQUQsV0FBQSxBQUFNLFFBQUssT0FBWCxBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLGtCQUFrQixNQUFBLEFBQU0sT0FEaEMsQUFDUixBQUFjLEFBQWlDO0FBSG5EOztvQkFBQTtzQkFYSixBQVVFLEFBQ0UsQUFRRjtBQVJFO0FBQ0UsMkJBT0gsY0FBRCxXQUFBLEFBQU0sUUFBSyxPQUFYLEFBQWlCO29CQUFqQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWdCLE1BQUEsQUFBTSxPQUQ5QixBQUNSLEFBQWMsQUFBK0I7QUFIakQ7O29CQUFBO3NCQXBCSixBQW1CRSxBQUNFLEFBUUY7QUFSRTtBQUNFLDJCQU9ILGNBQUQsV0FBQSxBQUFNLFFBQUssT0FBWCxBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLHdCQUF3QixNQUFBLEFBQU0sT0FEdEMsQUFDUixBQUFjLEFBQXVDO0FBSHpEOztvQkFBQTtzQkE3QkosQUE0QkUsQUFDRSxBQVFGO0FBUkU7QUFDRSwyQkFPSCxjQUFELFdBQUEsQUFBTSxRQUFLLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkF0Q0osQUFxQ0UsQUFDRSxBQUdGO0FBSEU7QUFBQSwyQkFHRCxjQUFELFdBQUEsQUFBTSxRQUFLLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLFlBQVMsTUFBVixBQUFnQjtvQkFBaEI7c0JBMUNKLEFBeUNFLEFBQ0UsQUFHRjtBQUhFOzJCQUdELGNBQUQsV0FBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2NBQUQsQUFDTyxBQUNMO2tCQUZGLEFBRVcsQUFDVDtpQkFBUyxLQUFBLEFBQUssTUFIaEIsQUFHc0I7O29CQUh0QjtzQkFBQTtBQUFBO0FBQ0UsU0FsRFIsQUFHRSxBQTZDRSxBQUNFLEFBU0osK0JBQUEsY0FBQSxRQUFJLE9BQU8sRUFBRSxTQUFiLEFBQVcsQUFBVztvQkFBdEI7c0JBQUE7QUFBQTtTQUM2QixtQ0FBQSxBQUFLLE1BNUR0QyxBQUNFLEFBMERFLEFBQ3dDLEFBSTdDOzs7OztFQTdHNEIsZ0IsQUFBTTs7QUFnSHJDLElBQU0sMEJBQTBCLFdBQUEsQUFBSyxPQUFPLEVBQUUsTUFBZCxBQUFZLEFBQVEsY0FBcEQsQUFBZ0MsQUFDOUIsQUFHRjs7a0JBQUEsQUFBZSIsImZpbGUiOiJOZXdTY2hvb2xGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9