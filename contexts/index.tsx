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

    return (
        <ContractContext.Provider value={{ 
            blockNumberData, 
            address, 
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
// const ContractProvider = ({ children }: any) => {
    
//     const [totalSupply, setTotalSupply] = useState(null);
//     const [emissionRate, setEmissionRate] = useState(null);
//     const [purchasePrice, setPurchasePrice] = useState(null);

    
//     const zi_address = contractConfig.Zi.contractAddress;
//     const zi_abi = contractConfig.Zi.contractABI;
//     const auctionModule_address = contractConfig.AuctionModule.contractAddress;
//     const auctionModule_abi = contractConfig.AuctionModule.contractABI;

//     useEffect(() => {
//         const fetchData = async () => {
        
//             const totalSupply = await readContract({
//                             address: zi_address,
//                             abi: zi_abi,
//                             functionName: 'totalSupply',
//                             args: []
//                         })
            
//                         const emissionRate = await readContract({
//                             address: auctionModule_address,
//                                 abi: auctionModule_abi,
//                                 functionName: 'emissionRate',
//                                 args:[]
//                         })
//                         const purchasePrice = await readContract({
//                             address: auctionModule_address,
//                                 abi: auctionModule_abi,
//                                 functionName: 'purchasePrice',
//                                 args:[1000000000000000000]
//                         })
        
//             setTotalSupply(totalSupply);
//             setEmissionRate(emissionRate);
//             setPurchasePrice(purchasePrice);
//         };

//         fetchData();
//     }, [].result);
//     const { data: blockNumberData, isError: blockNumberIsError, isLoading: blockNumberIsLoading } = useBlockNumber({
//         watch: true
//     })
//     const { address } = useAccount();
//     return(
//         <ContractContext.Provider value={{blockNumberData, address, contractConfig, totalSupply, 
//             emissionRate,
//             purchasePrice
//             }}>
//             {children}
//         </ContractContext.Provider>
//     )
// }
// export { ContractContext, ContractProvider }


// Publicly Callable View Functions:

// function initialSupply() public view returns (uint256);
// function supplyLimit() public view returns (uint256);
// function minterAddresses(uint) public view returns (address);
// function minters(address) public view returns (bool);
// function minterAllowance(address) public view returns (uint256);
// function initialAllowance(address) public view returns (uint256);
// function enabledMinters(address) public view returns (bool);
// function isMinter(address minter) public view returns (bool);
// function remainingSupply() public view returns (uint256);
// function oneBipOfTotalSupply() public view returns (uint256);
// function allMinters() public view returns (address[] memory);


// Publicly Callable Write Functions (excluding internal functions):

// constructor(uint256 _initialSupply, uint256 _supplyLimit);
// function mint(address account, uint256 amount) public nonReentrant onlyOwner;
// function burn(address account, uint256 amount) public nonReentrant onlyOwner;
// function mintByMinter(address to, uint256 amount) public nonReentrant whenNotDisabled(msg.sender) onlyMinters;
// function burnByMinter(address from, uint256 amount) public nonReentrant whenNotDisabled(msg.sender) onlyMinters;
// function configureMinter(address minter, uint256 allowance) external onlyOwner returns (bool);
// function removeMinter(address minter) external onlyOwner returns (bool);


// The publically callable view functions in this contract are:

// `token()`: Returns the token that's being auctioned.
// `tokenAddress()`: Returns the address of the token that's being auctioned.
// `totalAuctionAmount()`: Returns the total amount of the token that's being auctioned.
// `totalAmountSold()`: Returns the total amount of the token that has been sold.
// `limit()`: Returns the limit of the auction.
// `initialAuctionPrice()`: Returns the initial price of the auction.
// `lastAvailableAuctionStartTime()`: Returns the last available start time of the auction.
// `startTime()`: Returns the start time of the auction.
// `timeToEmitAll()`: Returns the time to emit all the tokens.
//  `halflife()`: Returns the halflife of the auction.
//  `decayConstant()`: Returns the decay constant of the auction.
//  `emissionRate()`: Returns the emission rate of the auction.
//  `criticalTime()`: Returns the critical time of the auction.
//  `criticalAmount()`: Returns the critical amount of the auction.
//  `purchasePrice(uint256 numTokens)`: Returns the purchase price for a specific number of tokens.
 
// The publically callable write functions in this contract are:
// `constructor(address _tokenAddress, uint256 _totalAuctionAmount, uint256 _initialAuctionPrice, uint256 _timeToEmitAll)`: Sets the initial parameters for the auction.
// `depositInitialReserves()`: Transfers the auction tokens from the owner to the contract.
// `withdrawReserves(uint256 amount)`: Allows the owner to withdraw a specified amount of the auction tokens.
// `purchaseTokens(uint256 numTokens, address to)`: Allows a user to purchase a specified number of tokens.
// `depositMoreForAuctioning(uint256 additionalAuctionAmount, uint256 extraTime)`: Allows the owner to deposit more tokens for the auction and extend the time of the auction.
// `rescueERC20(address tokenContract, address to, uint256 amount)`: Allows the owner to rescue any ERC20 token accidentally sent to the contract.