const { ethers } = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
require("dotenv").config();

const tokenAddress = process.env.TOKEN_ADDRESS;
const tokenABI = tokenContractJSON.abi;
const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = process.env.WALLET_ADDRESS;

async function main() {
    const tokenContract = await ethers.getContractAt(tokenABI, tokenAddress);
    const fxRootContract = await ethers.getContractAt(fxRootContractABI, fxRootAddress);

    const tokenIds = [1, 2, 3, 4, 5];

    for(let token of tokenIds) {
        const approveTx = await tokenContract.approve(fxRootAddress, token);
        await approveTx.wait();
        console.log(`Approved token ${token}`);
    }

    for(let token of tokenIds) {
        const depositTx = await fxRootContract.deposit(tokenAddress, walletAddress, token, "0x");
        await depositTx.wait();
        console.log(`Deposited token ${token}`);
    }

    console.log("Tokens deposited successfully!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
