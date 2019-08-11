"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/forms/NewISPForm.js";


var Option = _antd.Select.Option;
var TextArea = _antd.Input.TextArea;

var AutoCompleteOption = _antd.AutoComplete.Option;

var RegistrationForm = function (_React$Component) {
  (0, _inherits3.default)(RegistrationForm, _React$Component);

  function RegistrationForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RegistrationForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RegistrationForm.__proto__ || (0, _getPrototypeOf2.default)(RegistrationForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RegistrationForm, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var autoCompleteResult = this.state.autoCompleteResult;

      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      };
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      };
      var prefixSelector = getFieldDecorator("prefix", {
        initialValue: "234"
      })(_react2.default.createElement(_antd.Select, { style: { width: 70 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(Option, { value: "86", __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "+86"), _react2.default.createElement(Option, { value: "87", __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "+87")));

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement(_antd.Form, (0, _extends3.default)({}, formItemLayout, {
        onSubmit: this.handleSubmit,
        style: { padding: "50px 100px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement(_antd.Form.Item, { label: "ISP Name", __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_antd.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Promised Data Size", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_antd.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Promised Upload Speed", __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_antd.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Promised Download Speed", __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_antd.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Ethereum Address", __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_antd.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Contact Information", __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_antd.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Additional Details", __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(TextArea, { rows: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      })), _react2.default.createElement(_antd.Form.Item, (0, _extends3.default)({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), _react2.default.createElement(_antd.Button, { type: "primary", htmlType: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Register"))));
    }
  }]);

  return RegistrationForm;
}(_react2.default.Component);

var WrappedRegistrationForm = _antd.Form.create({ name: "register" })(RegistrationForm);

exports.default = WrappedRegistrationForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvZm9ybXMvTmV3SVNQRm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwiSW5wdXQiLCJUb29sdGlwIiwiSWNvbiIsIkNhc2NhZGVyIiwiU2VsZWN0IiwiUm93IiwiQ29sIiwiQ2hlY2tib3giLCJCdXR0b24iLCJBdXRvQ29tcGxldGUiLCJPcHRpb24iLCJUZXh0QXJlYSIsIkF1dG9Db21wbGV0ZU9wdGlvbiIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJzdGF0ZSIsImNvbmZpcm1EaXJ0eSIsImF1dG9Db21wbGV0ZVJlc3VsdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiZm9ybSIsInZhbGlkYXRlRmllbGRzQW5kU2Nyb2xsIiwiZXJyIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImdldEZpZWxkRGVjb3JhdG9yIiwiZm9ybUl0ZW1MYXlvdXQiLCJsYWJlbENvbCIsInhzIiwic3BhbiIsInNtIiwid3JhcHBlckNvbCIsInRhaWxGb3JtSXRlbUxheW91dCIsIm9mZnNldCIsInByZWZpeFNlbGVjdG9yIiwiaW5pdGlhbFZhbHVlIiwid2lkdGgiLCJwYWRkaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJXcmFwcGVkUmVnaXN0cmF0aW9uRm9ybSIsImNyZWF0ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7Ozs7Ozs7SUFHTSxBLFNBQVcsQSxhQUFYLEE7SUFDQSxBLFdBQWEsQSxZQUFiLEE7O0FBQ1IsSUFBTSxxQkFBcUIsbUJBQTNCLEFBQXdDOztJQUVsQyxBOzs7Ozs7Ozs7Ozs7OztnTyxBQUNKO29CQUFRLEFBQ1EsQUFDZDswQkFGTSxBQUVjLEE7QUFGZCxBQUNOLGEsQUFJRixlQUFlLGFBQUssQUFDbEI7UUFBQSxBQUFFLEFBQ0Y7WUFBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLHdCQUF3QixVQUFBLEFBQUMsS0FBRCxBQUFNLFFBQVcsQUFDdkQ7WUFBSSxDQUFKLEFBQUssS0FBSyxBQUNSO2tCQUFBLEFBQVEsSUFBUixBQUFZLDZCQUFaLEFBQXlDLEFBQzFDO0FBQ0Y7QUFKRCxBQUtEO0E7Ozs7OzZCQUVRO1VBQUEsQUFDQyxvQkFBc0IsS0FBQSxBQUFLLE1BRDVCLEFBQ2tDLEtBRGxDLEFBQ0M7VUFERCxBQUVDLHFCQUF1QixLQUZ4QixBQUU2QixNQUY3QixBQUVDLEFBRVI7O1VBQU07O2NBRUUsRUFBRSxNQURFLEFBQ0osQUFBUSxBQUNaO2NBQUksRUFBRSxNQUhhLEFBQ1gsQUFFSixBQUFRLEFBRWQ7QUFKVSxBQUNSOztjQUlJLEVBQUUsTUFESSxBQUNOLEFBQVEsQUFDWjtjQUFJLEVBQUUsTUFQVixBQUF1QixBQUtULEFBRU4sQUFBUSxBQUdoQjtBQUxjLEFBQ1Y7QUFObUIsQUFDckI7VUFTSTs7O2tCQUVFLEFBQ0ksQUFDTjtvQkFIUSxBQUNOLEFBRU0sQUFFVjtBQUpJLEFBQ0Y7O2tCQUdFLEFBQ0ksQUFDTjtvQkFSTixBQUEyQixBQUNiLEFBS04sQUFFTSxBQUlkO0FBTlEsQUFDRjtBQU5RLEFBQ1Y7QUFGdUIsQUFDekI7VUFXSSxtQ0FBaUIsQUFBa0I7c0JBQWxCLEFBQTRCLEFBQ25DO0FBRG1DLEFBQ2pELE9BRHFCLGtCQUdyQixBQUFDLDhCQUFPLE9BQU8sRUFBRSxPQUFqQixBQUFlLEFBQVM7b0JBQXhCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsVUFBUSxPQUFSLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSx3QkFBQyxjQUFELFVBQVEsT0FBUixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FMSixBQUF1QixBQUdyQixBQUVFLEFBSUo7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUE7O29CQUNFO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyxxREFBRCxBQUNNO2tCQUNNLEtBRlosQUFFaUIsQUFDZjtlQUFPLEVBQUUsU0FIWCxBQUdTLEFBQVc7O29CQUhwQjtzQkFBQSxBQUtFO0FBTEY7QUFFRSwwQkFHQyxjQUFELFdBQUEsQUFBTSxRQUFLLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFOSixBQUtFLEFBQ0UsQUFHRjtBQUhFO0FBQUEsMkJBR0QsY0FBRCxXQUFBLEFBQU0sUUFBSyxPQUFYLEFBQWlCO29CQUFqQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBVkosQUFTRSxBQUNFLEFBR0Y7QUFIRTtBQUFBLDJCQUdELGNBQUQsV0FBQSxBQUFNLFFBQUssT0FBWCxBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQWRKLEFBYUUsQUFDRSxBQUdGO0FBSEU7QUFBQSwyQkFHRCxjQUFELFdBQUEsQUFBTSxRQUFLLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFsQkosQUFpQkUsQUFDRSxBQUdGO0FBSEU7QUFBQSwyQkFHRCxjQUFELFdBQUEsQUFBTSxRQUFLLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkF0QkosQUFxQkUsQUFDRSxBQUdGO0FBSEU7QUFBQSwyQkFHRCxjQUFELFdBQUEsQUFBTSxRQUFLLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkExQkosQUF5QkUsQUFDRSxBQUdGO0FBSEU7QUFBQSwyQkFHRCxjQUFELFdBQUEsQUFBTSxRQUFLLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLFlBQVMsTUFBVixBQUFnQjtvQkFBaEI7c0JBOUJKLEFBNkJFLEFBQ0UsQUFHRjtBQUhFOzJCQUdELGNBQUQsV0FBQSxBQUFNLGlDQUFOLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLDBCQUNFLEFBQUMsOEJBQU8sTUFBUixBQUFhLFdBQVUsVUFBdkIsQUFBZ0M7b0JBQWhDO3NCQUFBO0FBQUE7U0F0Q1IsQUFDRSxBQUdFLEFBaUNFLEFBQ0UsQUFPVDs7Ozs7RUEvRjRCLGdCLEFBQU07O0FBa0dyQyxJQUFNLDBCQUEwQixXQUFBLEFBQUssT0FBTyxFQUFFLE1BQWQsQUFBWSxBQUFRLGNBQXBELEFBQWdDLEFBQzlCLEFBR0Y7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTmV3SVNQRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==