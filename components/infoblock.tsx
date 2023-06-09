const Infoblock = ({ info, contractInfo }: any) => {
    return (
        
        <div className="rounded-xl p-4 m-4 bg-gray-100 text-bold grid grid-cols-1">
            <div className="text-blue-400 text-base">{info} </div>
            <div className="text-2xl">{contractInfo}</div>
        </div>
    )
}

export default Infoblock