pragma solidity ^0.4.4;

contract HelloWorld {

    uint num;
    string message = "Wassup World, I'm a smart smart contract!";

    function setNum(uint _num) returns(bool){
        num = _num;
        return true;
    }

    function returnNum() returns(uint){
        return num;
    }

    function speak() returns(string){
        return message;
    }

    function repeatToMe(string s) returns(string){
        message = s;
        return message;
    }

}
