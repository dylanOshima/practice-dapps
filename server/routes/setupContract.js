var express = require('express');
var router = express.Router();

// Reads the JSON file
//ERROR: NOT READING
var fs = require('fs');
// var contractJSON = JSON.parse(fs.readFile('HelloWorld.json', 'utf8')); //Doesn't work
var contractJSON = require('./HW.json'); //Works ?!

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
//IMPROVEMENT: Take the ABI from the json file, creating an object and taking the .abi property
var abi = contractJSON.abi,
    address = "0x60112e93164d389ec647b6315b1c33e506ee6a6d";

var contract = web3.eth.contract(abi).at(address);

//console.log(contract);

//**************************//

router.get('/contract', (req, res, next) => {
    try{
        var con = contract;
        res.send(con);
    } catch(err){
        console.log("FUCK!")
        res.send(err);
    }
})

router.get('/speak', (req, res, next) => {
    try{
        //How to call a fucking function call
        var msg = contract.speak.call(); //Use .call() when there is no change in state
        console.log("Speaking :D");
        res.send(msg);
    } catch(err){
//        console.log("Fuck!");
//        console.log(err);
        console.log("FUCK FUCK FUCK FUCK FUCK!!!!!!");
        res.send("Oh geez");
    }

})

router.post('/set_number', (req, res, next) => {
//Promises can be used to catch multiple errors
//Use try-catch if using callbacks
    try{
        var num = req.body.num;

        //In order to send information to the contract, use method(parameters)
        flag = contract.setNum(num, {from: web3.eth.accounts[0]});

        // console.log(worked);
        /* Some callback that takes answer */
        if(flag){
          console.log("Set contract number to: ", num);
          console.log("Setting number from: ", web3.eth.accounts[0]);

          res.send("The number is: " + contract.returnNum.call());
        } else {
          res.send("Number NOT set");
        }
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
