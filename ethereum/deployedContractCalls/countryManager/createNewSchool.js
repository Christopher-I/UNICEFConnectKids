import React from "react";
import { CountryManagerDeployed } from "../deployedContracts";
import web3 from "../../web3";

//retrieves a list of created country managers
export default async function createNewSchool(
  address,
  name,
  population,
  location,
  owner
) {
  let accounts = await web3.eth.getAccounts();
  try {
    let result = await CountryManagerDeployed(address);

    let school = await result.methods
      .createNewSchool(name, population, location, owner)
      .send({
        from: accounts[0]
      });
    console.log(school);
    return school;
  } catch (err) {
    console.log(err);
    return err;
  }
}
