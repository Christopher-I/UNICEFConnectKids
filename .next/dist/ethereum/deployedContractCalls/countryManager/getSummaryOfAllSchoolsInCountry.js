"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getContractSummary = require("../getContractSummary");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(countryManagerNigeriaSummary) {
		var listOfSchoolInNigeria, i, summary;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						//the first array contains all created schools in Nigera
						listOfSchoolInNigeria = countryManagerNigeriaSummary[1];
						summary = [];
						i = 0;

					case 3:
						if (!(i < listOfSchoolInNigeria.length)) {
							_context.next = 12;
							break;
						}

						_context.t0 = summary;
						_context.next = 7;
						return (0, _getContractSummary.GetSchoolSummary)(listOfSchoolInNigeria[i]);

					case 7:
						_context.t1 = _context.sent;

						_context.t0.push.call(_context.t0, _context.t1);

					case 9:
						i++;
						_context.next = 3;
						break;

					case 12:
						return _context.abrupt("return", summary);

					case 13:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	function getSummaryOfAllSchoolsInCountry(_x) {
		return _ref.apply(this, arguments);
	}

	return getSummaryOfAllSchoolsInCountry;
}();