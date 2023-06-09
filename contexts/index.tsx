// @ts-nocheck
import { Contract } from 'ethers';
import { createContext, useContext, useEffect, useState } from 'react'
import { useContract, useContractRead } from "wagmi";
import contractConfig from "../contractConfig/contractConfig";
import contractAddress from "../pages/api/contractAddress";
import contractABI from "../pages/api/contractABI";


import { useBlockNumber, useAccount } from 'wagmi';
const ContractContext = createContext<any>({})

import contractData from "../pages/api/contractData.json"

const ContractProvider = ({ children }: any) => {
    
    const contractAddress = contractConfig.contractAddress
    const contractABI = contractConfig.contractABI
    
    const { data: blockNumberData, isError: blockNumberIsError, isLoading: blockNumberIsLoading } = useBlockNumber({
        watch: true
    })

    const { address } = useAccount();

            

    return(
        <ContractContext.Provider value={{blockNumberData, address
            }}>
            {children}
        </ContractContext.Provider>
    )

}

export { ContractContext, ContractProvider }