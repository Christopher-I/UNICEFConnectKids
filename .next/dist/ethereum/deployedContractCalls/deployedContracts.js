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