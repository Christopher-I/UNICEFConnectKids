import React from "react";
import { MainDeployed } from "../deployedContracts";

//retrieves a list of created country managers
export default async function getListOfCountryManagers(address) {
  try {
    let result = await MainDeployed(address);

    let countryManagers = await result.methods
      .getDeployedCountryManagers()
      .call();
    return countryManagers;
  } catch (err) {
    console.log(err);
    return err;
  }
}
