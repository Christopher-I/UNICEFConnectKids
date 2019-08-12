import { SchoolDeployed } from "../deployedContracts";
import web3 from "../../web3";

const dummyData = [[123, 100, 100, 75], [333, 110, 75, 55], [754, 70, 143, 75]];

//retrieves a list of created country managers
export default async function createNewSchool(address) {
  const accounts = await web3.eth.getAccounts();
  try {
    // let result = await SchoolDeployed(address);
    // console.log(SchoolDeployed(address));
    var i;
    for (i = 0; i < dummyData.length; i++) {
      await SchoolDeployed(address)
        .methods.addConnectivityInfo(
          dummyData[i][0],
          dummyData[i][1],
          dummyData[i][2],
          dummyData[i][3]
        )
        .send({
          from: accounts[0]
        });
    }

    console.log(
      await SchoolDeployed(address)
        .methods.connectivityRegistry(dummyData[2][0])
        .call()
    );
  } catch (err) {
    console.log(err);
    return err;
  }
}
