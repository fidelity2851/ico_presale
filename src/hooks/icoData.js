import { useState } from "react";
import { useWalletContext } from "../context/walletContext";

function useICOData() {
    const { contract } = useWalletContext();
    // const [contract, setContract] = useState(null);


    const [amountRaised, setAmountRaised] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [currentStage, setCurrentStage] = useState(0);
    const [tokenPurchased,] = useState(0);
    const [purchasedLimit, setPurchasedLimit] = useState(0);
    const [salesStage, setSalesStage] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isFinalized, setIsFinalized] = useState(null);

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




    return { amountRaised, startTime, endTime, currentStage, tokenPurchased, purchasedLimit, salesStage, isPaused, isFinalized, fetchICOData };
};

export default useICOData;
