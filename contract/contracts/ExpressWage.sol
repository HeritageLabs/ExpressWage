//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ExpressWage {
    address public token; // The ERC-20 token used for payments
    address public owner;

    constructor(address _tokenAddress) {
        token = _tokenAddress;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    event EmployeePaid(address indexed employee, uint256 amount);

    // Pay a single employee
    function payEmployee(address employee, uint256 amount) external {
        require(employee != address(0), "Invalid employee address");
        require(amount > 0, "Amount must be greater than 0");

        IERC20(token).transfer(employee, amount);
        emit EmployeePaid(employee, amount);
    }

    // Pay multiple employees at once
    function payEmployees(
        address[] memory employees,
        uint256[] memory amounts
    ) external {
        require(employees.length == amounts.length, "Arrays length mismatch");

        for (uint256 i = 0; i < employees.length; i++) {
            address employee = employees[i];
            uint256 amount = amounts[i];

            require(employee != address(0), "Invalid employee address");
            require(amount > 0, "Amount must be greater than 0");

            IERC20(token).transfer(employee, amount);
            emit EmployeePaid(employee, amount);
        }
    }

    // Function to recover any mistakenly sent ERC-20 tokens to the contract
    function recoverTokens(
        address tokenAddress,
        uint256 amount
    ) external onlyOwner {
        IERC20(tokenAddress).transfer(owner, amount);
    }

    // Withdraw any remaining tokens in the contract to the owner
    function withdrawRemainingTokens() external onlyOwner {
        uint256 balance = IERC20(token).balanceOf(address(this));
        IERC20(token).transfer(owner, balance);
    }

    function transferOwnership(address _owner) external onlyOwner {
        owner = _owner;
    }
}
