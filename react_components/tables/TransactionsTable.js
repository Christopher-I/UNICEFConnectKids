import React from "react";
import { Table, Tag } from "antd";
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
		data: "",
		columns: [
			{
				title: "Date",
				dataIndex: "timeStamp",
				key: "timeStamp",
				render: text => {
					let x = new Date(text * 1000);
					if (text > 0) {
						return (
							<p>
								{x.getDate() +
									"-" +
									(x.getMonth() + 1) +
									"-" +
									x.getFullYear()}
							</p>
						);
					}
				}
			},
			{
				title: "From",
				dataIndex: "from",
				key: "from",
				render: text => {
					if (text === countryManagerAddress) {
						return (
							<Tag color="green">Country Managers Account</Tag>
						);
					} else {
						return (
							<a
								href={`https://rinkeby.etherscan.io/address/${text}`}
							>
								{text}
							</a>
						);
					}
				}
			},

			{
				title: "To",
				dataIndex: "to",
				key: "2=to",
				render: text => {
					if (text === countryManagerAddress) {
						return <Tag color="blue">Country Managers Account</Tag>;
					} else {
						return (
							<a
								href={`https://rinkeby.etherscan.io/address/${text}`}
							>
								{text}
							</a>
						);
					}
				}
			},
			{
				title: "Value(wei)",
				dataIndex: "value",
				key: "value"
			}
		]
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
				columns={this.state.columns}
				dataSource={this.state.data}
				scroll={{ x: 240 }}
			/>
		);
	}
}

export default TransactionsTable;
