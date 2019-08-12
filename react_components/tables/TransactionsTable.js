import React from "react";
import { Table } from "antd";
import { columns, data } from "./TransactionsTableColumnAndData";
import GetListOfCountryManagers from "../../ethereum/deployedContractCalls/main/getListOfCountryManagers";
import {
	mainContractAddress,
	countryManagerAddress
} from "../../ethereum/ListofSmartContractAddresses";
import {
	GetCountryManagerSummary,
	GetSchoolSummary
} from "../../ethereum/deployedContractCalls/getContractSummary";
import {
	getAllTransactions,
	getBalance
} from "../../ethereum/etherScanApiCalls/EtherScanApiCalls";

class TransactionsTable extends React.Component {
	state = {
		data: ""
	};

	async componentDidMount() {
		//fetch all transacations data from etherescan
		fetch(
			`https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=${countryManagerAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=YourApiKeyToken`
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

	render() {
		return (
			<Table
				columns={columns}
				dataSource={this.state.data}
				scroll={{ x: 240 }}
			/>
		);
	}
}

export default TransactionsTable;
