import { GetSchoolSummary } from "../getContractSummary";

export default async function getSummaryOfAllSchoolsInCountry(
	countryManagerNigeriaSummary
) {
	//the first array contains all created schools in Nigera
	const listOfSchoolInNigeria = countryManagerNigeriaSummary[1];
	var i;
	var summary = [];
	for (i = 0; i < listOfSchoolInNigeria.length; i++) {
		summary.push(await GetSchoolSummary(listOfSchoolInNigeria[i]));
	}

	return summary;
}
