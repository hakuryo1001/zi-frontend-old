import { useState, useEffect } from "react";
import { useContractRead, useAccount, usePrepareContractWrite, useContractWrite } from "wagmi";
import Infoblock from "./infoblock";
import contractConfig from "../contractConfig";
const contractAddress = contractConfig.contractAddress;
const contractABI = contractConfig.contractABI;

const styles = {
    button: "text-gray-900 bg-white hover:bg-gray-100 border-2 border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 mr-2 mb-2 shadow  shadow-gray-400 m-4",
    input: "block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center",
}

const MintPanel = () => {
    
    const [buyAmount, setBuyAmount] = useState<string>();
    const { data: auctionableData, isError: auctionableError, isLoading: auctionableIsLoading } = useContractRead({
        addressOrName: contractAddress,
        contractInterface: contractABI,
        functionName: 'auctionable',
    })
    const { data: buyPriceData,
        isError: buyPriceIsError,
        isLoading: buyPriceIsLoading } = useContractRead({
            addressOrName: contractConfig.contractAddress,
            contractInterface: contractConfig.contractABI,
            functionName: 'purchasePrice',
            args: [buyAmount],
            watch: true,
        });
    const [buyPrice, setBuyPrice] = useState<any>(0)
    const [auctionable, setAuctionable] = useState<any>(0)

    useEffect(() => {
        setBuyPrice(buyPriceData)
        setAuctionable(auctionableData)
    }, [])

    const { address, isConnected } = useAccount();
    const { config: purchaseTokenConfig } = usePrepareContractWrite({
        addressOrName: contractAddress,
        contractInterface: contractABI,
        functionName: "purchaseTokens",
        args: [buyAmount, address],

    })
    const { data: purchaseTokenData,
        isLoading: purchaseTokenIsLoading,
        isSuccess: purchaseTokenIsSuccess,
        write } = useContractWrite(purchaseTokenConfig);

    return (

        <div className="rounded-xl grow p-4 m-4 bg-gray-200 text-bold flex flex-col">
            {/* <Infoblock info={"Purchase Price"} contractInfo={String((Number(buyPriceData) / 10 ** 18).toFixed(14)).concat(" Ξ")} /> */}
            <div className=" p-4 m-2">
            
                <div className="text-blue-400 font-bold text-xl">Purchase Price </div>
                <div className="items-center" >

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-lg">Buy Amount : {buyAmount}</label>
                    <input type="range" min="0" step="1" max={auctionable} value={buyAmount}
                        onChange={(e) => setBuyAmount(e.target.value)}
                        className="w-2/3 h-2 bg-blue-200 appearance-none cursor-pointer" />
                    <div>
                        {/* <div className="text-blue-600 text-xl">{String((Number(buyPriceData) / 10 ** 18).toFixed(4)).concat(" Ξ")}</div> */}
                        <Infoblock info={"Purchase Price"} contractInfo={String((Number(buyPriceData) / 10 ** 18).toFixed(14)).concat(" Ξ")} /> 

                    </div >
                </div>

            </div>
            <div className="text-2xl grow  grid grid-cols-1 ">
                <div className="grid grid-cols-1 content-center">

                    <div className=" m-4 p-2">
                        <button disabled={!write} onClick={() => write?.()} className={styles.button}>Mint</button>
                        {/* {    
                            (buyPriceData ?
                                <div> {String((Number(buyPriceData) / 10 ** 18).toFixed(4)).concat(" Ξ")}
                                    <button disabled={!write} onClick={() => write?.()} className={styles.button}>Mint</button>
                                </div>
                                : "No on-going Auction")} */}
                    </div>
                </div>

            </div>

        </div>

    )
}

export default MintPanel