import { ethers } from "hardhat";
 const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-mainnet.g.alchemy.com/v2/_h7b0uQquHnoOk3x_Bc8ciWU9q4uzEsc'));


async function main() {
const UsdtcontractAddress =await web3.eth.getStorageAt("0xdAC17F958D2ee523a2206206994597C13D831ec7", 1);
//const storage = web3.providers.getstorageAt(contractAddress);
console.log(`Usdt storage is at ${UsdtcontractAddress}`);


const UsdccontractAddress =await web3.eth.getStorageAt("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",1);
//const storage = web3.providers.getstorageAt(contractAddress);
console.log(`Usdc storage is at ${UsdccontractAddress}`);

const DaiContractAddress =await web3.eth.getStorageAt("0x6B175474E89094C44Da98b954EedeAC495271d0F",0);
//const storage = web3.providers.getstorageAt(contractAddress);
console.log(`Binance storage is at ${DaiContractAddress}`);

const MaticcontractAddress =await web3.eth.getStorageAt("0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",1);
//const storage = web3.providers.getstorageAt(contractAddress);
console.log(`Usdc storage is at ${MaticcontractAddress}`);

const ShibacontractAddress =await web3.eth.getStorageAt("0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",1);
//const storage = web3.providers.getstorageAt(contractAddress);
console.log(`Usdc storage is at ${ShibacontractAddress}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  