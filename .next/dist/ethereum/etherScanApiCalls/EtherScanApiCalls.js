"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBalance = getBalance;
exports.getAllTransactions = getAllTransactions;

var _ListofSmartContractAddresses = require("../../ethereum/ListofSmartContractAddresses");

function getBalance() {
  var _this = this;

  fetch("https://api.etherscan.io/api?module=account&action=balance&address=" + this.props.match.params.address + "&tag=latest&apikey=G3YFDTNGGMTBCRRQEZ65CC6NR6RB4HC47U").then(function (res) {
    return res.json();
  }).then(function (result) {
    _this.setState({
      isLoaded: true,

      balance: result.result
    });
  },

  // Handle errors.
  function (error) {
    _this.setState({
      isLoaded: true,

      error: error
    });
  });
}

function getAllTransactions() {
  var _this2 = this;

  fetch("http://api.etherscan.io/api?module=account&action=txlist&address=" + this.props.match.params.address + "&startblock=0&endblock=99999999&sort=asc&apikey=G3YFDTNGGMTBCRRQEZ65CC6NR6RB4HC47U").then(function (res) {
    return res.json();
  }).then(function (result) {
    _this2.setState({
      isLoaded: true,
      loading: false,
      data: result.result
    });
  },

  // Handle errors.
  function (error) {
    _this2.setState({
      isLoaded: true,
      loading: false,
      error: error
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2V0aGVyU2NhbkFwaUNhbGxzL0V0aGVyU2NhbkFwaUNhbGxzLmpzIl0sIm5hbWVzIjpbIm1haW5Db250cmFjdEFkZHJlc3MiLCJvd25lciIsImdldEJhbGFuY2UiLCJmZXRjaCIsInByb3BzIiwibWF0Y2giLCJwYXJhbXMiLCJhZGRyZXNzIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImlzTG9hZGVkIiwiYmFsYW5jZSIsInJlc3VsdCIsImVycm9yIiwiZ2V0QWxsVHJhbnNhY3Rpb25zIiwibG9hZGluZyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7O1FBS08sQUFBUztRQTJCVCxBQUFTOztBQWhDaEIsQUFDRSxBQUNBLEFBQ0ssQUFFUDs7QUFBTyxzQkFBc0I7Y0FDM0I7O2dGQUVJLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixPQUZyQixBQUU0QixtRUFGNUIsQUFLRyxLQUFLLGVBQUE7V0FBTyxJQUFQLEFBQU8sQUFBSTtBQUxuQixLQUFBLEFBTUcsS0FDQyxrQkFBVSxBQUNSO1VBQUEsQUFBSztnQkFBUyxBQUNGLEFBRVY7O2VBQVMsT0FIWCxBQUFjLEFBR0ksQUFFbkI7QUFMZSxBQUNaO0FBVFIsQUFlSTs7QUFDQTttQkFBUyxBQUNQO1VBQUEsQUFBSztnQkFBUyxBQUNGLEFBRVY7O2FBSEYsQUFBYyxBQUtmO0FBTGUsQUFDWjtBQWxCUixBQXdCRDtBQUVEOztBQUFPLDhCQUE4QjtlQUNuQzs7OEVBRUksS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BRnJCLEFBRTRCLGdHQUY1QixBQUtHLEtBQUssZUFBQTtXQUFPLElBQVAsQUFBTyxBQUFJO0FBTG5CLEtBQUEsQUFNRyxLQUNDLGtCQUFVLEFBQ1I7V0FBQSxBQUFLO2dCQUFTLEFBQ0YsQUFDVjtlQUZZLEFBRUgsQUFDVDtZQUFNLE9BSFIsQUFBYyxBQUdDLEFBRWhCO0FBTGUsQUFDWjtBQVRSLEFBZUk7O0FBQ0E7bUJBQVMsQUFDUDtXQUFBLEFBQUs7Z0JBQVMsQUFDRixBQUNWO2VBRlksQUFFSCxBQUNUO2FBSEYsQUFBYyxBQUtmO0FBTGUsQUFDWjtBQWxCUixBQXdCRCIsImZpbGUiOiJFdGhlclNjYW5BcGlDYWxscy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9VbmljZWYvY29ubmVjdEtpZHNVbmljZWYifQ==