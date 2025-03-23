import { useState, useEffect } from "react";
import { Contract } from "ethers";
import ICO_ContractAbi from "../abis/ico_abi.json";
import { useWalletContext } from "../context/walletContext";

function useICOData() {
    const { rpcProvider, signer } = useWalletContext();
    const [contract, setContract] = useState(null);


    const [amountRaised, setAmountRaised] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [currentStage, setCurrentStage] = useState(0);
    const [tokenPurchased, setTokenPurchased] = useState(0);
    const [purchasedLimit, setPurchasedLimit] = useState(0);
    const [salesStage, setSalesStage] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isFinalized, setIsFinalized] = useState(null);

    useEffect(() => {
        const icoContract = new Contract(
            process.env.REACT_APP_ICO_CONTRACT_ADRESS,
            ICO_ContractAbi,
            rpcProvider
        );
        setContract(icoContract);
    }, []);

    useEffect(() => {
        if (!contract) return;

        async function fetchICOData() {
            try {
                const amount = await contract.totalAmountRaisedInUSD();
                const start = await contract.startTime();
                const end = await contract.endTime();
                const stage = await contract.currentStage();
                // const purchased = await contract.tokenPurchased();
                const limit = await contract.maxPurchaseLimit();
                const sales = await contract.saleStages(stage);
                const paused = await contract.paused();
                const finalized = await contract.isFinalized();

                setAmountRaised(amount.toString());
                setStartTime(start.toString());
                setEndTime(end.toString());
                setCurrentStage(stage.toString());
                // setTokenPurchased(purchased.toString());
                setPurchasedLimit(limit.toString());
                setSalesStage(sales);
                setIsPaused(paused);
                setIsFinalized(finalized);
            } catch (error) {
                console.error("Error fetching ICO data:", error);
            }
        }

        fetchICOData();
    }, [contract]);





    return { amountRaised, startTime, endTime, currentStage, tokenPurchased, purchasedLimit, salesStage, isPaused, isFinalized };
};

export default useICOData;
