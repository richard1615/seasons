const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
    const MyNFTContractAddress = process.env.TOKEN_ADDRESS; // Replace with your deployed contract's address

    // Fetch the deployed contract
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFTInstance = MyNFT.attach(MyNFTContractAddress);

    // Specify the token ID you want to query
    const tokenId = 1; // Replace with the desired token ID

    // Call the function
    const prompt = await myNFTInstance.promptDescription(tokenId);
    console.log(`Prompt for token ID ${tokenId}: ${prompt}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
