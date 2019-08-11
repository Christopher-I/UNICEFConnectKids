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
    function getDeployedSchools() public view returns(address [] memory) { 
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
    function createNewSchool(string name, uint ID, uint population) public {
        newSchool = new School(name, ID, population);
        deployedSchools.push(newSchool);
    }
    
    // returns a list of addresses of created schools
    function getDeployedSchools() public view returns(address [] memory) { 
        return deployedSchools;    
         }  
    
    // creates new ISPs  
    function createNewIsp(string name, uint ID) public {
        newIsp= new ISP(name, ID);
        deployedIsps.push(newIsp);
    }
    function getDeployedIsps() public view returns(address [] memory) { 
        return deployedIsps;    
    }  
}

//defines the ISP
contract ISP{
    
    string public ispName; 
    uint public ispID;
    
    //organizes the daily average of connectivity information from the the ISP
    struct connectivityInfo{
        uint gigabytes;
        uint uploadSpeed;
        uint downloadSpeed;
    }
    
    // stores daily connectivity information
    mapping (uint=>connectivityInfo) public connectivityRegistry;
    //stores all the dates when connectivity information was logged in, this array can be used to iterate through the connectivityRegistry mapping
    uint [] loggedConnectivityDates;
    
    constructor(string _name, uint _ID)public{
        ispName = _name;
        ispID = _ID;
    }
    
     //receives connectivity information from ISP
    function addConnectivityInfo(uint _date, uint _uploadSpeed,uint _downloadSpeed, uint _gigabytes) public {
        connectivityInfo memory info;
        info.uploadSpeed = _uploadSpeed;
        info.downloadSpeed = _downloadSpeed;
        info.gigabytes = _gigabytes;
        connectivityRegistry[_date] = info;
    }
}

//defines the school
contract School{
    string public schoolName; 
    string public currentISPProvider;
    uint public schoolID;
    uint public schoolPopulation;
    bool public status;
    
    //organizes the daily average of connectivity information from the the ISP
    struct connectivityInfo{
        uint uploadSpeed;
        uint downloadSpeed;
        uint gigabytes;
    }
    // stores daily connectivity information
    mapping (uint=>connectivityInfo) public connectivityRegistry;
    //array stores all the dates when connectivity information was logged in, this array can be used to iterate through the connectivityRegistry mapping
    uint [] loggedConnectivityDates;
    
    constructor(string _name, uint _ID, uint _population)public{
        schoolName = _name;
        schoolID = _ID;
        schoolPopulation = _population;
    }
    
    //receives connectivity information from an IOT device or another reliable source at the school
    function addConnectivityInfo(uint _date, uint _uploadSpeed,uint _downloadSpeed, uint _gigabytes) public {
        connectivityInfo memory info;
        info.uploadSpeed = _uploadSpeed;
        info.downloadSpeed = _downloadSpeed;
        info.gigabytes = _gigabytes;
        connectivityRegistry[_date] = info;
    }
    
    //updates the status of the schools connectivity to either active or non-active
    function updateStatus(bool _status) public{
        status = _status;
    }
    
    //updates the schools current ISP provider
    function updateISPProvider(string _ispName) public{
        currentISPProvider = _ispName;
        
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
    
    
    // returns general information of this smart contract
    function getSummary()public view returns(string,string,uint,uint,bool) {
        return (
            schoolName, currentISPProvider,schoolID, schoolPopulation, status
            );
    }
}

