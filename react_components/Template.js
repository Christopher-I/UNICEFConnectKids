import React from "react";
import ReactDOM from "react-dom";
import Head from "./Head";
import NigeriaMap from "./maps/NigeriaMap";
import ListOfSchools from "./tables/SchoolTable";
import LoginModal from "./modals/LoginModal";
import ApplyModal from "./modals/ApplyModal";
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
	Breadcrumb,
	Progress,
	Card
} from "antd";

//define extract child properties
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

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

				{this.state.countrySelected ? (
					<div>
						{" "}
						<Content style={{ padding: "25px 50px" }}>
							<div
								style={{
									background: "#fff",
									padding: 10,
									height: 100
								}}
							>
								<Row>
									<Col span={22}>
										<div>
											Connected Schools:
											<Progress
												type="circle"
												strokeColor={{
													"0%": "#108ee9",
													"100%": "#87d068"
												}}
												percent={
													this.state
														.percentageOfConnectedSchool
												}
												width={80}
											/>
											<Divider type="vertical" />
											Total Number of Schools:{" "}
											{this.state.TotalNumberofSchools}
											<Divider type="vertical" />
											Funding Needed to Connect All
											Schools:{" "}
											{
												this.state
													.FundingNeededtoConnectAllSchools
											}{" "}
											ETH
											<Divider type="vertical" />
											Funding Received:
											{this.state.FundingReceived} ETH
											<Divider type="vertical" />
											Amount Needed to Fund additional
											School:{" "}
											{
												this.state
													.AmountNeededtoFundadditionalSchool
											}{" "}
											ETH
										</div>
									</Col>

									<Col span={2}>
										<Button type="primary">Donate</Button>
									</Col>
								</Row>{" "}
							</div>
						</Content>
						<Content style={{ padding: "0 50px" }}>
							<div
								style={{
									background: "#fff",
									padding: 24,
									minHeight: 500
								}}
							>
								<Row>
									<Col span={12}>
										<NigeriaMap />
									</Col>

									<Col span={12}>
										<Tabs
											defaultActiveKey="1"
											onChange={callback}
										>
											<TabPane
												tab="List Of Schools"
												key="1"
											>
												<ListOfSchools />
											</TabPane>
											<TabPane tab="List Of ISPs" key="2">
												Content of Tab Pane 2
											</TabPane>
											<TabPane tab="Transfers" key="3">
												Content of Tab Pane 3
											</TabPane>
										</Tabs>
									</Col>
								</Row>
							</div>
						</Content>
					</div>
				) : (
					<Content style={{ padding: "25px 50px" }}>
						<div
							style={{
								background: "#fff",
								padding: 10,
								minHeight: 500
							}}
						>
							<h1>Please Select a Country</h1>
						</div>
					</Content>
				)}

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
					<h1>UNICEF CONNECT KIDS AROUND THE WORLD HACKATHON</h1>
				</Footer>
			</Layout>
		);
	}
}

export default Template;
