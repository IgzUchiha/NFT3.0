import { ethers } from 'ethers'

const Data = ({maxSupply, totalSupply, cost, balance}) => {
    return (
        <div>
            <p><strong>Available to Buy:</strong>{maxSupply - totalSupply}</p>
            <p><strong>Cost to Buy:</strong> {ethers.utils.formatUnits(cost, 'ether')} ETH</p>
      <p><strong>You own:</strong> {balance.toString()}</p>
        </div>
    )
}
export default Data;