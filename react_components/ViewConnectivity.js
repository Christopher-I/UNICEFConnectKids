import React from "react";
import {
	Layout,
	Row,
	Col,
	Button,
	Tabs,
	Divider,
	Breadcrumb,
	Progress,
	Input,
	Tag
} from "antd";
import ListOfSchools from "./tables/SchoolTable";
import ListOfISPs from "./tables/ISPTable";
import NigeriaMap from "./img/NigeriaMap";
import ListOfTransactions from "./tables/TransactionsTable";
import SendDonation from "../ethereum/deployedContractCalls/countryManager/sendDonation";
import { countryManagerAddress } from "../ethereum/ListofSmartContractAddresses";
import { Link, Router } from "../routes";
import GetListOfCountryManagers from "../ethereum/deployedContractCalls/main/getListOfCountryManagers";
import GetSummaryOfAllSchoolsInCountry from "../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry";
import {
	GetCountryManagerSummary,
	GetSchoolSummary
} from "../ethereum/deployedContractCalls/getContractSummary";
import { mainContractAddress } from "../ethereum/ListofSmartContractAddresses";

//define extract child properties
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}
class ViewConnectivity extends React.Component {
	state = {
		TotalNumberofSchools: "0",
		FundingNeededtoConnectAllSchools: " X ",
		FundingReceived: "0",
		AmountNeededtoFundadditionalSchool: "X ",
		percentageOfConnectedSchool: "50",
		loginModalVisibility: false,
		applyModalVisibility: false,
		countrySelected: false,
		balance: "",
		donationAmount: "",
		population: "",
		countryName: "Nigeria",
		currentISPName: "Pending..",
		currentISPNameAddress: "Pending.."
	};

	async componentDidMount() {
		fetch(
			`https://api-rinkeby.etherscan.io/api?module=account&action=balance&address=${countryManagerAddress}&tag=latest&apikey=YourApiKeyToken`
		)
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						loading: false,
						balance: result.result
					});
				},

				// Handle errors.
				error => {
					this.setState({
						isLoaded: true,
						loading: false,
						error
					});
				}
			);

		//gets a list of country managers
		let result = await GetListOfCountryManagers(mainContractAddress);

		//the first country oin the away is Nigeria
		const countryManagerNigeria = result[0];
		// //get the summary of the contract manager of Nigeria
		const countryManagerNigeriaSummary = await GetCountryManagerSummary(
			countryManagerNigeria
		);
		console.log(countryManagerNigeriaSummary);

		//get summary of all Schools under the contract manager of Nigeria
		const SchoolSummary = await GetSummaryOfAllSchoolsInCountry(
			countryManagerNigeriaSummary
		);

		// //get summary of all ISP under the contract manager of Nigeria
		// const ISPSummary = await GetSummaryOfAllISPsInCountry(
		// 	countryManagerNigeriaSummary
		//);

		let population = 0;
		let connectedSchools = 0;

		for (let i = 0; i < SchoolSummary.length; i++) {
			population += parseInt(SchoolSummary[i][3]);

			if (SchoolSummary[i][4]) {
				connectedSchools++;
			}
		}

		this.setState({
			schoolSummary: SchoolSummary,
			population: population,
			connectedSchools: connectedSchools,
			percentageOfConnectedSchool:
				(connectedSchools / SchoolSummary.length) * 100,
			currentISPName: countryManagerNigeriaSummary[3],
			currentISPNameAddress: countryManagerNigeriaSummary[4]
		});
	}

	sendDonationToContract = async e => {
		e.preventDefault();
		console.log(
			await SendDonation(countryManagerAddress, this.state.donationAmount)
		);
	};

	render() {
		return (
			<Layout>
				{this.props.countrySelected ? (
					<div>
						{" "}
						<Content style={{ padding: "25px 50px" }}>
							<div
								style={{
									background: "#fff",
									padding: 10,
									height: 190
								}}
							>
								<Row>
									<Col span={22}>
										<div>
											<h2>{this.state.countryName}</h2>
											Connected Schools:
											{this.state.connectedSchools}
											<Divider type="vertical" />
											Total Number of Schools:{" "}
											{this.state.schoolSummary.length}
											<Divider type="vertical" />
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
											Total Student Population:
											{this.state.population}
											<Divider type="vertical" />
											Country Account Number:{" "}
											<Link
												route={`https://rinkeby.etherscan.io/address/${countryManagerAddress}`}
											>
												<a>{countryManagerAddress}</a>
											</Link>
										</div>
										<br />
										<div>
											Funding Needed to Connect All
											Schools:{" "}
											<Tag color="red">
												{
													this.state
														.FundingNeededtoConnectAllSchools
												}{" "}
												Wei
											</Tag>
											<Divider type="vertical" />
											Funding Received:
											<Tag color="green">
												{this.state.balance}Wei
											</Tag>
											<Divider type="vertical" />
											Amount Needed to Fund additional
											School:{" "}
											<Tag color="red">
												{
													this.state
														.AmountNeededtoFundadditionalSchool
												}{" "}
												Wei
											</Tag>
											Current ISP :{" "}
											<Link
												route={`https://rinkeby.etherscan.io/address/${countryManagerAddress}`}
											>
												<a>
													{this.state.currentISPName}
												</a>
											</Link>
										</div>
									</Col>

									<Col span={2}>
										Enter Amount
										<Input
											placeholder="Wei"
											style={{ width: "110px" }}
											value={this.state.donationAmount}
											onChange={event =>
												this.setState({
													donationAmount:
														event.target.value
												})
											}
										/>
										<br />
										<br />
										<Button
											type="primary"
											style={{ width: "110px" }}
											onClick={
												this.sendDonationToContract
											}
										>
											Donate
										</Button>
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
									<Col span={10}>
										<NigeriaMap />
									</Col>

									<Col span={14}>
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
												<ListOfISPs />
											</TabPane>
											<TabPane tab="Transactions" key="3">
												<ListOfTransactions />
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
			</Layout>
		);
	}
}

export default ViewConnectivity;
