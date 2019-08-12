import React from "react";
import ReactDOM from "react-dom";
import Head from "./Head";
import ListOfSchools from "./tables/SchoolTable";
import LoginModal from "./modals/LoginModal";
import ApplyModal from "./modals/ApplyModal";
import ViewConnectivity from "./ViewConnectivity";
import { Link, Router } from "../routes";
//import {openLoginModal} from "./modals/modalFunctions"
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

//define extract child properties
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

class Template extends React.Component {
	state = {
		TotalNumberofSchools: "0",
		FundingNeededtoConnectAllSchools: "0",
		FundingReceived: "0",
		AmountNeededtoFundadditionalSchool: "0",
		percentageOfConnectedSchool: "50",
		loginModalVisibility: false,
		applyModalVisibility: false,
		countrySelected: false
	};

	handleClick = e => {
		this.setState({
			current: e.key
		});
	};

	openLoginModal = e => {
		this.setState({
			loginModalVisibility: true
		});
	};

	loginModalhandleCancel = e => {
		this.setState({
			loginModalVisibility: false
		});
	};

	loginModalhandleOk = e => {
		Router.push({
			pathname: "/admin"
		});
		this.setState({
			loginModalVisibility: false
		});
	};

	openApplyModal = e => {
		this.setState({
			applyModalVisibility: true
		});
	};

	applyModalhandleCancel = e => {
		this.setState({
			applyModalVisibility: false
		});
	};

	applyModalhandleOk = e => {
		this.setState({
			applyModalVisibility: false
		});
	};

	render() {
		return (
			<Layout>
				<Head />

				<Header style={{ zIndex: 1, width: "100%" }}>
					<Menu
						selectable="false"
						onClick={this.handleClick}
						selectedKeys={[this.state.current]}
						mode="horizontal"
						theme="dark"
					>
						<Menu.Item>
							<Link route={"/"}>
								<a> Home</a>
							</Link>
						</Menu.Item>

						<SubMenu
							title={
								<span className="submenu-title-wrapper">
									<Icon type="down" />
									Select Country
								</span>
							}
						>
							<Menu.ItemGroup title="Africa">
								<Menu.Item
									key="setting:1"
									onClick={() => {
										console.log("selected!");
										this.setState({
											countrySelected: true
										});
									}}
								>
									Nigeria
								</Menu.Item>
							</Menu.ItemGroup>
						</SubMenu>

						<Menu.Item>
							<Button
								type="primary"
								onClick={this.openApplyModal}
							>
								Apply as School/ISP
							</Button>
						</Menu.Item>

						<Menu.Item>
							<Button
								type="primary"
								onClick={this.openLoginModal}
							>
								Login
							</Button>
						</Menu.Item>
					</Menu>
				</Header>

				{this.props.children}

				<LoginModal
					loginModalVisibility={this.state.loginModalVisibility}
					loginModalhandleCancel={this.loginModalhandleCancel}
					loginModalhandleOk={this.loginModalhandleOk}
				/>
				<ApplyModal
					applyModalVisibility={this.state.applyModalVisibility}
					applyModalhandleCancel={this.applyModalhandleCancel}
					applyModalhandleOk={this.applyModalhandleOk}
				/>

				<Footer style={{ position: "bottom", textAlign: "center" }}>
					<h1>UNICEF Challenge: Reducing The Divide</h1>
				</Footer>
			</Layout>
		);
	}
}

export default Template;
