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
		title: "Perfomance Score",
		dataIndex: "5",
		key: "5"
	},
	{
		title: "Consistency Score",
		dataIndex: "6",
		key: "6"
	},
	{
		title: "Status",
		key: "tags",
		dataIndex: "4",
		render: bool => {
			if (bool === true) {
				return <Tag color="green">Current Provider</Tag>;
			} else {
				return <Tag color="red">Not Provider</Tag>;
			}
		}
	}
];
