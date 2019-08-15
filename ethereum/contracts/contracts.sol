pragma solidity ^0.4.25;

contract Main{
    countryManager public newCountryManager;
    address[] public deployedCountryManagers;
    address owner;
    
    // creates new country manager smart contracts  
    function createNewCountryManger(string countryName) public {
         newCountryManager = new countryManager(countryName);
         deployedCountryManagers.push(newCountryManager);
    }
    
    // returns a list of deployed country manager smart contracts
    function getDeployedCountryManagers() public view returns(address [] memory) { 
             return deployedCountryManagers;    
         } 
}

// this contract type manages all the school and ISP information for any given country
contract countryManager{
    
    string public countryName;
    address[] public deployedSchools;
    address[] public deployedIsps;    
    ISP public newIsp;
    ISP public deployedIsp;
    School public newSchool;
    School public deployedSchool;
    IspInfo public currentIspProvider;
    string [] public ispNames;
    
    struct IspInfo{
        string name;
        address addy;
    }
    
    mapping (address=>uint) public receivedDonationsLog;
    
    constructor(string _name)public{
        countryName = _name;
    }
    
    // creates new schools  
    function createNewSchool(string name, uint population,string location, address schoolOwnersAddress) public returns (address){
        newSchool = new School(name,population, location,schoolOwnersAddress);
        deployedSchools.push(newSchool);
        
        if(deployedSchools.length ==1){
             deployedSchool = School(deployedSchools[0]);
            deployedSchool.updateStatus(true);
        }
        return newSchool;
    }
    
    // returns a list of addresses of created schools
    function getDeployedSchools() public view returns(address [] memory) { 
        return deployedSchools;    
         }  
         
    
    // creates new ISPs  
    function createNewIsp(string _name, int promisedUploadSpeed, int promisedDownloadSpeed, int promisedDataSize, address ispOwnerAddress) public returns(address){
        newIsp= new ISP(_name, promisedUploadSpeed,promisedDownloadSpeed, promisedDataSize, ispOwnerAddress);
        deployedIsps.push(newIsp);
        
        ispNames.push(_name);
        
        if(deployedSchools.length >0 && deployedIsps.length == 1){
            updateIspProvider( ispNames[0], deployedSchools[0], deployedIsps[0]);
        }
        
        return newIsp;
    }
    
    function getDeployedIsps() public view returns(address [] memory) { 
        return deployedIsps;    
    }
    
    //received donation and stores a log of the transaction
    function receiveDonation()public payable{
        receivedDonationsLog[msg.sender] += msg.value;
        
    }
    function getBalance () public view returns(uint){
        return address(this).balance;
    }
    
    //make a copy of deployed School and ISP Contract and update them with new ISP information
    function updateIspProvider(string _name, address _schoolAddress,address _ispAddress) public {
        currentIspProvider.name = _name;
        currentIspProvider.addy = _ispAddress;
        deployedSchool = School(_schoolAddress);
        deployedIsp = ISP(_ispAddress);
  
        deployedSchool.updateIspProvider(_name, _ispAddress);
        deployedIsp.updateIspProvider(_name, _ispAddress);
    }
    
    //get general summary of smart contract information
    function getSummary () public view returns (string, address[]memory,address[]memory,string,address){
        return(countryName, deployedSchools,deployedIsps,currentIspProvider.name, currentIspProvider.addy);
    }
}

//defines the ISP contract
contract ISP{
    address public owner;
    string public ispName; 
    int public ispID;
    int public promisedUploadSpeed;
    int public promisedDownloadSpeed;
    int public promisedDataSize;
    IspInfo public currentIspProvider;
    
    //organizes the structure for receiving daily average of connectivity information from the the ISP
    struct connectivityInfo{
        uint date;
        int dataSize;
        int uploadSpeed;
        int downloadSpeed;
    }
    
    struct IspInfo{
        string name;
        address addy;
    }
    
    // stores daily connectivity information
    mapping (uint=>connectivityInfo) public connectivityRegistry;
    //stores all the dates when connectivity information was logged in, this array can be used to iterate through the connectivityRegistry mapping
    uint [] loggedConnectivityDates;
    
    constructor(string _name, int _promisedUploadSpeed, int _promisedDownloadSpeed, int _promisedDataSize, address _ispAddress)public{
        ispName = _name;
        promisedUploadSpeed = _promisedUploadSpeed;
        promisedDownloadSpeed = _promisedDownloadSpeed;
        promisedDataSize = _promisedDataSize;
        owner = _ispAddress;
    }
    
     //receives connectivity information from ISP
    function addConnectivityInfo(uint _date, int _uploadSpeed,int _downloadSpeed, int _dataSize) public {
        connectivityInfo memory info;
        info.date = _date;
        info.uploadSpeed = _uploadSpeed;
        info.downloadSpeed = _downloadSpeed;
        info.dataSize = _dataSize;
        connectivityRegistry[info.date] = info;
    }
    
    // updates ISP provider
    function updateIspProvider(string _ispName, address _ispAddy) public {
        currentIspProvider.name = _ispName;
        currentIspProvider.addy = _ispAddy;
    }
    
    // returns general information of this smart contract
    function getSummary()public view returns(string,address,int, int,int) {
        return (
            ispName, owner,promisedUploadSpeed,promisedDownloadSpeed, promisedDataSize
            );
    }
}

//defines the school contract
contract School{
    uint constant minimumUploadSpeed = 1;
    uint constant minimumDownloadSpeed = 1;
    uint constant minimumDataAvailable = 1;
    
    address public owner;
    string public schoolName; 
    uint public schoolID;
    uint public schoolPopulation;
    string public schoolLocation;
    bool public status;
    IspInfo public currentIspProvider;
 
    
    //organizes the daily average of connectivity information from the the ISP
    struct connectivityInfo{
        uint date;
        uint uploadSpeed;
        uint downloadSpeed;
        uint gigabytes;
    }
    
    struct IspInfo{
        string name;
        address addy;
    }
    
    // stores daily connectivity information
    mapping (uint=>connectivityInfo) public connectivityRegistry;
    //array stores all the dates when connectivity information was logged in, this array can be used to iterate through the connectivityRegistry mapping
    uint []  public loggedConnectivityDates;
    
    constructor(string _name, uint _population, string _schoolLocation,address _ispAddress )public{
        owner = _ispAddress;
        schoolName = _name;
        schoolLocation = _schoolLocation;
        schoolPopulation = _population;
    }

    //receives connectivity information from an IOT device or another reliable source at the school
    function addConnectivityInfo(uint _date,uint _uploadSpeed,uint _downloadSpeed, uint _gigabytes) public {
        
        connectivityInfo memory info;
        info.date = _date;
        info.uploadSpeed = _uploadSpeed;
        info.downloadSpeed = _downloadSpeed;
        info.gigabytes = _gigabytes;
        connectivityRegistry[info.date] = info;
        loggedConnectivityDates.push(info.date);
    }
    
    //updates the status of the schools connectivity to either active or non-active, access to this function will be restricted and autogenerated in future iterations 
    function updateStatus(bool _status) public{
        status = _status;
    }
    
    //updates the schools current ISP provider
    function updateSchoolsLocation(string _location) public{
        schoolLocation = _location;
    }
    
    //return schools connectivity data history
    function getConnectivityInfo() public returns(uint []){
        uint [] storage connectivitySummary;
        
        for(uint i=0; i<loggedConnectivityDates.length; i++){
            connectivitySummary.push(loggedConnectivityDates[i]);
            connectivitySummary.push(connectivityRegistry[loggedConnectivityDates[i]].uploadSpeed);
            connectivitySummary.push(connectivityRegistry[loggedConnectivityDates[i]].downloadSpeed);
        }
        return(
            connectivitySummary
            );
    }
    
    // this function is automatically called by ETH timer at the end of every cycle period to update smart contract state
    function updateContractStateAtEndOfCycle()public{
    }
    
    //calculates the average perfomance of ISP over an agreed period of time
    function calculateISPPerfomance()public{
    }
    
    // updates ISP consistency score if they perfomed above the agreed base line
    function updateISPConsistencyScore()public {
    }
    
    // updates ISP provider
    function updateIspProvider(string _ispName, address _ispAddy) public {
        currentIspProvider.name = _ispName;
        currentIspProvider.addy = _ispAddy;
    }
    
    // returns general information of this smart contract
    function getSummary()public view returns(string,address,string,uint,bool) {
        return (
            schoolName, owner,schoolLocation, schoolPopulation, status
            );
    }
}

