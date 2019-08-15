"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== "undefined" && (0, _typeof3.default)(window.web3) !== undefined) {
	//we are in the browser and metamask is running.
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	//we are on the server or the user is not running metamask
	var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe");
	web3 = new _web2.default(provider);
}

exports.default = web3;