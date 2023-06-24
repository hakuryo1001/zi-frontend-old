import { useContext } from 'react';
import { ContractContext } from '../contexts';


const ContractList = () => {
    const { contracts } = useContext(ContractContext);
    
    return (
        <div>
            <h2>Contract List</h2>
            <ul>
                {Object.keys(contracts).map((contractName) => (
                    <li key={contractName}>
                        <strong>{contractName}</strong>: {contracts[contractName].contractAddress}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContractList;
