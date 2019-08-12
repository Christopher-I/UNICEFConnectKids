import React from "react";
import { CountryManagerDeployed } from "../deployedContracts";
import web3 from "../../web3";

//retrieves a list of created country managers
export default async function createNewSchool(
  address,
  name,
  promisedUploadSpeed,
  promisedDownloadSpeed,
  promisedDataSize,
  ispAddress
) {
  const accounts = await web3.eth.getAccounts();
  try {
    let result = await CountryManagerDeployed(address);

    let ISP = await result.methods
      .createNewIsp(
        name,
        promisedUploadSpeed,
        promisedDownloadSpeed,
        promisedDataSize,
        ispAddress
      )
      .send({
        from: accounts[0]
      });
    console.log(ISP);
    return ISP;
  } catch (err) {
    console.log(err);
    return err;
  }
}
