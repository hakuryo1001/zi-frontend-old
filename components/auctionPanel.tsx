import { useContext } from "react";
import { ContractContext } from "../contexts";
import Infoblock from "./infoblock";
import { formatEther, parseEther } from "ethers/lib/utils";

const AuctionInfo = () => {
    const {totalSupply, 
        emissionRate,
        purchasePriceForOne, initialSupply} = useContext(ContractContext);

    return (
        <div>
            <div className="font-bold text-xl"> Auction </div>
            {totalSupply && <Infoblock info={"Total Supply"} contractInfo={Number(totalSupply)/10**18} />} 
            {purchasePriceForOne && <Infoblock info={"Price of 1 Zi"} contractInfo={Number(purchasePriceForOne)/10**18+" Ξ"} />}
            {initialSupply && <Infoblock info={"initialSupply"} contractInfo={Number(initialSupply)/10**18+" Ξ"} />} 


        </div>
    )
}
export default AuctionInfo


// import { formatEther, parseEther } from "ethers/lib/utils";
// import { useContext, useEffect, useState } from "react";
// import { useContractRead, usePrepareContractWrite, useContractWrite, useAccount } from "wagmi";
// import Image from "next/image";
// import { BigNumber, Contract } from "ethers";
// import Infoblock from "./infoblock";
// import { readContracts } from '@wagmi/core'

// import { ethers } from "ethers";

// import { setUncaughtExceptionCaptureCallback } from "process";
// import { ContractContext } from "../contexts";

// // import MintPanel from "./mintPanel";
// import { readContract } from '@wagmi/core'

// const styles = {
//     button: "text-gray-900 bg-white hover:bg-gray-100 border-2 border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 mr-2 mb-2 shadow  shadow-gray-400 m-4",
//     input: "block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center",
// }


// const AuctionInfo = () => {
//     const {totalSupply, 
//         emissionRate,
//         purchasePriceForOneForOne} = useContext(ContractContext);
//     // const { contractConfig } = useContext(ContractContext);
//     // const [totalSupply, setTotalSupply] = useState<any>(null);
//     // const [emissionRate, setEmissionRate] = useState<any>(null);
//     // const [purchasePriceForOneForOne, setpurchasePriceForOneForOne] = useState<any>(null);
    
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         const zi_address = contractConfig.Zi.contractAddress;
//     //         const zi_abi = contractConfig.Zi.contractABI;
//     //         const auctionModule_address = contractConfig.AuctionModule.contractAddress;
//     //         const auctionModule_abi = contractConfig.AuctionModule.contractABI;
//     //         const totalSupply = await readContract({
//     //             address: zi_address,
//     //             abi: zi_abi,
//     //             functionName: 'totalSupply',
//     //             args: []
//     //         })

//     //         const emissionRate = await readContract({
//     //             address: auctionModule_address,
//     //                 abi: auctionModule_abi,
//     //                 functionName: 'emissionRate',
//     //                 args:[]
//     //         })
//     //         const purchasePriceForOneForOne = await readContract({
//     //             address: auctionModule_address,
//     //                 abi: auctionModule_abi,
//     //                 functionName: 'purchasePriceForOneForOne',
//     //                 args:[1000000000000000000]
//     //         })

            
//     //         setTotalSupply(totalSupply);
//     //         setpurchasePriceForOneForOne(purchasePriceForOneForOne);
//     //         setEmissionRate(emissionRate);
//     //     }
        
//     //     fetchData();
//     // }, [contractConfig]);
    
//     return (
//         <div className="text-blue-700">
//             <div className="font-bold text-xl"> Auction </div>
//             {totalSupply && <Infoblock info={"Total Supply"} contractInfo={Number(totalSupply)/10**18} />}
//             {purchasePriceForOneForOne && <Infoblock info={"Data"} contractInfo={Number(purchasePriceForOneForOne)/10**18+" Ξ"} />}
//         </div>
//     )
// }
// export default AuctionInfo

// // import { formatEther, parseEther } from "ethers/lib/utils";
// // import { useContext, useEffect, useState } from "react";
// // import { useContractRead, usePrepareContractWrite, useContractWrite, useAccount } from "wagmi";
// // import Image from "next/image";
// // import { BigNumber, Contract } from "ethers";
// // import Infoblock from "./infoblock";
// // import { ethers } from "ethers";

// // import { setUncaughtExceptionCaptureCallback } from "process";
// // import { ContractContext } from "../contexts";

// // import MintPanel from "./mintPanel";
// // import { readContract } from '@wagmi/core'
// // const styles = {
// //     button: "text-gray-900 bg-white hover:bg-gray-100 border-2 border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 mr-2 mb-2 shadow  shadow-gray-400 m-4",
// //     input: "block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center",
// // }


// // const AuctionInfo = async () => {
// //     // const { contractConfig } = useContext(ContractContext);
// //     // const zi_address = contractConfig.Zi.contractAddress;
// //     // const zi_abi = contractConfig.Zi.contractABI;
// //     // const data = await readContract({
// //     //     address: zi_address,
// //     //   abi: zi_abi,
// //     //   functionName: 'oneBipOfTotalSupply',
// //     //   args: []
// //     // })
    
 
// //     // console.log(data);
    
// //     return (
// //         <div className="text-blue-700">
// //             <div className="font-bold text-xl"> Auction </div>
// //             <Infoblock info={"Total Supply"} contractInfo={Number(1)} />
// //         </div>
        
// //     )
// // }
// // export default AuctionInfo



// // // const Pictures = ({baseTokenURI, auctionable}: any) => {
// // //     const { contracts } = useContext(ContractContext);
// // //     const [imageObjectURL, setImageObjectURL] = useState<any>();
// // //     const [images, setImages] = useState<any[]>([]);
    
// // //     const getPictures = async (numberOfTokens: any) => {
// // //         var pictures = [];
// // //         for (let i = 1; i <= numberOfTokens; i++) {
// // //             const pic = await getPic(i)
// // //             pictures.push(pic)
// // //         }

// // //         setImages(pictures)

// // //     }
    
// // //     const getPic = async (tokenId: any) => {
       
        
// // //         console.log("!!!!!", baseTokenURI)
        
// // //         const r = await fetch(`${baseTokenURI}${tokenId}.json`)
// // //         console.log(`${baseTokenURI}${tokenId}.json`)
// // //         const x = await fetch(r.url)
// // //         const y = await fetch(x.url)
// // //         const z = await y.json()
// // //         console.log(z)
// // //         console.log("this is the z", z['image'])
// // //         const arweaveLink = await z.image
        
        
    
// // //         console.log("this is the arweave link:", arweaveLink)
        
// // //         setImageObjectURL(arweaveLink)
// // //         return arweaveLink
    

// // //     }
    
// // //     useEffect(() => {
        
// // //         getPictures(auctionable)
// // //     })
// // //     console.log("these are the images", images)


// // //     return (
// // //         <div className="text-center">
        
        
// // //             {images.length ?
// // //             <div className="rounded-xl p-4 m-4 text-bold grid grid-cols-1 text-3xl gap-4">
// // //             {images.map((image) => <div key={image}><Image key={image} className="p-4" alt="pic" src={image}  height={500} width={500}/></div>)}
// // //             </div>  :
// // //             <div>Loading</div>}
            
// // //         </div>
// // //         )    
// // // }



// // // const AuctionInfo = () => {
    
// // //     const {
// // //         contractAddress,
// // //         contractABI,
// // //         auctionableData,
// // //         currentIdData,
// // //         halfLifeData,
// // //         collectionSizeData,
// // //         amountReservedForWhitelistedData,
// // //         auctionedData,
// // //         priceForOneData,
// // //         auctionStartTimeData, 
// // //         initialPriceData, 
// // //         baseTokenURIData
// // //     } = useContext(ContractContext)
// // //     const [buyAmount, setBuyAmount] = useState()
    
    

// // //     const { data: purchasePriceForOneForOneData,
// // //         isError: purchasePriceForOneForOneIsError,
// // //         isLoading: purchasePriceForOneForOneIsLoading } = useContractRead({
// // //             addressOrName: contractConfig.contractAddress,
// // //             contractInterface: contractConfig.contractABI,
// // //             functionName: 'purchasePriceForOneForOne',
// // //             args: [buyAmount],
// // //             watch: true,
// // //         })
// // //     const { data: scaleFactorNumData,
// // //             isError: scaleFactorNumIsError,
// // //             isLoading: scaleFactorNumIsLoading } = useContractRead({
// // //                 addressOrName: contractConfig.contractAddress,
// // //                 contractInterface: contractConfig.contractABI,
// // //                 functionName: 'scaleFactorNum',
// // //                 watch: true,
// // //             })
    
// // //     const { data: scaleFactorDenData,
// // //             isError: scaleFactorDenIsError,
// // //             isLoading: scaleFactorDenIsLoading } = useContractRead({
// // //                 addressOrName: contractConfig.contractAddress,
// // //                 contractInterface: contractConfig.contractABI,
// // //                 functionName: 'scaleFactorDen',
// // //                 watch: true,
// // //             })

    
// // //     function getTimestampInSeconds() {
// // //         return Math.floor(Date.now() / 1000)
// // //     }

// // //     const [baseTokenURI, setBaseTokenURI] = useState<any>()
// // //     const [auctionable, setAuctionable] = useState<any>()
// // //     const [auctionStartTime, setAuctionStartTime] = useState<any>()
// // //     const [collectionSize, setCollectionSize] = useState<any>()
// // //     const [amountReservedForWhitelisted, setAmountReservedForWhitelisted] = useState<any>()
// // //     const [currentId, setCurrentId] = useState<any>()
// // //     const [halfLife, setHalfLife] = useState<any>()
// // //     const [initialPrice, setInitialPrice] = useState<any>()
// // //     const [priceForOne, setPriceForOne] = useState<any>()
// // //     const [purchasePriceForOneForOne, setpurchasePriceForOneForOne] = useState<any>()
// // //     const [scaleFactorNum, setScaleFactorNum] = useState<any>()
// // //     const [scaleFactorDen, setScaleFactorDen] = useState<any>()
// // //     const [cAddress, setContractAddress] = useState(contractAddress)
// // //     const [timestamp, setTimestamp] = useState<any>()

// // //     useEffect(() => {
// // //         setBaseTokenURI(baseTokenURIData)
// // //         setAuctionable(auctionableData)
// // //         setAuctionStartTime(auctionStartTimeData)
// // //         setCollectionSize(collectionSizeData)
// // //         setAmountReservedForWhitelisted(amountReservedForWhitelistedData)
// // //         setCurrentId(currentIdData)
// // //         setHalfLife(halfLifeData)
// // //         setInitialPrice(initialPriceData)
// // //         setPriceForOne(priceForOneData)
// // //         setpurchasePriceForOneForOne(purchasePriceForOneForOneData)
// // //         setScaleFactorNum(scaleFactorNumData)
// // //         setScaleFactorDen(scaleFactorDenData)
// // //         setContractAddress(contractAddress)
// // //         setTimestamp(getTimestampInSeconds())
// // //     }, [baseTokenURIData, auctionableData, auctionStartTimeData, collectionSizeData, amountReservedForWhitelistedData, currentIdData, halfLifeData, initialPriceData, priceForOneData, purchasePriceForOneForOneData, scaleFactorNumData, scaleFactorDenData, contractAddress])    

// // //     const [tokenid, setTokenId] = useState<any>(null);
// // //     const { address, isConnected } = useAccount();
// // //     const [numTokens, setNumTokens] = useState(1);



// // //     return (
// // //         <div className="text-blue-700">
// // //             <div className="font-bold text-xl"> Auction </div>
// // //             <div className="grid grid-cols-2">
// // //                 <div className="rounded-xl p-4 m-4 bg-gray-200 text-bold grid grid-cols-1">
// // //                     <div className="text-blue-400 font-bold text-xl m-4">On Auction</div>
// // //                         {/* <Pictures baseTokenURI={baseTokenURI} auctionable={Number(auctionable)} /> */}
// // //                     </div>
// // //                 <div>
// // //                     {/* <Infoblock info={"Purchase Price"} contractInfo={String((Number(priceForOne) / 10 ** 18).toFixed(14)).concat(" Ξ")} /> */}

                    
// // //                     <MintPanel />
// // //                     <div className="rounded-xl p-4 m-4 bg-gray-200 text-bold  gap-4">
// // //                     <div className="cols-span-3"><Infoblock info={"Contract Address"} contractInfo={cAddress} /></div>
// // //                     </div>
                    
// // //                     <div className="rounded-xl p-2 m-4 bg-gray-200 text-bold grid grid-cols-2 ">
                        
// // //                         <Infoblock info={"Collection Size"} contractInfo={Number(collectionSize)} />
// // //                         <Infoblock info={"Initial Price"} contractInfo={Number(auctionable) == 0 ? "No on-going auction" : String((Number(initialPrice) / 10 ** 18).toFixed(2)).concat(" Ξ")} />
// // //                         <Infoblock info={"Price for 1"} contractInfo={Number(auctionable) == 0 ? "No on-going auction" : String((Number(priceForOne) / 10 ** 18).toFixed(2)).concat(" Ξ")} />

// // //                         <Infoblock info={"Current Token Id"} contractInfo={Number(currentId)} />
// // //                         <Infoblock info={"Auction Start Time"} contractInfo={Number(auctionStartTime) / 10 ** 18} />
// // //                         <Infoblock info={"Time"} contractInfo={timestamp} />
// // //                         <Infoblock info={"Half life"} contractInfo={Number(auctionable) == 0 ? "No on-going auction" : String(Number(halfLife) / 10 ** 18).concat(" s")} />
// // //                         <Infoblock info={"Scale Factor"} contractInfo={Number(auctionable) == 0 ? "No on-going auction" : Number(scaleFactorNum) / Number(scaleFactorDen)} />
// // //                         <Infoblock info={"Tokens on Auction"} contractInfo={Number(auctionable)} />
// // //                         <Infoblock info={"Decay Factor"} contractInfo={Number(auctionable) == 0 ? "No on-going auction" : (Math.log(2) / (Number(halfLife) / 10 ** 18)).toFixed(8)} />

// // //                         <div className="rounded-xl bg-gray-200 text-bold grid grid-cols-2">
                        
// // //                         </div>
// // //                     </div>
// // //                     </div>
                
// // //             </div>
// // //         </div >
// // //     )
// // // }
// // // export default AuctionInfo
