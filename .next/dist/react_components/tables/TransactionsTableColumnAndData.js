"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.columns = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _getListOfCountryManagers = require("../../ethereum/deployedContractCalls/main/getListOfCountryManagers");

var _getListOfCountryManagers2 = _interopRequireDefault(_getListOfCountryManagers);

var _getContractSummary = require("../../ethereum/deployedContractCalls/getContractSummary");

var _getSummaryOfAllSchoolsInCountry = require("../../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry");

var _getSummaryOfAllSchoolsInCountry2 = _interopRequireDefault(_getSummaryOfAllSchoolsInCountry);

var _ListofSmartContractAddresses = require("../../ethereum/ListofSmartContractAddresses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/tables/TransactionsTableColumnAndData.js";
var columns = exports.columns = [{
	title: "Time",
	dataIndex: "timeStamp",
	key: "timeStamp"
}, {
	title: "From",
	dataIndex: "from",
	key: "from",
	render: function render(text) {
		if (text === "0xbd4cccde1c1c7eb3c702d3a3c37e51e2928d1bd8") {
			return _react2.default.createElement(_antd.Tag, { color: "green", __source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}, "Country Managers Account");
		} else {
			return _react2.default.createElement("a", { href: "https://rinkeby.etherscan.io/address/" + text, __source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}, text);
		}
	}
}, {
	title: "To",
	dataIndex: "to",
	key: "2=to",
	render: function render(text) {
		if (text === "0xbd4cccde1c1c7eb3c702d3a3c37e51e2928d1bd8") {
			return _react2.default.createElement(_antd.Tag, { color: "blue", __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, "Country Managers Account");
		} else {
			return _react2.default.createElement("a", { href: "https://rinkeby.etherscan.io/address/" + text, __source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, text);
		}
	}
}, {
	title: "Value",
	dataIndex: "value",
	key: "value"
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvdGFibGVzL1RyYW5zYWN0aW9uc1RhYmxlQ29sdW1uQW5kRGF0YS5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsIkRpdmlkZXIiLCJUYWciLCJHZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnMiLCJHZXRDb3VudHJ5TWFuYWdlclN1bW1hcnkiLCJHZXRTY2hvb2xTdW1tYXJ5IiwiR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeSIsImNvdW50cnlNYW5hZ2VyQWRkcmVzcyIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsInJlbmRlciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFPLEFBQVM7O0FBQ3pCLEFBQU8sQUFBOEI7Ozs7QUFDckMsQUFDQyxBQUNBLEFBQ007O0FBQ1AsQUFBTyxBQUFxQzs7OztBQUM1QyxBQUFTLEFBQTZCLEFBRXRDOzs7OztBQUFPLElBQU07UUFDWixBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUFKcUIsQUFDdEIsQUFHTTtBQUhOLEFBQ0MsQ0FGcUI7UUFNdEIsQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BSEQsQUFHTSxBQUNMO1NBQVEsc0JBQVEsQUFDZjtNQUFJLFNBQUosQUFBYSw4Q0FBOEMsQUFDMUQ7MEJBQU8sQUFBQywyQkFBSSxPQUFMLEFBQVc7ZUFBWDtpQkFBQTtBQUFBO0lBQUEsRUFBUCxBQUFPLEFBQ1A7QUFGRCxTQUVPLEFBQ047MEJBQ0MsY0FBQSxPQUFHLGdEQUFILEFBQWlEO2VBQWpEO2lCQUFBLEFBQ0U7QUFERjtJQUFBLEVBREQsQUFDQyxBQUlEO0FBQ0Q7QUFwQm9CLEFBTXRCO0FBQUEsQUFDQztRQWdCRCxBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUFIRCxBQUdNLEFBQ0w7U0FBUSxzQkFBUSxBQUNmO01BQUksU0FBSixBQUFhLDhDQUE4QyxBQUMxRDswQkFBTyxBQUFDLDJCQUFJLE9BQUwsQUFBVztlQUFYO2lCQUFBO0FBQUE7SUFBQSxFQUFQLEFBQU8sQUFDUDtBQUZELFNBRU8sQUFDTjswQkFDQyxjQUFBLE9BQUcsZ0RBQUgsQUFBaUQ7ZUFBakQ7aUJBQUEsQUFDRTtBQURGO0lBQUEsRUFERCxBQUNDLEFBSUQ7QUFDRDtBQXJDb0IsQUF1QnRCO0FBQUEsQUFDQztRQWVELEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQTFDSyxBQUFnQixBQXVDdEIsQUFHTTtBQUhOLEFBQ0MiLCJmaWxlIjoiVHJhbnNhY3Rpb25zVGFibGVDb2x1bW5BbmREYXRhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9