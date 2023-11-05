// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const cUSDMainnet = '0x765de816845861e75a25fca122bb6898b8b1282a';
  const cUSDTestnet = '0x874069fa1eb16d44d622f2e0ca25eea172369bc1';

  const expresswage = await hre.ethers.deployContract("ExpressWage", [cUSDTestnet]);

  await expresswage.waitForDeployment();

  console.log(`ExpressWage deployed to ${expresswage.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
