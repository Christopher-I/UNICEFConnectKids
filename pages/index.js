import React from "react";
import ReactDOM from "react-dom";
import CSS from "../react_components/Layout";
import { Layout, Menu, Icon, Button, Dropdown, Tabs } from "antd";

//define layout properties
const { Header, Content, Footer } = Layout;

//define Menu properties
const menu = (
	<Menu>
		<Menu.Item>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="http://www.alipay.com/"
			>
				Nigeria
			</a>
		</Menu.Item>
	</Menu>
);

class Home extends React.Component {
	render() {
		return (
			<Layout>
				<CSS />

				<Header style={{ zIndex: 1, width: "100%" }}>
					<Dropdown overlay={menu}>
						<a
							style={{ size: "large" }}
							className="ant-dropdown-link"
							href="#"
						>
							Select Country <Icon type="down" />
						</a>
					</Dropdown>
				</Header>
				<Content>
					<div> This is content</div>
				</Content>
				<Footer style={{ position: "bottom", textAlign: "center" }}>
					<h1>UNICEF CONNECT KIDS AROUND THE WORLD HACKATHON</h1>
				</Footer>
			</Layout>
		);
	}
}

export default Home;
