import { GetISPSummary } from "../getContractSummary";

export default async function getSummaryOfAllISPsInCountry(
	countryManagerNigeriaSummary
) {
	//the first array contains all created schools in Nigera
	const listOfSchoolInNigeria = countryManagerNigeriaSummary[2];
	var i;
	var summary = [];
	for (i = 0; i < listOfSchoolInNigeria.length; i++) {
		summary.push(await GetISPSummary(listOfSchoolInNigeria[i]));
	}

	return summary;
}
