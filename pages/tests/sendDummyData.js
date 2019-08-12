import React from "react";
import CallDummyData from "../../ethereum/deployedContractCalls/school/sendDummyData";
import { Button } from "antd";
import { schoolAddress } from "../../ethereum/ListofSmartContractAddresses";

class sendDummyData extends React.Component {
	async CallDummyData(e) {
		e.preventDefault();
		console.log(await CallDummyData(schoolAddress));
	}

	render() {
		return <Button onClick={this.CallDummyData}>Send Dummy Data </Button>;
	}
}

export default sendDummyData;
