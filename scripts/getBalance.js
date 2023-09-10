const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
require("dotenv").config();

const tokenAddress = process.env.TOKEN_ADDRESS;
const tokenABI = tokenContractJSON.abi;
const walletAddress = process.env.WALLET_ADDRESS;
async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });