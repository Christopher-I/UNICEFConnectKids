import React from "react";
import { Table, Tag } from "antd";
import GetListOfCountryManagers from "../../ethereum/deployedContractCalls/main/getListOfCountryManagers";
import CreateNewCountryManger from "../../ethereum/deployedContractCalls/main/createNewCountryManager";
import {
	mainContractAddress,
	owner
} from "../../ethereum/ListofSmartContractAddresses";
import {
	GetCountryManagerSummary,
	GetSchoolSummary
} from "../../ethereum/deployedContractCalls/getContractSummary";
import PlaceBidModal from "../modals/placeBidModal";
import GetSummaryOfAllSchoolsInCountry from "../../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry";
import GetSummaryOfAllISPsInCountry from "../../ethereum/deployedContractCalls/countryManager/getSummaryOfAll_ISPsInCountry";

class ISPTable extends React.Component {
	state = {
		data: "",
		columns: [
			{
				title: "ISP Name",
				dataIndex: "0",
				key: "0",
				render: text => <a href="javascript:;">{text}</a>
			},

			{
				title: "Promised Data Size(GB)",
				dataIndex: "2",
				key: "2"
			},
			{
				title: "Promised Upload Speed(MB/s)",
				dataIndex: "3",
				key: "3"
			},

			{
				title: "Promised Download Speed(MB/s)",
				dataIndex: "4",
				key: "4"
			},
			{
				title: "Reputation/Consistency Score",
				dataIndex: "6",
				key: "6"
			},
			{
				title: "Bid",
				key: "tags",
				dataIndex: "4",
				render: bool => {
					if (bool === true) {
						return <Tag color="green">Current Provider</Tag>;
					} else {
						return (
							<Tag color="blue" onClick={this.placeBidModalOpen}>
								Place Bid
							</Tag>
						);
					}
				}
			}
		]
	};

	placeBidModalOpen = e => {
		this.setState({
			placeBidVisibility: true
		});
	};

	placeBidModalhandleCancel = e => {
		this.setState({
			placeBidVisibility: false
		});
	};

	placeBidModalhandleOk = e => {
		this.setState({
			placeBidVisibility: false
		});
	};

	async componentDidMount() {
		try {
			//gets a list of country managers
			let result = await GetListOfCountryManagers(mainContractAddress);
			//the first country oin the away is Nigeria
			const countryManagerNigeria = result[0];
			// //get the summary of the contract manager of Nigeria
			const countryManagerNigeriaSummary = await GetCountryManagerSummary(
				countryManagerNigeria
			);

			//get summary of all ISP under the contract manager of Nigeria
			const ISPSummary = await GetSummaryOfAllISPsInCountry(
				countryManagerNigeriaSummary
			);

			this.setState({
				data: ISPSummary
			});
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}
	}

	render() {
		return (
			<div>
				<PlaceBidModal
					placeBidVisibility={this.state.placeBidVisibility}
					placeBidModalhandleOk={this.placeBidModalhandleOk}
					placeBidModalhandleCancel={this.placeBidModalhandleCancel}
				/>
				<Table
					columns={this.state.columns}
					dataSource={this.state.data}
				/>
			</div>
		);
	}
}

export default ISPTable;
