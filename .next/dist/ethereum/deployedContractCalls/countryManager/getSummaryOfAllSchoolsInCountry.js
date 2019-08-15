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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9jb3VudHJ5TWFuYWdlci9nZXRTdW1tYXJ5T2ZBbGxTY2hvb2xzSW5Db3VudHJ5LmpzIl0sIm5hbWVzIjpbIkdldFNjaG9vbFN1bW1hcnkiLCJjb3VudHJ5TWFuYWdlck5pZ2VyaWFTdW1tYXJ5IiwibGlzdE9mU2Nob29sSW5OaWdlcmlhIiwic3VtbWFyeSIsImkiLCJsZW5ndGgiLCJwdXNoIiwiZ2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVQsQUFBaUMsQUFBakMsQUFFQTs7Ozs4QkFBQTtxRkFBZSxpQkFDZCxBQURjLDhCQUFBO2dDQUFBO2dFQUFBO2FBQUE7cUNBQUE7VUFHZDtBQUNNO0FBSlEsOEJBSWdCLDZCQUE2QixBQUE3QixBQUpoQixBQU1WO0FBTlUsZ0JBTUEsQUFOQSxBQU9UO1VBQUksQUFQSzs7VUFBQTtZQU9GLElBQUksc0JBQXNCLEFBUHhCLFNBQUE7dUJBQUE7QUFBQTtBQUFBOztvQkFRYixBQVJhO3NCQUFBO2FBUU0sMENBQWlCLHNCQUFzQixBQUF0QixBQUFqQixBQVJOOztVQUFBOzZCQUFBOztrQkFRTCxBQVJLLGdDQUFBOztVQU9nQztBQVBoQztzQkFBQTtBQUFBOztVQUFBO3VDQVdQLEFBWE87O1VBQUE7VUFBQTtzQkFBQTs7QUFBQTtjQUFBO0FBQWY7O1VBQThCLEFBQTlCLG9DQUFBOzBCQUFBO0FBQUE7O1FBQThCLEFBQTlCIiwiZmlsZSI6ImdldFN1bW1hcnlPZkFsbFNjaG9vbHNJbkNvdW50cnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=