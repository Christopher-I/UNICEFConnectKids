"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GetISPSummary = exports.GetSchoolSummary = exports.GetCountryManagerSummary = exports.MainSummary = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require("../web3");

var _web2 = _interopRequireDefault(_web);

var _deployedContracts = require("./deployedContracts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainSummary = exports.MainSummary = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
		var main;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						main = (0, _deployedContracts.Main)(address);
						_context.next = 3;
						return main.methods.getSummary().call();

					case 3:
						return _context.abrupt("return", _context.sent);

					case 4:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function MainSummary(_x) {
		return _ref.apply(this, arguments);
	};
}();

var GetCountryManagerSummary = exports.GetCountryManagerSummary = function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(address) {
		var countryManager;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						countryManager = (0, _deployedContracts.CountryManagerDeployed)(address);
						_context2.next = 3;
						return countryManager.methods.getSummary().call();

					case 3:
						return _context2.abrupt("return", _context2.sent);

					case 4:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function GetCountryManagerSummary(_x2) {
		return _ref2.apply(this, arguments);
	};
}();

var GetSchoolSummary = exports.GetSchoolSummary = function () {
	var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(address) {
		var school;
		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						school = (0, _deployedContracts.SchoolDeployed)(address);
						_context3.next = 3;
						return school.methods.getSummary().call();

					case 3:
						return _context3.abrupt("return", _context3.sent);

					case 4:
					case "end":
						return _context3.stop();
				}
			}
		}, _callee3, this);
	}));

	return function GetSchoolSummary(_x3) {
		return _ref3.apply(this, arguments);
	};
}();

var GetISPSummary = exports.GetISPSummary = function () {
	var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(address) {
		var ISP;
		return _regenerator2.default.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						ISP = (0, _deployedContracts.ISPDeployed)(address);
						_context4.next = 3;
						return ISP.methods.getSummary().call();

					case 3:
						return _context4.abrupt("return", _context4.sent);

					case 4:
					case "end":
						return _context4.stop();
				}
			}
		}, _callee4, this);
	}));

	return function GetISPSummary(_x4) {
		return _ref4.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9nZXRDb250cmFjdFN1bW1hcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNvdW50cnlNYW5hZ2VyRGVwbG95ZWQiLCJNYWluIiwiU2Nob29sRGVwbG95ZWQiLCJJU1BEZXBsb3llZCIsImFkZHJlc3MiLCJtYWluIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwiTWFpblN1bW1hcnkiLCJjb3VudHJ5TWFuYWdlciIsIkdldENvdW50cnlNYW5hZ2VyU3VtbWFyeSIsInNjaG9vbCIsIkdldFNjaG9vbFN1bW1hcnkiLCJJU1AiLCJHZXRJU1BTdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUNDLEFBREQsQUFFQyxBQUZELEFBR0MsQUFIRCxBQUlDLEFBSkQsQUFLTyxBQUxQLEFBT0E7Ozs7b0RBQUE7cUZBQU8saUJBQTJCLEFBQTNCLFNBQUE7TUFBQTtnRUFBQTthQUFBO3FDQUFBO1VBQ0E7QUFEQSxhQUNPLDZCQUFLLEFBQUwsQUFEUDtzQkFBQTthQUVPLEtBQUssQUFBTCxRQUFhLEFBQWIsYUFBMEIsQUFBMUIsQUFGUDs7VUFBQTtnREFBQTs7VUFBQTtVQUFBO3NCQUFBOztBQUFBO2NBQUE7QUFBUDs7aUJBQXNCLEFBQXRCLGdCQUFBOzBCQUFBO0FBQUE7QUFLQTs7OEVBQUE7c0ZBQU8sa0JBQXdDLEFBQXhDLFNBQUE7TUFBQTtrRUFBQTthQUFBO3VDQUFBO1VBQ0E7QUFEQSx1QkFDaUIsK0NBQXVCLEFBQXZCLEFBRGpCO3VCQUFBO2FBRU8sZUFBZSxBQUFmLFFBQXVCLEFBQXZCLGFBQW9DLEFBQXBDLEFBRlA7O1VBQUE7a0RBQUE7O1VBQUE7VUFBQTt1QkFBQTs7QUFBQTtlQUFBO0FBQVA7O2lCQUFzQixBQUF0Qiw4QkFBQTsyQkFBQTtBQUFBO0FBS0E7OzhEQUFBO3NGQUFPLGtCQUFnQyxBQUFoQyxTQUFBO01BQUE7a0VBQUE7YUFBQTt1Q0FBQTtVQUNBO0FBREEsZUFDUyx1Q0FBZSxBQUFmLEFBRFQ7dUJBQUE7YUFFTyxPQUFPLEFBQVAsUUFBZSxBQUFmLGFBQTRCLEFBQTVCLEFBRlA7O1VBQUE7a0RBQUE7O1VBQUE7VUFBQTt1QkFBQTs7QUFBQTtlQUFBO0FBQVA7O2lCQUFzQixBQUF0QixzQkFBQTsyQkFBQTtBQUFBO0FBS0E7O3dEQUFBO3NGQUFPLGtCQUE2QixBQUE3QixTQUFBO01BQUE7a0VBQUE7YUFBQTt1Q0FBQTtVQUNBO0FBREEsWUFDTSxvQ0FBWSxBQUFaLEFBRE47dUJBQUE7YUFFTyxJQUFJLEFBQUosUUFBWSxBQUFaLGFBQXlCLEFBQXpCLEFBRlA7O1VBQUE7a0RBQUE7O1VBQUE7VUFBQTt1QkFBQTs7QUFBQTtlQUFBO0FBQVA7O2lCQUFzQixBQUF0QixtQkFBQTsyQkFBQTtBQUFBIiwiZmlsZSI6ImdldENvbnRyYWN0U3VtbWFyeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==