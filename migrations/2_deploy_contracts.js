const Tether = artifacts.require("Tether");
const RWD = artifacts.require("RWD");
const decentralBank = artifacts.require("DecentralBank");
module.exports = async function (deployer, network, accounts) {
    //Deploy Tether Contract
    await deployer.deploy(Tether);
    const tether = await Tether.deployed();
    //Deploy RWD Contract
    await deployer.deploy(RWD);
    const rwd = await RWD.deployed();
    //Deploy DecentralBank Contract
    await deployer.deploy(decentralBank, rwd.address, tether.address)
    const DecentralBank = await decentralBank.deployed();
    //transfer all to decentral bank
    await rwd.transfer(DecentralBank.address, "1000000000000000000000000");

    //Distribute 100 Tether to onvestors
    await tether.transfer(accounts[1], "100000000000000000000");
};