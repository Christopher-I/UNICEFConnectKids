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

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/tables/ISPTableColumnAndData.js";
var columns = exports.columns = [{
	title: "ISP Name",
	dataIndex: "0",
	key: "0",
	render: function render(text) {
		return _react2.default.createElement("a", { href: "javascript:;", __source: {
				fileName: _jsxFileName,
				lineNumber: 18
			}
		}, text);
	}
}, {
	title: "Promised Data Size(GB)",
	dataIndex: "2",
	key: "2"
}, {
	title: "Promised Upload Speed(MB/s)",
	dataIndex: "3",
	key: "3"
}, {
	title: "Promised Download Speed(MB/s)",
	dataIndex: "4",
	key: "4"
}, {
	title: "Perfomance Score",
	dataIndex: "5",
	key: "5"
}, {
	title: "Consistency Score",
	dataIndex: "6",
	key: "6"
}, {
	title: "Status",
	key: "tags",
	dataIndex: "4",
	render: function render(bool) {
		if (bool === true) {
			return _react2.default.createElement(_antd.Tag, { color: "green", __source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, "Current Provider");
		} else {
			return _react2.default.createElement(_antd.Tag, { color: "red", __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, "Not Provider");
		}
	}
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvdGFibGVzL0lTUFRhYmxlQ29sdW1uQW5kRGF0YS5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsIkRpdmlkZXIiLCJUYWciLCJHZXRMaXN0T2ZDb3VudHJ5TWFuYWdlcnMiLCJHZXRDb3VudHJ5TWFuYWdlclN1bW1hcnkiLCJHZXRTY2hvb2xTdW1tYXJ5IiwiR2V0U3VtbWFyeU9mQWxsU2Nob29sc0luQ291bnRyeSIsIm1haW5Db250cmFjdEFkZHJlc3MiLCJvd25lciIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsInJlbmRlciIsInRleHQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBTyxBQUFTOztBQUN6QixBQUFPLEFBQThCOzs7O0FBQ3JDLEFBQ0MsQUFDQSxBQUNNOztBQUNQLEFBQU8sQUFBcUM7Ozs7QUFDNUMsQUFDQyxBQUNBLEFBQ00sQUFFUDs7Ozs7QUFBTyxJQUFNO1FBQ1osQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BSEQsQUFHTSxBQUNMO1NBQVEsc0JBQUE7eUJBQVEsY0FBQSxPQUFHLE1BQUgsQUFBUTtjQUFSO2dCQUFBLEFBQXdCO0FBQXhCO0dBQUEsRUFBUixBQUFRO0FBTEssQUFDdEI7QUFBQSxBQUNDLENBRnFCO1FBUXRCLEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQVhxQixBQVF0QixBQUdNO0FBSE4sQUFDQztRQUlELEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQWhCcUIsQUFhdEIsQUFHTTtBQUhOLEFBQ0M7UUFLRCxBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUF0QnFCLEFBbUJ0QixBQUdNO0FBSE4sQUFDQztRQUlELEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQTNCcUIsQUF3QnRCLEFBR007QUFITixBQUNDO1FBSUQsQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BaENxQixBQTZCdEIsQUFHTTtBQUhOLEFBQ0M7UUFJRCxBQUNRLEFBQ1A7TUFGRCxBQUVNLEFBQ0w7WUFIRCxBQUdZLEFBQ1g7U0FBUSxzQkFBUSxBQUNmO01BQUksU0FBSixBQUFhLE1BQU0sQUFDbEI7MEJBQU8sQUFBQywyQkFBSSxPQUFMLEFBQVc7ZUFBWDtpQkFBQTtBQUFBO0lBQUEsRUFBUCxBQUFPLEFBQ1A7QUFGRCxTQUVPLEFBQ047MEJBQU8sQUFBQywyQkFBSSxPQUFMLEFBQVc7ZUFBWDtpQkFBQTtBQUFBO0lBQUEsRUFBUCxBQUFPLEFBQ1A7QUFDRDtBQTVDSSxBQUFnQixBQWtDdEI7QUFBQSxBQUNDIiwiZmlsZSI6IklTUFRhYmxlQ29sdW1uQW5kRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==