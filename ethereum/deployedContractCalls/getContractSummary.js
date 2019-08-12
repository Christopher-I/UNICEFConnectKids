import web3 from "../web3";
import {
	CountryManagerDeployed,
	Main,
	SchoolDeployed,
	ISPDeployed
} from "./deployedContracts";

export async function MainSummary(address) {
	const main = Main(address);
	return await main.methods.getSummary().call();
}

export async function GetCountryManagerSummary(address) {
	const countryManager = CountryManagerDeployed(address);
	return await countryManager.methods.getSummary().call();
}

export async function GetSchoolSummary(address) {
	const school = SchoolDeployed(address);
	return await school.methods.getSummary().call();
}

export async function GetISPSummary(address) {
	const ISP = ISPDeployed(address);
	return await ISP.methods.getSummary().call();
}
