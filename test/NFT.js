const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

const ether = tokens

describe('NFT', () => {
   const NAME = 'Assassins Creed'
   const SYMBOL = 'AC'
   const COST = ether(10)
   const MAX_SUPPLY = 25
   const BASE_URI = 'ipfs://QmQPEMsfd1tJnqYPbnTQCjoa8vczfsV1FmqZWgRdNQ7z3g/'

   let nft,
       deployer,
       minter
       
   beforeEach(async () => {
    let accounts = await ethers.getSigners()
    deployer = accounts[0]
    minter = accounts[1]

})

   describe('Deployment', () => {
    const ALLOW_MINTING_ON = '1719277871'

    beforeEach(async () => {
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(NAME, SYMBOL, COST, MAX_SUPPLY, ALLOW_MINTING_ON, BASE_URI)
    })
    it('has a correct name', async () => {
        expect(await nft.name()).to.equal(NAME)
    })
    it('has a correct symbol', async () => {
        expect(await nft.symbol()).to.equal(SYMBOL)
    })
    it('returns the cost to mint', async () => {
        expect(await nft.cost()).to.equal(COST)
    })
    it('returns the maximum total supply', async () => {
        expect(await nft.maxSupply()).to.equal(MAX_SUPPLY)
    })
    it('returns the allowed minting time', async () => {
        expect(await nft.allowMintingOn()).to.equal(ALLOW_MINTING_ON)
    })
    it('returns the base URI', async () => {
        expect(await nft.baseURI()).to.equal(BASE_URI)
    })
    it('returns the owner', async () => {
        expect(await nft.owner()).to.equal(deployer.address)
    })
   })
})