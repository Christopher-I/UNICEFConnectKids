import React from "react";
import { mainContractAddress } from "../../ethereum/ListofSmartContractAddresses";
import ListOfCountryManagers from "../../ethereum/deployedContractCalls/main/getListOfCountryManagers";
import { GetCountryManagerSummary } from "../../ethereum/deployedContractCalls/getContractSummary";

class showMeAddresses extends React.Component {
	state = {};

	async componentDidMount() {
		//Get me all manager addresses

		const addressesOfAllCountryManagers = await ListOfCountryManagers(
			mainContractAddress
		);
		console.log(
			"address of all country managers " + addressesOfAllCountryManagers
		);

		let summary = await GetCountryManagerSummary(
			addressesOfAllCountryManagers[0]
		);
		console.log("address of all Schools " + summary[1]);
		console.log("address of all ISPs " + summary[2]);
	}

	render() {
		return <div>Open Inspect Console to view addresses</div>;
	}
}

export default showMeAddresses;
