pragma solidity ^0.4.25;
//counrty manager 0x755014Da263Fc47d238078Bb47d217F743E5B6a5
//ISP 0xd19f982DBf2F8C7f5B4C78Ce8dEB1715BDCc5AFA school 0x1163C90F4F22ca7294f2E0206B4a2bDE45e27e1e

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
    School public newSchool;
    
    constructor(string _name)public{
        countryName = _name;
    }
    
    // creates new schools  
    function createNewSchool(string name, uint population,string location, address schoolAddress) public {
        newSchool = new School(name,population, location,schoolAddress);
        deployedSchools.push(newSchool);
    }
    
    // returns a list of addresses of created schools
    function getDeployedSchools() public view returns(address [] memory) { 
        return deployedSchools;    
         }  
    
    // creates new ISPs  
    function createNewIsp(string name, int promisedUploadSpeed, int promisedDownloadSpeed, int promisedDataSize, address ispAddress) public {
        newIsp= new ISP(name, promisedUploadSpeed,promisedDownloadSpeed,promisedDataSize,ispAddress);
        deployedIsps.push(newIsp);
    }
    function getDeployedIsps() public view returns(address [] memory) { 
        return deployedIsps;    
    }  
    
    //get general summary of smart contract information
    function getSummary () public view returns (string, address[]memory,address[]memory){
        return(countryName, deployedSchools,deployedIsps);
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
    
    //organizes the structure for receiving daily average of connectivity information from the the ISP
    struct connectivityInfo{
        uint date;
        int dataSize;
        int uploadSpeed;
        int downloadSpeed;
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
    function addConnectivityInfo(int _uploadSpeed,int _downloadSpeed, int _dataSize) public {
        connectivityInfo memory info;
        info.date = now;
        info.uploadSpeed = _uploadSpeed;
        info.downloadSpeed = _downloadSpeed;
        info.dataSize = _dataSize;
        connectivityRegistry[info.date] = info;
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
    
    //organizes the daily average of connectivity information from the the ISP
    struct connectivityInfo{
        uint date;
        uint uploadSpeed;
        uint downloadSpeed;
        uint gigabytes;
    }
    
    // stores daily connectivity information
    mapping (uint=>connectivityInfo) public connectivityRegistry;
    //array stores all the dates when connectivity information was logged in, this array can be used to iterate through the connectivityRegistry mapping
    uint [] loggedConnectivityDates;
    
    constructor(string _name, uint _population, string _schoolLocation,address _ispAddress )public{
        owner = _ispAddress;
        schoolName = _name;
        schoolLocation = _schoolLocation;
        schoolPopulation = _population;
    }

    //receives connectivity information from an IOT device or another reliable source at the school
    function addConnectivityInfo(uint _uploadSpeed,uint _downloadSpeed, uint _gigabytes) public {
        
        connectivityInfo memory info;
        info.date = now;
        info.uploadSpeed = _uploadSpeed;
        info.downloadSpeed = _downloadSpeed;
        info.gigabytes = _gigabytes;
        connectivityRegistry[info.date] = info;
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
    
    // returns general information of this smart contract
    function getSummary()public view returns(string,address,string,uint,bool) {
        return (
            schoolName, owner,schoolLocation, schoolPopulation, status
            );
    }
}

