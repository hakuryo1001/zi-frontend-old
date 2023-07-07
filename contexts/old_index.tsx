// @ts-nocheck

import { createContext, useContext, useEffect, useState } from 'react'
import { readContract, readContracts } from '@wagmi/core'
import contractConfig from "../contractConfig/contractConfig";


import { useBlockNumber, useAccount } from 'wagmi';

const ContractContext = createContext<any>({})

const ContractProvider = ({ children }: any) => {
    const [initialSupply, setInitialSupply] = useState(null);
    const [supplyLimit, setSupplyLimit] = useState(null);
    const [minterAddresses, setMinterAddresses] = useState(null);
    const [minters, setMinters] = useState(null);
    const [minterAllowance, setMinterAllowance] = useState(null);
    const [initialAllowance, setInitialAllowance] = useState(null);
    const [enabledMinters, setEnabledMinters] = useState(null);
    const [isMinter, setIsMinter] = useState(null);
    const [remainingSupply, setRemainingSupply] = useState(null);
    const [oneBipOfTotalSupply, setOneBipOfTotalSupply] = useState(null);
    const [allMinters, setAllMinters] = useState(null);
    const [totalSupply, setTotalSupply] = useState(null);

    const [token, setToken] = useState(null);
    const [tokenAddress, setTokenAddress] = useState(null);
    const [totalAuctionAmount, setTotalAuctionAmount] = useState(null);
    const [totalAmountSold, setTotalAmountSold] = useState(null);
    const [limit, setLimit] = useState(null);
    const [initialAuctionPrice, setInitialAuctionPrice] = useState(null);
    const [lastAvailableAuctionStartTime, setLastAvailableAuctionStartTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [timeToEmitAll, setTimeToEmitAll] = useState(null);
    const [halflife, setHalflife] = useState(null);
    const [decayConstant, setDecayConstant] = useState(null);
    const [emissionRate, setEmissionRate] = useState(null);
    const [criticalTime, setCriticalTime] = useState(null);
    const [criticalAmount, setCriticalAmount] = useState(null);
    const [purchasePriceForOne, setPurchasePriceForOne] = useState(null);


    const zi_address = contractConfig.Zi.contractAddress;
    const zi_abi = contractConfig.Zi.contractABI;
    const auctionModule_address = contractConfig.AuctionModule.contractAddress;
    const auctionModule_abi = contractConfig.AuctionModule.contractABI;

    useEffect(() => {
        const fetchData = async () => {
            const zi_data = await readContracts({
                contracts: [
                    { address: zi_address, abi: zi_abi, functionName: 'initialSupply' },
                    { address: zi_address, abi: zi_abi, functionName: 'supplyLimit' },
                    { address: zi_address, abi: zi_abi, functionName: 'minterAddresses', args: [0] },
                    { address: zi_address, abi: zi_abi, functionName: 'minters', args: [address] },
                    { address: zi_address, abi: zi_abi, functionName: 'minterAllowance', args: [address] },
                    { address: zi_address, abi: zi_abi, functionName: 'initialAllowance', args: [address] },
                    { address: zi_address, abi: zi_abi, functionName: 'enabledMinters', args: [address] },
                    { address: zi_address, abi: zi_abi, functionName: 'isMinter', args: [address] },
                    { address: zi_address, abi: zi_abi, functionName: 'remainingSupply' },
                    { address: zi_address, abi: zi_abi, functionName: 'oneBipOfTotalSupply' },
                    { address: zi_address, abi: zi_abi, functionName: 'allMinters' },
                    { address: zi_address, abi: zi_abi, functionName: 'totalSupply' },
                    { address: zi_address, abi: zi_abi, functionName: 'purchasePrice', args:[Number(1000000000000000000)] },
                ],
            });
            const auctionModule_data = await readContracts({
                contracts: [
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'token' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'tokenAddress' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'totalAuctionAmount' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'totalAmountSold' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'limit' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'initialAuctionPrice' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'lastAvailableAuctionStartTime' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'startTime' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'timeToEmitAll' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'halflife' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'decayConstant' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'emissionRate' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'criticalTime' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'criticalAmount' },
                    { address: auctionModule_address, abi: auctionModule_abi, functionName: 'purchasePrice', args:[Number(1000000000000000000)] },
                ],
            });
            

            setInitialSupply(zi_data[0].result);
            setSupplyLimit(zi_data[1].result);
            setMinterAddresses(zi_data[2].result);
            setMinters(zi_data[3].result);
            setMinterAllowance(zi_data[4].result);
            setInitialAllowance(zi_data[5].result);
            setEnabledMinters(zi_data[6].result);
            setIsMinter(zi_data[7].result);
            setRemainingSupply(zi_data[8].result);
            setOneBipOfTotalSupply(zi_data[9].result);
            setAllMinters(zi_data[10].result);
            setTotalSupply(zi_data[11].result);
            
            
            setToken(auctionModule_data[0].result);
            setTokenAddress(auctionModule_data[1].result);
            setTotalAuctionAmount(auctionModule_data[2].result);
            setTotalAmountSold(auctionModule_data[3].result);
            setLimit(auctionModule_data[4].result);
            setInitialAuctionPrice(auctionModule_data[5].result);
            setLastAvailableAuctionStartTime(auctionModule_data[6].result);
            setStartTime(auctionModule_data[7].result);
            setTimeToEmitAll(auctionModule_data[8].result);
            setHalflife(auctionModule_data[9].result);
            setDecayConstant(auctionModule_data[10].result);
            setEmissionRate(auctionModule_data[11].result);
            setCriticalTime(auctionModule_data[12].result);
            setCriticalAmount(auctionModule_data[13].result);
            setPurchasePriceForOne(auctionModule_data[14].result);

        };

        fetchData();
    }, []);

    const { data: blockNumberData, isError: blockNumberIsError, isLoading: blockNumberIsLoading } = useBlockNumber({ watch: true });
    const { address } = useAccount();
    const [ accountAddress, setAccountAddress] = useState<any>()

    useEffect(() => {
        setAccountAddress(address)
    }, [])


    return (
        <ContractContext.Provider value={{ 
            blockNumberData, 
            accountAddress, 
            initialSupply, 
            supplyLimit, 
            minterAddresses, 
            minters, 
            minterAllowance, 
            initialAllowance, 
            enabledMinters, 
            isMinter, 
            remainingSupply, 
            oneBipOfTotalSupply, 
            allMinters,
            totalSupply, 
            purchasePriceForOne,
            contractConfig,
            
            
        }}>
            {children}
        </ContractContext.Provider>
    );
}
export { ContractContext, ContractProvider }
