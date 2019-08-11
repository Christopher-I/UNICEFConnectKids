import React from "react";
import {
	Layout,
	Row,
	Col,
	Button,
	Tabs,
	Divider,
	Breadcrumb,
	Progress
} from "antd";
import ListOfSchools from "./tables/SchoolTable";
import NigeriaMap from "./img/NigeriaMap";

//define extract child properties
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}
class ViewConnectivity extends React.Component {
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

	render() {
		return (
			<Layout>
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
									<NigeriaMap />
								</Col>

								<Col span={12}>
									<Tabs
										defaultActiveKey="1"
										onChange={callback}
									>
										<TabPane tab="List Of Schools" key="1">
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
			</Layout>
		);
	}
}

export default ViewConnectivity;
