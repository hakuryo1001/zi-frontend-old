import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'

import { useState, useEffect } from 'react'

import { injectedConnector } from '../connectors'
export function Profile() {
  const { address, connector:MyConnector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ address })
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()
  const [ensNameState, setEnsNameState] = useState<any>();
  const [addressState, setAddressState] = useState<any>();

  
  useEffect(() => {
    if (isConnected) {
      setEnsNameState(ensName)
      setAddressState(address)
     
    }
  }, [isConnected])

  console.log(injectedConnector)
  if (isConnected) {
    return (
      <div className="bg-red-400 p-2 rounded-lg text-white font-bold">
      
         <button onClick={disconnect}>{ensName ? `${ensNameState} (${String(addressState).slice(0,10).concat("...")})` : String(addressState).slice(0,10).concat("...")} </button>
       </div>
    )
  }
  
  return (
    <div>
      <button 
          className="bg-blue-400 p-2 rounded-lg text-white font-bold"
          disabled={!injectedConnector.ready}
          key={injectedConnector.id}
          onClick={() => connect({ injectedConnector })}
        >
          Connect
        </button>
      
    </div>
  )
}


// {connectors.map((connector) => (
//   <button 
//     className="bg-blue-400 p-2 rounded-lg text-white font-bold"
//     disabled={!connector.ready}
//     key={connector.id}
//     onClick={() => connect({ MyConnector })}
//   >
//     Connect
//     {/* {connector.name}
//     {!connector.ready && ' (unsupported)'}
//     {isLoading &&
//       connector.id === pendingConnector?.id &&
//       ' (connecting)'} */}
//   </button>
// ))}