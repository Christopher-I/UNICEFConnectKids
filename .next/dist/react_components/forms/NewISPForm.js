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
      })(_react2.default.createElement(_antd.Select, { style: { width: 70 } }, _react2.default.createElement(Option, { value: "86" }, "+86"), _react2.default.createElement(Option, { value: "87" }, "+87")));

      return _react2.default.createElement("div", null, _react2.default.createElement("br", null), _react2.default.createElement("br", null), _react2.default.createElement(_antd.Form, { onSubmit: this.createNewISP, style: { padding: "50px 100px" } }, _react2.default.createElement(_antd.Form.Item, { label: "ISP Name" }, _react2.default.createElement(_antd.Input, {
        value: this.state.ISPName,
        onChange: function onChange(event) {
          return _this3.setState({ ISPName: event.target.value });
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Promised Data Size (GB)" }, _react2.default.createElement(_antd.Input, {
        value: this.state.promisedDataSize,
        onChange: function onChange(event) {
          return _this3.setState({ promisedDataSize: event.target.value });
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Promised Upload Speed (MB/s)" }, _react2.default.createElement(_antd.Input, {
        value: this.state.promisedUploadSpeed,
        onChange: function onChange(event) {
          return _this3.setState({ promisedUploadSpeed: event.target.value });
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "Promised Download Speed (MB/s)" }, _react2.default.createElement(_antd.Input, {
        value: this.state.promisedDownloadSpeed,
        onChange: function onChange(event) {
          return _this3.setState({ promisedDownloadSpeed: event.target.value });
        }
      })), _react2.default.createElement(_antd.Form.Item, { label: "ISP Owner Address" }, _react2.default.createElement(_antd.Input, {
        value: this.state.ISPOwnerAddress,
        onChange: function onChange(event) {
          return _this3.setState({ ISPOwnerAddress: event.target.value });
        }
      })), _react2.default.createElement(_antd.Form.Item, null, _react2.default.createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit",
        loading: this.state.loading
      }, "Register"))), _react2.default.createElement("h3", { style: { padding: "10px 100px" } }, " ", "Deployed ISP address: ", this.state.response, " "));
    }
  }]);

  return RegistrationForm;
}(_react2.default.Component);

var WrappedRegistrationForm = _antd.Form.create({ name: "register" })(RegistrationForm);

exports.default = WrappedRegistrationForm;