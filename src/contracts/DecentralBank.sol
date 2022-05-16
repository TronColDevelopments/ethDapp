//SPDX-License-Identifier: GPL-3
pragma solidity ^0.8.0;
import "./RWD.sol";
import "./Tether.sol";


contract DecentralBank {
    string public name = "Decentral Bank";
    address public owner;
    RWD public rwd;
    Tether public tether;

    constructor() {
        owner = msg.sender;
    }
}
