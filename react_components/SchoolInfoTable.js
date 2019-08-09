import React from "react";
import { Table } from "antd";
import { columns, data } from "./TableComponents/ISPTableColumnAndData";

class SchoolTable extends React.Component {
	render() {
		return <Table columns={columns} dataSource={data} />;
	}
}

export default SchoolTable;
