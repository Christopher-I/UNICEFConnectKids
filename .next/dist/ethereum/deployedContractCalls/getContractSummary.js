"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MainSummary = exports.GetCountryManagerSummary = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require("../web3");

var _web2 = _interopRequireDefault(_web);

var _deployedContracts = require("./deployedContracts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetCountryManagerSummary = exports.GetCountryManagerSummary = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
		var countryManager;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						countryManager = (0, _deployedContracts.CountryManagerDeployed)(address);
						_context.next = 3;
						return countryManager.methods.countryName().call();

					case 3:
						return _context.abrupt("return", _context.sent);

					case 4:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function GetCountryManagerSummary(_x) {
		return _ref.apply(this, arguments);
	};
}();

var MainSummary = exports.MainSummary = function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(address) {
		var main;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						main = (0, _deployedContracts.Main)(address);
						_context2.next = 3;
						return main.methods.getSummary().call();

					case 3:
						return _context2.abrupt("return", _context2.sent);

					case 4:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function MainSummary(_x2) {
		return _ref2.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9nZXRDb250cmFjdFN1bW1hcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNvdW50cnlNYW5hZ2VyRGVwbG95ZWQiLCJNYWluIiwiYWRkcmVzcyIsImNvdW50cnlNYW5hZ2VyIiwibWV0aG9kcyIsImNvdW50cnlOYW1lIiwiY2FsbCIsIkdldENvdW50cnlNYW5hZ2VyU3VtbWFyeSIsIm1haW4iLCJnZXRTdW1tYXJ5IiwiTWFpblN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQVMsQUFBVCxBQUFpQyxBQUFqQyxBQUE2QyxBQUE3QyxBQUVBOzs7OzhFQUFBO3FGQUFPLGlCQUF3QyxBQUF4QyxTQUFBO01BQUE7Z0VBQUE7YUFBQTtxQ0FBQTtVQUNBO0FBREEsdUJBQ2lCLCtDQUF1QixBQUF2QixBQURqQjtzQkFBQTthQUdPLGVBQWUsQUFBZixRQUF1QixBQUF2QixjQUFxQyxBQUFyQyxBQUhQOztVQUFBO2dEQUFBOztVQUFBO1VBQUE7c0JBQUE7O0FBQUE7Y0FBQTtBQUFQOztpQkFBc0IsQUFBdEIsNkJBQUE7MEJBQUE7QUFBQTtBQU1BOztvREFBQTtzRkFBTyxrQkFBMkIsQUFBM0IsU0FBQTtNQUFBO2tFQUFBO2FBQUE7dUNBQUE7VUFDQTtBQURBLGFBQ08sNkJBQUssQUFBTCxBQURQO3VCQUFBO2FBR08sS0FBSyxBQUFMLFFBQWEsQUFBYixhQUEwQixBQUExQixBQUhQOztVQUFBO2tEQUFBOztVQUFBO1VBQUE7dUJBQUE7O0FBQUE7ZUFBQTtBQUFQOztpQkFBc0IsQUFBdEIsaUJBQUE7MkJBQUE7QUFBQSIsImZpbGUiOiJnZXRDb250cmFjdFN1bW1hcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=