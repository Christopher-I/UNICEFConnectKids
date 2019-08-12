import { Table, Divider, Tag } from "antd";
import GetListOfCountryManagers from "../../ethereum/deployedContractCalls/main/getListOfCountryManagers";
import {
	GetCountryManagerSummary,
	GetSchoolSummary
} from "../../ethereum/deployedContractCalls/getContractSummary";
import GetSummaryOfAllSchoolsInCountry from "../../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry";
import {
	mainContractAddress,
	owner
} from "../../ethereum/ListofSmartContractAddresses";

export const columns = [
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
				<a href="javascript:;">Details</a>
			</span>
		)
	}
];
