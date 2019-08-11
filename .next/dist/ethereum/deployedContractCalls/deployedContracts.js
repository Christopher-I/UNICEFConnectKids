"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MainDeployed = MainDeployed;
exports.CountryManagerDeployed = CountryManagerDeployed;
exports.ISPDeployed = ISPDeployed;
exports.SchoolDeployed = SchoolDeployed;

var _web = require("../web3");

var _web2 = _interopRequireDefault(_web);

var _Main = require("../build/Main.json");

var _Main2 = _interopRequireDefault(_Main);

var _countryManager = require("../build/countryManager.json");

var _countryManager2 = _interopRequireDefault(_countryManager);

var _ISP = require("../build/ISP.json");

var _ISP2 = _interopRequireDefault(_ISP);

var _School = require("../build/School.json");

var _School2 = _interopRequireDefault(_School);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainDeployed(address) {
	return new _web2.default.eth.Contract(JSON.parse(_Main2.default.interface), address);
}

function CountryManagerDeployed(address) {
	return new _web2.default.eth.Contract(JSON.parse(_countryManager2.default.interface), address);
}

function ISPDeployed(address) {
	return new _web2.default.eth.Contract(JSON.parse(_ISP2.default.interface), address);
}

function SchoolDeployed(address) {
	return new _web2.default.eth.Contract(JSON.parse(_School2.default.interface), address);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RDYWxscy9kZXBsb3llZENvbnRyYWN0cy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiTWFpbiIsIkNvdW50cnlNYW5hZ2VyIiwiSVNQIiwiU2Nob29sIiwiTWFpbkRlcGxveWVkIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwiQ291bnRyeU1hbmFnZXJEZXBsb3llZCIsIklTUERlcGxveWVkIiwiU2Nob29sRGVwbG95ZWQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTU8sQUFBUztRQUlULEFBQVM7UUFJVCxBQUFTO1FBSVQsQUFBUzs7QUFsQmhCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZLEFBRW5COzs7Ozs7QUFBTyxzQkFBQSxBQUFzQixTQUFTLEFBQ3JDO1FBQU8sSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQVMsS0FBQSxBQUFLLE1BQU0sZUFBakMsQUFBc0IsQUFBZ0IsWUFBN0MsQUFBTyxBQUFrRCxBQUN6RDtBQUVEOztBQUFPLGdDQUFBLEFBQWdDLFNBQVMsQUFDL0M7UUFBTyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FBUyxLQUFBLEFBQUssTUFBTSx5QkFBakMsQUFBc0IsQUFBMEIsWUFBdkQsQUFBTyxBQUE0RCxBQUNuRTtBQUVEOztBQUFPLHFCQUFBLEFBQXFCLFNBQVMsQUFDcEM7UUFBTyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FBUyxLQUFBLEFBQUssTUFBTSxjQUFqQyxBQUFzQixBQUFlLFlBQTVDLEFBQU8sQUFBaUQsQUFDeEQ7QUFFRDs7QUFBTyx3QkFBQSxBQUF3QixTQUFTLEFBQ3ZDO1FBQU8sSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQVMsS0FBQSxBQUFLLE1BQU0saUJBQWpDLEFBQXNCLEFBQWtCLFlBQS9DLEFBQU8sQUFBb0QsQUFDM0QiLCJmaWxlIjoiZGVwbG95ZWRDb250cmFjdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9CbG9ja2NoYWluUHJvamVjdHMvVW5pY2VmL2Nvbm5lY3RLaWRzVW5pY2VmIn0=