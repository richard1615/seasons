// scripts/batchMint.js

const hre = require("hardhat");
require("dotenv").config();
const ethers = hre.ethers;

async function main() {
  const [deployer] = await ethers.getSigners();

  const NFT = await ethers.getContractFactory("MyNFT");
  const nft = NFT.attach(process.env.TOKEN_ADDRESS);

  const toAddress = deployer.address;
  const tokenIds = [1, 2, 3, 4, 5];
  const prompts = ["Winter Wonderland: A serene snow-covered landscape at night with a glowing full moon, silver-frosted trees, and a solitary owl perched on a branch.", "Transitional Echoes: An abstract representation of time's passage, blending elements from all four seasons: a melting icicle, a blooming flower, a golden leaf, and a sunhat resting beside a clock face.", "Summer Solstice: A sunlit beach during sunset, where the sky and the sea blend in a myriad of orange and purple hues, children build sandcastles, and palm trees sway gently in the warm breeze.", "Spring Awakening: A lush meadow at dawn where cherry blossom trees are in full bloom, butterflies flutter around, and a river gently meanders through, reflecting the pastel colors of the sky.", "Autumn Harmony: A dense forest where leaves are in the hues of gold, amber, and ruby. A deer drinks from a pond, and there's a faint hint of campfire smoke in the distance."];
  const tokenCids = ["QmW6VxYzhzgkt1saa9rbggtg3mna5kaerRNocuVins8cXg", "QmbVvsMpivExKdt2D8sjep19ryMhEfy8idDhQ6Yhiywyrz", "QmTNPzPUdVYVPEpiwceqJd3UM4PDys1zjVmxZ4uRFwpexj", "QmajBV25jtedTtGCd73n1LXMrjoENBJASwmJgzmrRFG58j", "QmU8Gd7DWjPwu6BFpKqykczvZZLqN6o2j7pybiJGT5G1L6"];

  for (let i = 0; i < tokenIds.length; i++) {
    await nft.mint(toAddress, tokenIds[i], prompts[i], tokenCids[i]);
    console.log(`Minted token ${tokenIds[i]} with prompt ${prompts[i]} and CID ${tokenCids[i]}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
