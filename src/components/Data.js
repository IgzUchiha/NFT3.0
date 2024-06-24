

const Data = ({maxSupply, totalSupply, cost, balance}) => {
    return (
        <div>
            <p><strong>Available to Mint:</strong>{maxSupply - totalSupply}</p>
        </div>
    )
}
export default Data;