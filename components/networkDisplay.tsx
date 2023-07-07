import { useEffect, useState } from 'react'
import { useAccount, useNetwork } from 'wagmi'
import { ContractContext } from '../contexts'
import { useContext } from 'react'
const NetworkDisplay = () => {
    const { chain, chains } = useNetwork()
    const [network, setNetwork] = useState<any>()

    const { accountAddress, initialSupply } = useContext(ContractContext);
    useEffect(() => {
        setNetwork(chain)
        },[chain]
    )

    const { address, isConnecting, isDisconnected } = useAccount()
 
   
    console.log("initialSupply:", initialSupply)
 
    console.log("address:", accountAddress)
    
      return (
    <div className="bg-white rounded-lg p-2">hey
      {/* {chain && <div>Connected to {chain.name}</div>} */}
      {/* {network && <div>Connected to {network}</div>} */}
      {accountAddress && <div>{accountAddress}</div>}
      {/* {chains && (
        <div>Available chains: {chains.map((chain) => chain.name)}</div>
      )} */}
    </div>
  )
}

export default NetworkDisplay
