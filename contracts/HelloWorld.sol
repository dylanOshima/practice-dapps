pragma solidity ^0.4.4;

contract HelloWorld {

    uint num;
    string message = "Wassup World, I'm a smart smart contract!";

    function setNum(uint _num){
        num = _num;
    }

    function returnNum() returns(uint){
        return num;
    }

    function speak() returns(string){
        return message;
    }

}