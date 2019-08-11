webpackHotUpdate(6,{

/***/ 1627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MainSummary = exports.GetCountryManagerSummary = undefined;

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = __webpack_require__(1437);

var _web2 = _interopRequireDefault(_web);

var _deployedContracts = __webpack_require__(1623);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/ethereum/deployedContractCalls/getContractSummary.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/ethereum/deployedContractCalls/getContractSummary.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5iZjFlODZkZDk4ZmVmMzI2NmVlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vZGVwbG95ZWRDb250cmFjdENhbGxzL2dldENvbnRyYWN0U3VtbWFyeS5qcz9hZDI3MmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gXCIuLi93ZWIzXCI7XG5pbXBvcnQgeyBDb3VudHJ5TWFuYWdlckRlcGxveWVkLCBNYWluIH0gZnJvbSBcIi4vZGVwbG95ZWRDb250cmFjdHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdldENvdW50cnlNYW5hZ2VyU3VtbWFyeShhZGRyZXNzKSB7XG5cdGNvbnN0IGNvdW50cnlNYW5hZ2VyID0gQ291bnRyeU1hbmFnZXJEZXBsb3llZChhZGRyZXNzKTtcblxuXHRyZXR1cm4gYXdhaXQgY291bnRyeU1hbmFnZXIubWV0aG9kcy5jb3VudHJ5TmFtZSgpLmNhbGwoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIE1haW5TdW1tYXJ5KGFkZHJlc3MpIHtcblx0Y29uc3QgbWFpbiA9IE1haW4oYWRkcmVzcyk7XG5cblx0cmV0dXJuIGF3YWl0IG1haW4ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXRoZXJldW0vZGVwbG95ZWRDb250cmFjdENhbGxzL2dldENvbnRyYWN0U3VtbWFyeS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOzs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9