import {
  mainContractAddress,
  owner
} from "../../ethereum/ListofSmartContractAddresses";

export function getBalance() {
  fetch(
    `https://api.etherscan.io/api?module=account&action=balance&address=${
      this.props.match.params.address
    }&tag=latest&apikey=G3YFDTNGGMTBCRRQEZ65CC6NR6RB4HC47U`
  )
    .then(res => res.json())
    .then(
      result => {
        this.setState({
          isLoaded: true,

          balance: result.result
        });
      },

      // Handle errors.
      error => {
        this.setState({
          isLoaded: true,

          error
        });
      }
    );
}

export function getAllTransactions() {
  fetch(
    `http://api.etherscan.io/api?module=account&action=txlist&address=${
      this.props.match.params.address
    }&startblock=0&endblock=99999999&sort=asc&apikey=G3YFDTNGGMTBCRRQEZ65CC6NR6RB4HC47U`
  )
    .then(res => res.json())
    .then(
      result => {
        this.setState({
          isLoaded: true,
          loading: false,
          data: result.result
        });
      },

      // Handle errors.
      error => {
        this.setState({
          isLoaded: true,
          loading: false,
          error
        });
      }
    );
}
