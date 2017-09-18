var express = require('express');
var router = express.Router();

//************ SETTING UP CONTRACT **************//

/* Setting up the Web3 interaction
 * This may be better put in a module, 
 * however I'm not sure if this will be 
 * instantiated over and over again if it is.
*/
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); //The port of the TestRPC node

//Defining the contract data
//For the ABI I used: https://www.textfixer.com/tools/remove-line-breaks.php
//The address and the ABI can be found in the build.json file in Truffle
var abi = [{ "constant": false, "inputs": [], "name": "speak", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "returnNum", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_num", "type": "uint256" } ], "name": "setNum", "outputs": [], "payable": false, "type": "function" }],
    address = '0x876c152e10b37d56343c6a4305f88f6449aa5d90';

var contract = web3.eth.contract(abi).at(address); 

//console.log(contract);

//**************************//

router.get('/speak', (req, res, next) => {
    try{
        //How to call a fucking function call
        var msg = contract.speak.call();
        console.log(msg);
        res.send(msg);
    } catch(err){
//        console.log("Fuck!");
//        console.log(err);
        console.log("FUCK FUCK FUCK FUCK FUCK!!!!!!");
        res.send("Oh geez");
    }

})

router.get('/contract', (req, res, next) => {
    try{
        var con = contract;
        res.send(con);
    } catch(err){
        console.log("FUCK!")
        res.send(err);
    }
})

router.post('/set_number', (req, res, next) => {
    try{
        var num = req.body.num;
        console.log("Set contract number to: ", num);
        console.log("Setting number from: ", web3.eth.accounts[0]);
        
        //In order to send information to the contract, use method(parameters)
        contract.setNum(num, {from: web3.eth.accounts[0]});
        
        res.send(contract.num);
    } catch(err){
        console.log("error: ", err)
        res.send(err);
    }
})

router.get('/get_number', (req, res, next) => {
    try{
        //In order to retrieve information from the contract, use method.call()
        var num = contract.returnNum.call();
        console.log("Retrieved contract number: ", num);

        res.send(num);
    } catch(err){
        console.log("WHY?!: ", err);
        res.send(err);
    }
})

module.exports = router;