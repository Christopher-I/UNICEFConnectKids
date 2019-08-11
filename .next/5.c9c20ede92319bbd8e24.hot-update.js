webpackHotUpdate(5,{

/***/ 1293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.data = exports.columns = undefined;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(433);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/tables/ISPTableColumnAndData.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chris/Documents/BlockchainProjects/Unicef/connectKidsUnicef/react_components/tables/ISPTableColumnAndData.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jOWMyMGVkZTkyMzE5YmJkOGUyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVhY3RfY29tcG9uZW50cy90YWJsZXMvSVNQVGFibGVDb2x1bW5BbmREYXRhLmpzPzhiZDI4Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUsIERpdmlkZXIsIFRhZyB9IGZyb20gXCJhbnRkXCI7XG5cbmV4cG9ydCBjb25zdCBjb2x1bW5zID0gW1xuXHR7XG5cdFx0dGl0bGU6IFwiU2Nob29sIE5hbWVcIixcblx0XHRkYXRhSW5kZXg6IFwibmFtZVwiLFxuXHRcdGtleTogXCJuYW1lXCIsXG5cdFx0cmVuZGVyOiB0ZXh0ID0+IDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj57dGV4dH08L2E+XG5cdH0sXG5cblx0e1xuXHRcdHRpdGxlOiBcIlBvcHVsYXRpb25cIixcblx0XHRkYXRhSW5kZXg6IFwicG9wdWxhdGlvblwiLFxuXHRcdGtleTogXCJwb3B1bGF0aW9uXCJcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkxvY2F0aW9uXCIsXG5cdFx0ZGF0YUluZGV4OiBcImFkZHJlc3NcIixcblx0XHRrZXk6IFwiYWRkcmVzc1wiXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJTdGF0dXNcIixcblx0XHRrZXk6IFwidGFnc1wiLFxuXHRcdGRhdGFJbmRleDogXCJ0YWdzXCIsXG5cdFx0cmVuZGVyOiB0YWdzID0+IChcblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7dGFncy5tYXAodGFnID0+IHtcblx0XHRcdFx0XHRsZXQgY29sb3IgPSBcImdyZWVuXCI7XG5cdFx0XHRcdFx0aWYgKHRhZyA9PT0gXCJOb3QgQ29ubmVjdGVkXCIpIHtcblx0XHRcdFx0XHRcdGNvbG9yID0gXCJ2b2xjYW5vXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8VGFnIGNvbG9yPXtjb2xvcn0ga2V5PXt0YWd9PlxuXHRcdFx0XHRcdFx0XHR7dGFnLnRvVXBwZXJDYXNlKCl9XG5cdFx0XHRcdFx0XHQ8L1RhZz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvc3Bhbj5cblx0XHQpXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJBY3Rpb25cIixcblx0XHRrZXk6IFwiYWN0aW9uXCIsXG5cdFx0cmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiAoXG5cdFx0XHQ8c3Bhbj5cblx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPkRldGFpbHM8L2E+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KVxuXHR9XG5dO1xuXG5leHBvcnQgY29uc3QgZGF0YSA9IFtcblx0e1xuXHRcdGtleTogXCIxXCIsXG5cdFx0bmFtZTogXCJKb2huIEJyb3duXCIsXG5cdFx0YWdlOiAzMixcblx0XHRhZGRyZXNzOiBcIk5ldyBZb3JrIE5vLiAxIExha2UgUGFya1wiLFxuXHRcdHRhZ3M6IFtcIkNvbm5lY3RlZFwiXVxuXHR9LFxuXHR7XG5cdFx0a2V5OiBcIjJcIixcblx0XHRuYW1lOiBcIkppbSBHcmVlblwiLFxuXHRcdGFnZTogNDIsXG5cdFx0YWRkcmVzczogXCJMb25kb24gTm8uIDEgTGFrZSBQYXJrXCIsXG5cdFx0dGFnczogW1wiTm90IENvbm5lY3RlZFwiXVxuXHR9LFxuXHR7XG5cdFx0a2V5OiBcIjNcIixcblx0XHRuYW1lOiBcIkpvZSBCbGFja1wiLFxuXHRcdGFnZTogMzIsXG5cdFx0YWRkcmVzczogXCJTaWRuZXkgTm8uIDEgTGFrZSBQYXJrXCIsXG5cdFx0dGFnczogW1wiQ29ubmVjdGVkXCJdXG5cdH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWFjdF9jb21wb25lbnRzL3RhYmxlcy9JU1BUYWJsZUNvbHVtbkFuZERhdGEuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7OztBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTkE7QUFOQTtBQUNBO0FBcUJBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQVZBO0FBQ0E7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9