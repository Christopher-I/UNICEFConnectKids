import React from "react";
import { CountryManagerDeployed } from "../deployedContracts";
import web3 from "../../web3";

//retrieves a list of created country managers
export default async function sendTransa(address, value) {
  let accounts = await web3.eth.getAccounts();
  try {
    let result = await CountryManagerDeployed(address);

    let transaction = await result.methods.receiveDonation().send({
      gasLimit: "1000000",
      value: value,
      from: accounts[0]
    });
    console.log(result);
    return school;
  } catch (err) {
    console.log(err);
    return err;
  }
}
