const HDwalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/Main.json");

const provider = new HDwalletProvider(
	"deliver kid very feature upon please tree robust common tail reward home",
	"https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe"
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log("We are sending from this account ", accounts[0]);

	const result = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface)
	)
		.deploy({ data: "0x" + compiledFactory.bytecode })
		.send({ gas: "4000000", from: accounts[0] });

	console.log("Contract deployed to", result.options.address);
};

deploy();
