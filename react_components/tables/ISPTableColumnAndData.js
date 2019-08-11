import { Table, Divider, Tag } from "antd";

export const columns = [
	{
		title: "School Name",
		dataIndex: "name",
		key: "name",
		render: text => <a href="javascript:;">{text}</a>
	},

	{
		title: "Population",
		dataIndex: "population",
		key: "population"
	},
	{
		title: "Location",
		dataIndex: "address",
		key: "address"
	},
	{
		title: "Status",
		key: "tags",
		dataIndex: "tags",
		render: tags => (
			<span>
				{tags.map(tag => {
					let color = "green";
					if (tag === "Not Connected") {
						color = "volcano";
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</span>
		)
	},
	{
		title: "Action",
		key: "action",
		render: (text, record) => (
			<span>
				<a href="javascript:;">Details</a>
			</span>
		)
	}
];

export const data = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: ["Connected"]
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		tags: ["Not Connected"]
	},
	{
		key: "3",
		name: "Joe Black",
		age: 32,
		address: "Sidney No. 1 Lake Park",
		tags: ["Connected"]
	}
];
