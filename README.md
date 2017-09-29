# Greeter DAPP
My hello world project using Express and Web3 to create a server that can interact with a smart contract hosted on testrpc.
- - - -
#### HOW TO LAUNCH:
1. First launch the HelloWorld.sol contract onto test rpc 
2. Use `$truffle node` to check that the contract is on the testrpc, if not then use `$truffle migrate`.
    1. If it is not hosted then you'll have get the address again. Thus: launch `$truffle console`.
    2. Enter:
        ``` Javascript
        > var contract;
        > HelloWorld.deployed().then((instance) => {contract = instance});
        > contract.address; // <-- Copy this
        ```
        Take that address and put in the /server/routes/setupContract.js

<<<<<<< HEAD
#### HOW TO LAUNCH:
1 First launch the HelloWorld.sol contract onto test rpc
2 Use `$truffle node` to check that the contract is on the testrpc, if not then use `$truffle migrate`.
⋅⋅2.1 If it is not hosted then you'll have get the address again. Thus: launch `$truffle console`.
⋅⋅2.2 Enter:

``` Javascript
> var contract;
> HelloWorld.deployed().then((instance) => {contract = instance});
> contract.address
```
⋅⋅Take that address and put in the /server/routes/setupContract.js⋅⋅

3. `$cd server` and `$npm start` to get the server running

=======
3. `$cd server` and `$npm start` to get the server running
- - - -
>>>>>>> ecaa9fb26250767851c4f5dd436cb98080f0bc36
#### TODO:
* Implement 'event' handling
