import web3 from "../web3";
import { CountryManagerDeployed, Main } from "./deployedContracts";

export async function GetCountryManagerSummary(address) {
	const countryManager = CountryManagerDeployed(address);

	return await countryManager.methods.countryName().call();
}

export async function MainSummary(address) {
	const main = Main(address);

	return await main.methods.getSummary().call();
}
