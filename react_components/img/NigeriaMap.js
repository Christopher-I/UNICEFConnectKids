import React from "react";
import { Icon, Popover, Button } from "antd";
import GetListOfCountryManagers from "../../ethereum/deployedContractCalls/main/getListOfCountryManagers";
import CreateNewCountryManger from "../../ethereum/deployedContractCalls/main/createNewCountryManager";
import {
	mainContractAddress,
	owner
} from "../../ethereum/ListofSmartContractAddresses";
import {
	GetCountryManagerSummary,
	GetSchoolSummary
} from "../../ethereum/deployedContractCalls/getContractSummary";
import GetSummaryOfAllSchoolsInCountry from "../../ethereum/deployedContractCalls/countryManager/getSummaryOfAllSchoolsInCountry";

class NigeriaMap extends React.Component {
	state = {
		TrinitySchoolData: "",
		lagosSchoolsData: "",
		abujaSchoolsData: "",
		kadunaSchoolsData: "",
		lagosVisibility: false,
		abujaVisibility: "",
		kadunaVisibility: ""
	};
	async componentDidMount() {
		//gets a list of country managers
		let result = await GetListOfCountryManagers(mainContractAddress);
		//the first country oin the away is Nigeria
		const countryManagerNigeria = result[0];
		//get the summary of the contract manager of Nigeria
		const countryManagerNigeriaSummary = await GetCountryManagerSummary(
			countryManagerNigeria
		);
		//get summary of all schools under the contract manager of Nigeria
		const schoolSummary = await GetSummaryOfAllSchoolsInCountry(
			countryManagerNigeriaSummary
		);

		for (let i = 0; i < schoolSummary.length; i++) {
			if (schoolSummary[i][2].toLowerCase() === "lagos") {
				this.setState({
					lagosSchoolsData: schoolSummary[i]
				});
			} else if (schoolSummary[i][2].toLowerCase() === "abuja") {
				this.setState({
					abujaSchoolsData: schoolSummary[i]
				});
			} else if (schoolSummary[i][2].toLowerCase() === "kaduna") {
				this.setState({
					kadunaSchoolsData: schoolSummary[i]
				});
			}
		}

		console.log(JSON.parse(JSON.stringify(schoolSummary)));

		this.setState({
			data: schoolSummary
		});
	}

	hideKaduna = () => {
		this.setState({
			kadunaVisibility: false
		});
	};

	hideAbuja = () => {
		this.setState({
			abujaVisibility: false
		});
	};

	hidelagos = () => {
		this.setState({
			lagosVisibility: false
		});
	};

	handleVisibleChangeKaduna = kadunaVisibility => {
		this.setState({ kadunaVisibility });
	};

	handleVisibleChangeAbuja = abujaVisibility => {
		this.setState({ abujaVisibility });
	};

	handleVisibleChangeLagos = lagosVisibility => {
		this.setState({ lagosVisibility });
	};

	render() {
		return (
			<div style={{ position: "relative" }}>
				{this.state.kadunaSchoolsData && (
					<Popover
						content={
							<div>
								<p>
									Population:{" "}
									{this.state.kadunaSchoolsData[3]}
								</p>
								<p>
									School Name:{" "}
									{this.state.kadunaSchoolsData[0]}
								</p>
								<p>
									ETH Address:{" "}
									{this.state.kadunaSchoolsData[1]}
								</p>

								<a onClick={this.hideKaduna} />
							</div>
						}
						title="Location: Kaduna"
						trigger="click"
						visible={this.state.kadunaVisibility}
						onVisibleChange={this.handleVisibleChangeKaduna}
					>
						<a>
							<Icon
								style={{
									position: "absolute",
									top: "150px",
									left: "300px"
								}}
								type="environment"
								theme="twoTone"
								twoToneColor={
									this.state.kadunaSchoolsData[4]
										? "#52c41a"
										: "red"
								}
							/>
						</a>
					</Popover>
				)}

				{this.state.abujaSchoolsData && (
					<Popover
						content={
							<div>
								<p>
									Population: {this.state.abujaSchoolsData[3]}
								</p>
								<p>
									School Name:{" "}
									{this.state.abujaSchoolsData[0]}
								</p>
								<p>
									ETH Address:{" "}
									{this.state.abujaSchoolsData[1]}
								</p>

								<a onClick={this.hideAbuja} />
							</div>
						}
						title="Location: Abuja"
						trigger="click"
						visible={this.state.abujaVisibility}
						onVisibleChange={this.handleVisibleChangeAbuja}
					>
						<a>
							<Icon
								style={{
									position: "absolute",
									top: "220px",
									left: "260px"
								}}
								type="environment"
								theme="twoTone"
								twoToneColor={
									this.state.abujaSchoolsData[4]
										? "#52c41a"
										: "red"
								}
							/>
						</a>
					</Popover>
				)}

				{this.state.lagosSchoolsData && (
					<Popover
						content={
							<div>
								<p>
									Population: {this.state.lagosSchoolsData[3]}
								</p>
								<p>
									School Name:{" "}
									{this.state.lagosSchoolsData[0]}
								</p>
								<p>
									ETH Address:{" "}
									{this.state.lagosSchoolsData[1]}
								</p>

								<a onClick={this.hideLagos} />
							</div>
						}
						title="Location: Lagos"
						trigger="click"
						visible={this.state.lagosVisibility}
						onVisibleChange={this.handleVisibleChangeLagos}
					>
						<a>
							<Icon
								style={{
									position: "absolute",
									top: "320px",
									left: "70px"
								}}
								type="environment"
								theme="twoTone"
								twoToneColor={
									this.state.lagosSchoolsData[4]
										? "#52c41a"
										: "red"
								}
							/>
						</a>
					</Popover>
				)}

				<img
					style={{ width: 650, height: 450 }}
					alt="example"
					src="https://upload.wikimedia.org/wikipedia/en/b/b9/Map_of_Nigerian_States_with_names.png"
				/>
			</div>
		);
	}
}

export default NigeriaMap;

//source nigeria map used was from wikipedia
