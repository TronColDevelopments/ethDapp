//SPDX-License-Identifier: GPL-3
pragma solidity ^0.8.0;

contract RWD {
    string public name = "Reward token";
    string public symbol = "RWD";
    uint public totalSupply = 1000000000000000000000000;
    uint8 public decimals = 18;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint _value
    );
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint _value
    );
    error insufficientBalance(uint available, uint amount);
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;

    constructor(){
        balanceOf[msg.sender] = totalSupply;
    }
    function transfer(address to, uint value) public returns(bool success){
        require(balanceOf[msg.sender] >= value);
        /*if(value > balanceOf[msg.sender]){
            revert insufficientBalance({
                available: balanceOf[msg.sender],
                amount: value
            });
        }*/
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }
    function approve(address spender, uint value) public returns(bool success){
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }
    function transferFrom(address from, address to, uint value) public returns(bool success){
        require(value <= balanceOf[from]);
        require(value <= allowance[from][msg.sender]);
        /*if(value > balanceOf[from]){
            revert insufficientBalance({
                available: balanceOf[from],
                amount: value
            });
        }
        if(value > allowance[from][msg.sender]){
            revert insufficientBalance({
                available: balanceOf[from],
                amount: value
            });
        }*/
        balanceOf[from] -= value;
        balanceOf[to] += value;
        allowance[from][msg.sender] -= value;
        emit Transfer(msg.sender, to, value);
        return true;
    }
}