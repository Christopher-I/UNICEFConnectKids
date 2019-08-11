import React from "react";
import Template from "../../react_components/Template";
import NewCountryManagerForm from "../../react_components/forms/NewCountryManager";

import {
	Layout,
	Menu,
	Icon,
	Row,
	Col,
	Button,
	Dropdown,
	Tabs,
	Divider,
	Progress
} from "antd";

class Admin extends React.Component {
	render() {
		return (
			<Template>
				<NewCountryManagerForm />
			</Template>
		);
	}
}

export default Admin;
