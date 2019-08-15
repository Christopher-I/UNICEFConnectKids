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