# Hardhat NFT Project with OpenZeppelin

This project revolves around an NFT contract named `MyNFT`, built using the Solidity programming language, Hardhat development environment, and OpenZeppelin library. This README provides a comprehensive overview of the project, the steps to set it up, and guidance on deploying the smart contract to Ethereum's Goerli testnet and Polygon's Mumbai testnet.

## Project Description

The `MyNFT` contract inherits from OpenZeppelin's `ERC721` and `Ownable` contracts, providing basic non-fungible token functionalities and owner-specific capabilities. Key features of the contract include:

- **Minting**: Only the owner can mint new NFT tokens with specific prompts and content identifiers (CIDs).
- **Setting Base URL**: The owner can set a base file URL, which forms a part of the final file URL for a given token.
- **Fetching Token Data**: Users can fetch a token's prompt description and its associated file URL.

## Setup

1. Make sure you have Node.js and npm installed on your machine.
2. Clone the repository.
3. Navigate to the project directory.
4. Run `npm install` to install the project dependencies.
5. Create a `.env` file in the root of the project to store sensitive and environment-specific data.

## Environment Variables

Populate the `.env` file with the following variables:

- `ALCHEMY_API_KEY_GOERLI`: Your Alchemy API key for the Goerli testnet.
- `ALCHEMY_API_KEY_MUMBAI`: Your Alchemy API key for the Polygon Mumbai testnet.
- `GOERLI_PRIVATE_KEY`: Private key associated with your Ethereum wallet on the Goerli testnet.
- `MUMBAI_PRIVATE_KEY`: Private key associated with your Ethereum wallet on the Polygon Mumbai testnet.

Example of `.env`:

```
ALCHEMY_API_KEY_GOERLI=YOUR_GOERLI_KEY
ALCHEMY_API_KEY_MUMBAI=YOUR_MUMBAI_KEY
GOERLI_PRIVATE_KEY=YOUR_GOERLI_PRIVATE_KEY
MUMBAI_PRIVATE_KEY=YOUR_MUMBAI_PRIVATE_KEY
```

## Deployment

The project is configured to deploy on Ethereum's Goerli testnet and Polygon's Mumbai testnet.

To compile and deploy the smart contract:

1. Compile the smart contract:

   ```bash
   npx hardhat compile
   ```

2. Deploy the contract to Goerli:

   ```bash
   npx hardhat run --network goerli scripts\deploy.js
   ```
   After successful deployment, note down the contract address and update the TOKEN_ADDRESS in your .env file.

3. Mint the NFt tokens:

   ```bash
   npx hardhat run --network goerli scripts\mint.js
   ```
   This script mints tokens with predefined descriptions and content identifiers (CIDs) for an IPFS gateway.
4. Transfer the NFT tokens to mumbai:

   ```bash
   npx hardhat run --network goerli scripts\approveDeposit.js
   ```
   This script approves the transfer of tokens from goerli to mumbai.
5. You can check the token balance on either of the test networks using the following command:

   ```bash
   npx hardhat run --network goerli scripts\getBalance.js
   ```

   or 

    ```bash
    npx hardhat run --network mumbai scripts\getBalance.js
    ```

## Important Notes

- Always make sure to store sensitive information like API keys and private keys securely and avoid committing them directly to source control.
- Test your contract thoroughly on testnets before considering a mainnet deployment.
- If you change the base URI after minting tokens, the file URL for existing tokens will also change, since the base URI is dynamic.

## Conclusion

This Hardhat NFT project leverages the power of OpenZeppelin's library to create a robust NFT contract with added functionalities. Ensure you're familiar with Ethereum, Hardhat, Solidity, and smart contract development practices before executing and deploying these contracts on live networks.