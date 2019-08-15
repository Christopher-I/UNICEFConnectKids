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
						listOfSchoolInNigeria = countryManagerNigeriaSummary[2];
						summary = [];
						i = 0;

					case 3:
						if (!(i < listOfSchoolInNigeria.length)) {
							_context.next = 12;
							break;
						}

						_context.t0 = summary;
						_context.next = 7;
						return (0, _getContractSummary.GetISPSummary)(listOfSchoolInNigeria[i]);

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

	function getSummaryOfAllISPsInCountry(_x) {
		return _ref.apply(this, arguments);
	}

	return getSummaryOfAllISPsInCountry;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9jb3VudHJ5TWFuYWdlci9nZXRTdW1tYXJ5T2ZBbGxfSVNQc0luQ291bnRyeS5qcyJdLCJuYW1lcyI6WyJHZXRJU1BTdW1tYXJ5IiwiY291bnRyeU1hbmFnZXJOaWdlcmlhU3VtbWFyeSIsImxpc3RPZlNjaG9vbEluTmlnZXJpYSIsInN1bW1hcnkiLCJpIiwibGVuZ3RoIiwicHVzaCIsImdldFN1bW1hcnlPZkFsbElTUHNJbkNvdW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFULEFBQThCLEFBQTlCLEFBRUE7Ozs7OEJBQUE7cUZBQWUsaUJBQ2QsQUFEYyw4QkFBQTtnQ0FBQTtnRUFBQTthQUFBO3FDQUFBO1VBR2Q7QUFDTTtBQUpRLDhCQUlnQiw2QkFBNkIsQUFBN0IsQUFKaEIsQUFNVjtBQU5VLGdCQU1BLEFBTkEsQUFPVDtVQUFJLEFBUEs7O1VBQUE7WUFPRixJQUFJLHNCQUFzQixBQVB4QixTQUFBO3VCQUFBO0FBQUE7QUFBQTs7b0JBUWIsQUFSYTtzQkFBQTthQVFNLHVDQUFjLHNCQUFzQixBQUF0QixBQUFkLEFBUk47O1VBQUE7NkJBQUE7O2tCQVFMLEFBUkssZ0NBQUE7O1VBT2dDO0FBUGhDO3NCQUFBO0FBQUE7O1VBQUE7dUNBV1AsQUFYTzs7VUFBQTtVQUFBO3NCQUFBOztBQUFBO2NBQUE7QUFBZjs7VUFBOEIsQUFBOUIsaUNBQUE7MEJBQUE7QUFBQTs7UUFBOEIsQUFBOUIiLCJmaWxlIjoiZ2V0U3VtbWFyeU9mQWxsX0lTUHNJbkNvdW50cnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=