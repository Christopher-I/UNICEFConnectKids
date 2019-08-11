import web3 from "../web3";
import Main from "../build/Main.json";
import CountryManager from "../build/countryManager.json";
import ISP from "../build/ISP.json";
import School from "../build/School.json";

export function MainDeployed(address) {
	return new web3.eth.Contract(JSON.parse(Main.interface), address);
}

export function CountryManagerDeployed(address) {
	return new web3.eth.Contract(JSON.parse(CountryManager.interface), address);
}

export function ISPDeployed(address) {
	return new web3.eth.Contract(JSON.parse(ISP.interface), address);
}

export function SchoolDeployed(address) {
	return new web3.eth.Contract(JSON.parse(School.interface), address);
}
