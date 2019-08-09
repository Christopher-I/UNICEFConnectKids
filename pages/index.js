import React from "react";
import ReactDOM from "react-dom";
import CSS from "../react_components/Layout";
import ListOfSchools from "../react_components/SchoolInfoTable";
//import map from "../img/brazil.png";
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

class Home extends React.Component {
	state = {
		TotalNumberofSchools: "0",
		FundingNeededtoConnectAllSchools: "0",
		FundingReceived: "0",
		AmountNeededtoFundadditionalSchool: "0",
		percentageOfConnectedSchool: "50"
	};

	handleClick = e => {
		console.log("click ", e);
		this.setState({
			current: e.key
		});
	};

	render() {
		return (
			<Layout>
				<CSS />

				<Header style={{ zIndex: 1, width: "100%" }}>
					<Menu
						onClick={this.handleClick}
						selectedKeys={[this.state.current]}
						mode="horizontal"
						theme="dark"
					>
						<Menu.Item key="home">
							<Icon type="home" />
							Home
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
								<Menu.Item key="setting:1">Nigeria</Menu.Item>
							</Menu.ItemGroup>
						</SubMenu>

						<Menu.Item position="right">
							<Button type="primary">Apply as School/ISP</Button>
						</Menu.Item>

						<Menu.Item position="right">
							<Button type="primary">Login</Button>
						</Menu.Item>
					</Menu>
				</Header>

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
									Funding Needed to Connect All Schools:{" "}
									{
										this.state
											.FundingNeededtoConnectAllSchools
									}{" "}
									ETH
									<Divider type="vertical" />
									Funding Received:
									{this.state.FundingReceived} ETH
									<Divider type="vertical" />
									Amount Needed to Fund additional School:{" "}
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
								<Card
									hoverable
									style={{ width: 600, height: 300 }}
									cover={
										<img
											alt="example"
											src="https://upload.wikimedia.org/wikipedia/en/b/b9/Map_of_Nigerian_States_with_names.png"
										/>
									}
								/>
							</Col>
							<Col span={12}>
								<Tabs defaultActiveKey="1" onChange={callback}>
									<TabPane tab="List Of Schools" key="1">
										<ListOfSchools />
									</TabPane>
									<TabPane tab="List Of ISPs" key="2">
										Content of Tab Pane 2
									</TabPane>
								</Tabs>
							</Col>
						</Row>
					</div>
				</Content>

				<Footer style={{ position: "bottom", textAlign: "center" }}>
					<h1>UNICEF CONNECT KIDS AROUND THE WORLD HACKATHON</h1>
				</Footer>
			</Layout>
		);
	}
}

export default Home;
