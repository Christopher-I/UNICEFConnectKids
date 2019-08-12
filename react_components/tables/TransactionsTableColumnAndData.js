import { Table, Divider, Tag } from "antd";
import GetListOfCountryManagers from "../../ethereum/deployedContractCalls/main/getListOfCountryManagers";
import {
	GetCountryManagerSummary,
	GetSchoolSummary
} from "../../ethereum/deployedContractCalls/getContractSummary";
import GetSummaryOfAllSchoolsInCountry from "../../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry";
import { countryManagerAddress } from "../../ethereum/ListofSmartContractAddresses";

export const columns = [
	{
		title: "Time",
		dataIndex: "timeStamp",
		key: "timeStamp"
	},
	{
		title: "From",
		dataIndex: "from",
		key: "from",
		render: text => {
			if (text === "0xbd4cccde1c1c7eb3c702d3a3c37e51e2928d1bd8") {
				return <Tag color="green">Country Managers Account</Tag>;
			} else {
				return (
					<a href={`https://rinkeby.etherscan.io/address/${text}`}>
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
			if (text === "0xbd4cccde1c1c7eb3c702d3a3c37e51e2928d1bd8") {
				return <Tag color="blue">Country Managers Account</Tag>;
			} else {
				return (
					<a href={`https://rinkeby.etherscan.io/address/${text}`}>
						{text}
					</a>
				);
			}
		}
	},
	{
		title: "Value",
		dataIndex: "value",
		key: "value"
	}
];
