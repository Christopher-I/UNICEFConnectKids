import React from "react";
import { MainDeployed } from "../deployedContracts";
import web3 from "../../web3";

//retrieves a list of created country managers
export default async function createNewCountryManager(address, name) {
  let accounts = await web3.eth.getAccounts();
  try {
    let result = await MainDeployed(address);

    let countryManager = await result.methods
      .createNewCountryManger(name)
      .send({
        from: accounts[0]
      });

    return countryManager;
  } catch (err) {
    console.log(err);
    return err;
  }
}
