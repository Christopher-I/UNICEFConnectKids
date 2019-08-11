"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.data = exports.columns = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/tables/ISPTableColumnAndData.js";
var columns = exports.columns = [{
	title: "School Name",
	dataIndex: "name",
	key: "name",
	render: function render(text) {
		return _react2.default.createElement("a", { href: "javascript:;", __source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		}, text);
	}
}, {
	title: "Population",
	dataIndex: "population",
	key: "population"
}, {
	title: "Location",
	dataIndex: "address",
	key: "address"
}, {
	title: "Status",
	key: "tags",
	dataIndex: "tags",
	render: function render(tags) {
		return _react2.default.createElement("span", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 26
			}
		}, tags.map(function (tag) {
			var color = "green";
			if (tag === "Not Connected") {
				color = "volcano";
			}
			return _react2.default.createElement(_antd.Tag, { color: color, key: tag, __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, tag.toUpperCase());
		}));
	}
}, {
	title: "Action",
	key: "action",
	render: function render(text, record) {
		return _react2.default.createElement("span", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 45
			}
		}, _react2.default.createElement("a", { href: "javascript:;", __source: {
				fileName: _jsxFileName,
				lineNumber: 46
			}
		}, "Details"));
	}
}];

var data = exports.data = [{
	key: "1",
	name: "John Brown",
	age: 32,
	address: "New York No. 1 Lake Park",
	tags: ["Connected"]
}, {
	key: "2",
	name: "Jim Green",
	age: 42,
	address: "London No. 1 Lake Park",
	tags: ["Not Connected"]
}, {
	key: "3",
	name: "Joe Black",
	age: 32,
	address: "Sidney No. 1 Lake Park",
	tags: ["Connected"]
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvdGFibGVzL0lTUFRhYmxlQ29sdW1uQW5kRGF0YS5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsIkRpdmlkZXIiLCJUYWciLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwidGFncyIsIm1hcCIsImNvbG9yIiwidGFnIiwidG9VcHBlckNhc2UiLCJyZWNvcmQiLCJkYXRhIiwibmFtZSIsImFnZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFPLEFBQVMsQUFFekI7Ozs7O0FBQU8sSUFBTTtRQUNaLEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQUhELEFBR00sQUFDTDtTQUFRLHNCQUFBO3lCQUFRLGNBQUEsT0FBRyxNQUFILEFBQVE7Y0FBUjtnQkFBQSxBQUF3QjtBQUF4QjtHQUFBLEVBQVIsQUFBUTtBQUxLLEFBQ3RCO0FBQUEsQUFDQyxDQUZxQjtRQVF0QixBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUFYcUIsQUFRdEIsQUFHTTtBQUhOLEFBQ0M7UUFJRCxBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUFoQnFCLEFBYXRCLEFBR007QUFITixBQUNDO1FBSUQsQUFDUSxBQUNQO01BRkQsQUFFTSxBQUNMO1lBSEQsQUFHWSxBQUNYO1NBQVEsc0JBQUE7eUJBQ1AsY0FBQTs7Y0FBQTtnQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLE9BQ0UsQUFBSyxJQUFJLGVBQU8sQUFDaEI7T0FBSSxRQUFKLEFBQVksQUFDWjtPQUFJLFFBQUosQUFBWSxpQkFBaUIsQUFDNUI7WUFBQSxBQUFRLEFBQ1I7QUFDRDswQkFDQyxBQUFDLDJCQUFJLE9BQUwsQUFBWSxPQUFPLEtBQW5CLEFBQXdCO2VBQXhCO2lCQUFBLEFBQ0U7QUFERjtJQUFBLE1BREQsQUFDQyxBQUNFLEFBQUksQUFHUDtBQVpLLEFBQ1AsQUFDRTtBQXhCa0IsQUFrQnRCO0FBQUEsQUFDQztRQW1CRCxBQUNRLEFBQ1A7TUFGRCxBQUVNLEFBQ0w7U0FBUSxnQkFBQSxBQUFDLE1BQUQsQUFBTyxRQUFQO3lCQUNQLGNBQUE7O2NBQUE7Z0JBQUEsQUFDQztBQUREO0FBQUEsR0FBQSxrQkFDQyxjQUFBLE9BQUcsTUFBSCxBQUFRO2NBQVI7Z0JBQUE7QUFBQTtLQUZNLEFBQ1AsQUFDQztBQTNDRyxBQUFnQixBQXNDdEIsQUFXRDtBQVhDLEFBQ0M7O0FBVUssSUFBTTtNQUNaLEFBQ00sQUFDTDtPQUZELEFBRU8sQUFDTjtNQUhELEFBR00sQUFDTDtVQUpELEFBSVUsQUFDVDtPQUFNLENBTlksQUFDbkIsQUFLTyxBQUFDO0FBTFIsQUFDQyxDQUZrQjtNQVFuQixBQUNNLEFBQ0w7T0FGRCxBQUVPLEFBQ047TUFIRCxBQUdNLEFBQ0w7VUFKRCxBQUlVLEFBQ1Q7T0FBTSxDQWJZLEFBUW5CLEFBS08sQUFBQztBQUxSLEFBQ0M7TUFNRCxBQUNNLEFBQ0w7T0FGRCxBQUVPLEFBQ047TUFIRCxBQUdNLEFBQ0w7VUFKRCxBQUlVLEFBQ1Q7T0FBTSxDQXBCRCxBQUFhLEFBZW5CLEFBS08sQUFBQztBQUxSLEFBQ0MiLCJmaWxlIjoiSVNQVGFibGVDb2x1bW5BbmREYXRhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9