import React from "react";
import { Table } from "antd";
import { columns, data } from "./ISPTableColumnAndData";
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

class ISPTable extends React.Component {
	state = {
		data: ""
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

			console.log(this.state.data);
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}
	}

	render() {
		return <Table columns={columns} dataSource={this.state.data} />;
	}
}

export default ISPTable;
