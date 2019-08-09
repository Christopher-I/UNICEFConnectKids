"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.data = exports.columns = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/TableComponents/ISPTableColumnAndData.js";
var columns = exports.columns = [{
	title: "Name",
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
	title: "Age",
	dataIndex: "age",
	key: "age"
}, {
	title: "Address",
	dataIndex: "address",
	key: "address"
}, {
	title: "Tags",
	key: "tags",
	dataIndex: "tags",
	render: function render(tags) {
		return _react2.default.createElement("span", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 25
			}
		}, tags.map(function (tag) {
			var color = tag.length > 5 ? "geekblue" : "green";
			if (tag === "loser") {
				color = "volcano";
			}
			return _react2.default.createElement(_antd.Tag, { color: color, key: tag, __source: {
					fileName: _jsxFileName,
					lineNumber: 32
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
				lineNumber: 44
			}
		}, _react2.default.createElement("a", { href: "javascript:;", __source: {
				fileName: _jsxFileName,
				lineNumber: 45
			}
		}, "Invite ", record.name), _react2.default.createElement(_antd.Divider, { type: "vertical", __source: {
				fileName: _jsxFileName,
				lineNumber: 46
			}
		}), _react2.default.createElement("a", { href: "javascript:;", __source: {
				fileName: _jsxFileName,
				lineNumber: 47
			}
		}, "Delete"));
	}
}];

var data = exports.data = [{
	key: "1",
	name: "John Brown",
	age: 32,
	address: "New York No. 1 Lake Park",
	tags: ["nice", "developer"]
}, {
	key: "2",
	name: "Jim Green",
	age: 42,
	address: "London No. 1 Lake Park",
	tags: ["loser"]
}, {
	key: "3",
	name: "Joe Black",
	age: 32,
	address: "Sidney No. 1 Lake Park",
	tags: ["cool", "teacher"]
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0X2NvbXBvbmVudHMvVGFibGVDb21wb25lbnRzL0lTUFRhYmxlQ29sdW1uQW5kRGF0YS5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsIkRpdmlkZXIiLCJUYWciLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwidGFncyIsIm1hcCIsImNvbG9yIiwidGFnIiwibGVuZ3RoIiwidG9VcHBlckNhc2UiLCJyZWNvcmQiLCJuYW1lIiwiZGF0YSIsImFnZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFPLEFBQVMsQUFFekI7Ozs7O0FBQU8sSUFBTTtRQUNaLEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQUhELEFBR00sQUFDTDtTQUFRLHNCQUFBO3lCQUFRLGNBQUEsT0FBRyxNQUFILEFBQVE7Y0FBUjtnQkFBQSxBQUF3QjtBQUF4QjtHQUFBLEVBQVIsQUFBUTtBQUxLLEFBQ3RCO0FBQUEsQUFDQyxDQUZxQjtRQU90QixBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUFWcUIsQUFPdEIsQUFHTTtBQUhOLEFBQ0M7UUFJRCxBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUFmcUIsQUFZdEIsQUFHTTtBQUhOLEFBQ0M7UUFJRCxBQUNRLEFBQ1A7TUFGRCxBQUVNLEFBQ0w7WUFIRCxBQUdZLEFBQ1g7U0FBUSxzQkFBQTt5QkFDUCxjQUFBOztjQUFBO2dCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsT0FDRSxBQUFLLElBQUksZUFBTyxBQUNoQjtPQUFJLFFBQVEsSUFBQSxBQUFJLFNBQUosQUFBYSxJQUFiLEFBQWlCLGFBQTdCLEFBQTBDLEFBQzFDO09BQUksUUFBSixBQUFZLFNBQVMsQUFDcEI7WUFBQSxBQUFRLEFBQ1I7QUFDRDswQkFDQyxBQUFDLDJCQUFJLE9BQUwsQUFBWSxPQUFPLEtBQW5CLEFBQXdCO2VBQXhCO2lCQUFBLEFBQ0U7QUFERjtJQUFBLE1BREQsQUFDQyxBQUNFLEFBQUksQUFHUDtBQVpLLEFBQ1AsQUFDRTtBQXZCa0IsQUFpQnRCO0FBQUEsQUFDQztRQW1CRCxBQUNRLEFBQ1A7TUFGRCxBQUVNLEFBQ0w7U0FBUSxnQkFBQSxBQUFDLE1BQUQsQUFBTyxRQUFQO3lCQUNQLGNBQUE7O2NBQUE7Z0JBQUEsQUFDQztBQUREO0FBQUEsR0FBQSxrQkFDQyxjQUFBLE9BQUcsTUFBSCxBQUFRO2NBQVI7Z0JBQUE7QUFBQTtLQUErQixrQkFEaEMsQUFDQyxBQUFzQyxBQUN0Qyx1QkFBQSxBQUFDLCtCQUFRLE1BQVQsQUFBYztjQUFkO2dCQUZELEFBRUMsQUFDQTtBQURBO3NCQUNBLGNBQUEsT0FBRyxNQUFILEFBQVE7Y0FBUjtnQkFBQTtBQUFBO0tBSk0sQUFDUCxBQUdDO0FBNUNHLEFBQWdCLEFBcUN0QixBQWFEO0FBYkMsQUFDQzs7QUFZSyxJQUFNO01BQ1osQUFDTSxBQUNMO09BRkQsQUFFTyxBQUNOO01BSEQsQUFHTSxBQUNMO1VBSkQsQUFJVSxBQUNUO09BQU0sQ0FBQSxBQUFDLFFBTlcsQUFDbkIsQUFLTyxBQUFTO0FBTGhCLEFBQ0MsQ0FGa0I7TUFRbkIsQUFDTSxBQUNMO09BRkQsQUFFTyxBQUNOO01BSEQsQUFHTSxBQUNMO1VBSkQsQUFJVSxBQUNUO09BQU0sQ0FiWSxBQVFuQixBQUtPLEFBQUM7QUFMUixBQUNDO01BTUQsQUFDTSxBQUNMO09BRkQsQUFFTyxBQUNOO01BSEQsQUFHTSxBQUNMO1VBSkQsQUFJVSxBQUNUO09BQU0sQ0FBQSxBQUFDLFFBcEJGLEFBQWEsQUFlbkIsQUFLTyxBQUFTO0FBTGhCLEFBQ0MiLCJmaWxlIjoiSVNQVGFibGVDb2x1bW5BbmREYXRhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL1VuaWNlZi9jb25uZWN0S2lkc1VuaWNlZiJ9