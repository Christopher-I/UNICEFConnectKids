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

var _createNewISP = require("../../ethereum/deployedContractCalls/countryManager/createNewISP");

var _createNewISP2 = _interopRequireDefault(_createNewISP);

var _deployedContracts = require("../../ethereum/deployedContractCalls/deployedContracts");

var _getListOfCountryManagers = require("../../ethereum/deployedContractCalls/main/getListOfCountryManagers");

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _ListofSmartContractAddresses = require("../../ethereum/ListofSmartContractAddresses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/forms/NewISPForm.js";


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
      ISPOwnerAddress: "",
      promisedDownloadSpeed: "",
      promisedUploadSpeed: "",
      promisedDataSize: "",
      ISPName: "",
      response: "",
      loading: ""
    }, _this.createNewISP = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var result, feedback, countryManager, isps;
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
                return (0, _createNewISP2.default)(result[0], _this.state.ISPName, _this.state.promisedUploadSpeed, _this.state.promisedDownloadSpeed, _this.state.promisedDataSize, _ListofSmartContractAddresses.owner);

              case 7:
                feedback = _context.sent;
                _context.next = 10;
                return (0, _deployedContracts.CountryManagerDeployed)(result[0]);

              case 10:
                countryManager = _context.sent;
                _context.next = 13;
                return countryManager.methods.getDeployedIsps().call();

              case 13:
                isps = _context.sent;

                console.log(isps);

                _this.setState({
                  loading: false,
                  response: isps[isps.length - 1]
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

  //creates a new ISP provider


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
          lineNumber: 74
        }
      }, _react2.default.createElement(Option, { value: "86", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "+86"), _react2.default.createElement(Option, { value: "87", __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "+87")));

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement(_antd.Form, { onSubmit: this.createNewISP, style: { padding: "50px 100px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_antd.Form.Item, { label: "ISP Name", __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.ISPName,
        onChange: function onChange(event) {
          return _this3.setState({ ISPName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Promised Data Size (GB)", __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.promisedDataSize,
        onChange: function onChange(event) {
          return _this3.setState({ promisedDataSize: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Promised Upload Speed (MB/s)", __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.promisedUploadSpeed,
        onChange: function onChange(event) {
          return _this3.setState({ promisedUploadSpeed: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Promised Download Speed (MB/s)", __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.promisedDownloadSpeed,
        onChange: function onChange(event) {
          return _this3.setState({ promisedDownloadSpeed: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "ISP Owner Address", __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(_antd.Input, {
        value: this.state.ISPOwnerAddress,
        onChange: function onChange(event) {
          return _this3.setState({ ISPOwnerAddress: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      })), _react2.default.createElement(_antd.Form.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit",
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "Register"))), _react2.default.createElement("h3", { style: { padding: "10px 100px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, " ", "Deployed ISP address: ", this.state.response, " "));
    }
  }]);

  return RegistrationForm;
}(_react2.default.Component);

var WrappedRegistrationForm = _antd.Form.create({ name: "register" })(RegistrationForm);

exports.default = WrappedRegistrationForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvZm9ybXMvTmV3SVNQRm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwiSW5wdXQiLCJUb29sdGlwIiwiSWNvbiIsIkNhc2NhZGVyIiwiU2VsZWN0IiwiUm93IiwiQ29sIiwiQ2hlY2tib3giLCJCdXR0b24iLCJBdXRvQ29tcGxldGUiLCJDcmVhdGVOZXdJU1AiLCJDb3VudHJ5TWFuYWdlckRlcGxveWVkIiwiR2V0TGlzdE9mQ291bnRyeU1hbmFnZXJzIiwibWFpbkNvbnRyYWN0QWRkcmVzcyIsIm93bmVyIiwiT3B0aW9uIiwiVGV4dEFyZWEiLCJBdXRvQ29tcGxldGVPcHRpb24iLCJSZWdpc3RyYXRpb25Gb3JtIiwic3RhdGUiLCJjb25maXJtRGlydHkiLCJhdXRvQ29tcGxldGVSZXN1bHQiLCJJU1BPd25lckFkZHJlc3MiLCJwcm9taXNlZERvd25sb2FkU3BlZWQiLCJwcm9taXNlZFVwbG9hZFNwZWVkIiwicHJvbWlzZWREYXRhU2l6ZSIsIklTUE5hbWUiLCJyZXNwb25zZSIsImxvYWRpbmciLCJjcmVhdGVOZXdJU1AiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInJlc3VsdCIsImZlZWRiYWNrIiwiY291bnRyeU1hbmFnZXIiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRJc3BzIiwiY2FsbCIsImlzcHMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJwcm9wcyIsImZvcm0iLCJwcmVmaXhTZWxlY3RvciIsImluaXRpYWxWYWx1ZSIsIndpZHRoIiwicGFkZGluZyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIldyYXBwZWRSZWdpc3RyYXRpb25Gb3JtIiwiY3JlYXRlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFTLEFBQThCOztBQUN2QyxBQUFPLEFBQThCOzs7O0FBQ3JDLEFBQ0UsQUFDQSxBQUNLOzs7Ozs7O0ksQUFFQyxTQUFXLEEsYSxBQUFYO0ksQUFDQSxXQUFhLEEsWUFBYixBOztBQUNSLElBQU0scUJBQXFCLG1CQUEzQixBQUF3Qzs7SUFFbEMsQTs7Ozs7Ozs7Ozs7Ozs7O2dPLEFBQ0o7b0JBQVEsQUFDUSxBQUNkOzBCQUZNLEFBRWMsQUFDcEI7dUJBSE0sQUFHVyxBQUNqQjs2QkFKTSxBQUlpQixBQUN2QjsyQkFMTSxBQUtlLEFBQ3JCO3dCQU5NLEFBTVksQUFDbEI7ZUFQTSxBQU9HLEFBQ1Q7Z0JBUk0sQUFRSSxBQUNWO2VBVE0sQSxBQVNHO0FBVEgsQUFDTixhQVlGLEE7MkZBQWUsaUJBQUEsQUFBTSxHQUFOOzhDQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNiO2tCQUFBLEFBQUUsQUFDRjtzQkFBQSxBQUFLOzJCQUZRLEFBRWIsQUFBYyxBQUNIO0FBREcsQUFDWjtnQ0FIVzt1QkFBQSxBQUtNLEFBQXlCOzttQkFBeEM7QUFMUyxrQ0FBQTtnQ0FBQTt1QkFPVSw0QkFDckIsT0FEcUIsQUFDckIsQUFBTyxJQUNQLE1BQUEsQUFBSyxNQUZnQixBQUVWLFNBQ1gsTUFBQSxBQUFLLE1BSGdCLEFBR1YscUJBQ1gsTUFBQSxBQUFLLE1BSmdCLEFBSVYsdUJBQ1gsTUFBQSxBQUFLLE1BWk0sQUFPVSxBQUtWLEFBQ1g7O21CQU5JO0FBUE8sb0NBQUE7Z0NBQUE7dUJBZ0JjLCtDQUF1QixPQWhCckMsQUFnQmMsQUFBdUIsQUFBTzs7bUJBQXJEO0FBaEJTLDBDQUFBO2dDQUFBO3VCQWlCSSxlQUFBLEFBQWUsUUFBZixBQUF1QixrQkFqQjNCLEFBaUJJLEFBQXlDOzttQkFBdEQ7QUFqQlMsZ0NBbUJiOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUVaOztzQkFBQSxBQUFLOzJCQUFTLEFBQ0gsQUFDVDs0QkFBVSxLQUFLLEtBQUEsQUFBSyxTQXZCVCxBQXFCYixBQUFjLEFBRUYsQUFBbUI7QUFGakIsQUFDWjs7bUJBdEJXO21CQUFBO2dDQUFBOztBQUFBO29CQUFBO0E7Ozs7OztBQURmOzs7Ozs7OzZCQTRCUzttQkFBQTs7VUFBQSxBQUNDLG9CQUFzQixLQUFBLEFBQUssTUFENUIsQUFDa0MsS0FEbEMsQUFDQztVQURELEFBRUMscUJBQXVCLEtBRnhCLEFBRTZCLE1BRjdCLEFBRUMsQUFFUjs7VUFBTSxtQ0FBaUIsQUFBa0I7c0JBQWxCLEFBQTRCLEFBQ25DO0FBRG1DLEFBQ2pELE9BRHFCLGtCQUdyQixBQUFDLDhCQUFPLE9BQU8sRUFBRSxPQUFqQixBQUFlLEFBQVM7b0JBQXhCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsVUFBUSxPQUFSLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSx3QkFBQyxjQUFELFVBQVEsT0FBUixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FMSixBQUF1QixBQUdyQixBQUVFLEFBSUo7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUE7O29CQUNFO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyw0QkFBSyxVQUFVLEtBQWhCLEFBQXFCLGNBQWMsT0FBTyxFQUFFLFNBQTVDLEFBQTBDLEFBQVc7b0JBQXJEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELFdBQUEsQUFBTSxRQUFLLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFTLE1BQUEsQUFBTSxPQUF4QyxBQUFTLEFBQWMsQUFBd0I7QUFGM0Q7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQU1GO0FBTkU7QUFDRSwyQkFLSCxjQUFELFdBQUEsQUFBTSxRQUFLLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxrQkFBa0IsTUFBQSxBQUFNLE9BRGhDLEFBQ1IsQUFBYyxBQUFpQztBQUhuRDs7b0JBQUE7c0JBVEosQUFRRSxBQUNFLEFBUUY7QUFSRTtBQUNFLDJCQU9ILGNBQUQsV0FBQSxBQUFNLFFBQUssT0FBWCxBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLHFCQUFxQixNQUFBLEFBQU0sT0FEbkMsQUFDUixBQUFjLEFBQW9DO0FBSHREOztvQkFBQTtzQkFsQkosQUFpQkUsQUFDRSxBQVFGO0FBUkU7QUFDRSwyQkFPSCxjQUFELFdBQUEsQUFBTSxRQUFLLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSx1QkFBdUIsTUFBQSxBQUFNLE9BRHJDLEFBQ1IsQUFBYyxBQUFzQztBQUh4RDs7b0JBQUE7c0JBM0JKLEFBMEJFLEFBQ0UsQUFRRjtBQVJFO0FBQ0UsMkJBT0gsY0FBRCxXQUFBLEFBQU0sUUFBSyxPQUFYLEFBQWlCO29CQUFqQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUsaUJBQWlCLE1BQUEsQUFBTSxPQUQvQixBQUNSLEFBQWMsQUFBZ0M7QUFIbEQ7O29CQUFBO3NCQXBDSixBQW1DRSxBQUNFLEFBUUY7QUFSRTtBQUNFLDJCQU9ILGNBQUQsV0FBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2NBQUQsQUFDTyxBQUNMO2tCQUZGLEFBRVcsQUFDVDtpQkFBUyxLQUFBLEFBQUssTUFIaEIsQUFHc0I7O29CQUh0QjtzQkFBQTtBQUFBO0FBQ0UsU0FqRFIsQUFHRSxBQTRDRSxBQUNFLEFBU0osK0JBQUEsY0FBQSxRQUFJLE9BQU8sRUFBRSxTQUFiLEFBQVcsQUFBVztvQkFBdEI7c0JBQUEsQUFDRztBQURIO1NBQUEsS0FFeUIsK0JBQUEsQUFBSyxNQUY5QixBQUVvQyxBQUFVLFVBNURsRCxBQUNFLEFBeURFLEFBTUw7Ozs7O0VBdEg0QixnQkFBTSxBOztBQXlIckMsSUFBTSwwQkFBMEIsV0FBQSxBQUFLLE9BQU8sRUFBRSxNQUFkLEFBQVksQUFBUSxjQUFwRCxBQUFnQyxBQUM5QixBQUdGOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik5ld0lTUEZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=