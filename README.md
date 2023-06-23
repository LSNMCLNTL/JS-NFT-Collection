# Metacrafters-Projects
## For Test.sol
## Description

This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. The ETHContract is a smart contract written in Solidity version 0.8.0. It includes two functions for setting a public state variable called value. The value variable represents a numeric value that can be updated by calling these functions. The contract ensures that the new value being set is greater than zero and different from the current value. If any of these conditions are not met, the transaction is reverted to maintain data integrity and prevent unintended updates.

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., HelloWorld.sol). Copy and paste the following code into the file:

```solidity
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
```

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.18" (or another compatible version), and then click on the "Compile Test.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "Test.sol" contract from the dropdown menu, and then click on the "Deploy" button. Once the contract is deployed, you can now interact with it!
