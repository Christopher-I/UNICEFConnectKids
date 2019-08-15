import React from "react";
import { Table, Tag, Modal, Progress } from "antd";
import InternetSpeedChart from "../../pages/chart/sample";
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
import GetSummaryOfAllSchoolsInCountry from "../../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry";
import GetSummaryOfAllISPsInCountry from "../../ethereum/deployedContractCalls/countryManager/getSummaryOfAll_ISPsInCountry";

class SchoolTable extends React.Component {
	state = {
		data: "",
		connectivityModalVisibility: false,
		columns1: [
			{
				title: "School Name",
				dataIndex: "0",
				key: "0",
				render: text => <a href="javascript:;">{text}</a>
			},

			{
				title: "Population",
				dataIndex: "3",
				key: "3"
			},
			{
				title: "Location",
				dataIndex: "2",
				key: "2"
			},
			{
				title: "Status",
				key: "tags",
				dataIndex: "4",
				render: bool => {
					if (bool === true) {
						return <Tag color="green">Connected</Tag>;
					} else {
						return <Tag color="red">Not Connected</Tag>;
					}
				}
			},
			{
				title: "",
				key: "action",
				render: (text, record) => (
					<span>
						<a
							onClick={this.openConnectivityModal}
							href="javascript:;"
						>
							Details
						</a>
					</span>
				)
			}
		]
	};

	openConnectivityModal = e => {
		this.setState({
			connectivityModalVisibility: true
		});
	};

	connectivityModalhandleCancel = e => {
		this.setState({
			connectivityModalVisibility: false
		});
	};

	connectivityModalhandleOk = e => {
		this.setState({
			connectivityModalVisibility: false
		});
	};

	async componentDidMount() {
		try {
			//gets a list of country managers
			let result = await GetListOfCountryManagers(mainContractAddress);
			//the first country oin the away is Nigeria
			const countryManagerNigeria = result[0];
			//get the summary of the contract manager of Nigeria
			const countryManagerNigeriaSummary = await GetCountryManagerSummary(
				countryManagerNigeria
			);
			//get summary of all schools under the contract manager of Nigeria
			const schoolSummary = await GetSummaryOfAllSchoolsInCountry(
				countryManagerNigeriaSummary
			);

			//console.log(JSON.parse(JSON.stringify(schoolSummary)));
			this.setState({
				data: schoolSummary
			});

			// //get summary of all ISP under the contract manager of Nigeria
			// const ISPSummary = await GetSummaryOfAllISPsInCountry(
			//   countryManagerNigeriaSummary
			// );
			// console.log(ISPSummary);
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}
	}

	render() {
		return (
			<div>
				<Table
					columns={this.state.columns1}
					dataSource={this.state.data}
				/>
				<Modal
					title="ISP Perfomance Chart"
					visible={this.state.connectivityModalVisibility}
					onOk={this.connectivityModalhandleOk}
					onCancel={this.connectivityModalhandleCancel}
				>
					Data Consumption Blue-School, Green - ISP
					<Progress
						percent={50}
						successPercent={30}
						showInfo={false}
					/>
					GB
					<div style={{ marginBottom: 16 }}>
						<InternetSpeedChart />{" "}
					</div>
				</Modal>
			</div>
		);
	}
}

export default SchoolTable;
