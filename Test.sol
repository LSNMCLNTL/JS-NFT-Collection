// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;


//For this project, write a smart contract that implements the require(), assert() and revert() statements.

contract ETHContract {
    uint public value;

    function setValue(uint _value) external {
        require(_value > 0, "Value must be greater than zero");
        
        assert(_value != value);

        value = _value;
    }

    function valueRevert(uint _value) external {
        if (_value == value) {
            revert("New value must be different from the current value");
        }

        value = _value;
    }
}
