import { Contract } from "ethers";
import { useEffect, useState } from "react"
import tokenContractAbi from "../abis/token_abi.json";
import { useWalletContext } from "../context/walletContext";

function useTokenData() {

    const { rpcProvider } = useWalletContext();



    const [name, setName] = useState(null);
    const [symbol, setSymbol] = useState(null);
    const [decimals, setDecimals] = useState(0);

    async function fetchTokenData() {

        const tokenContract = new Contract(
            process.env.REACT_APP_TOKEN_CONTRACT_ADRESS,
            tokenContractAbi,
            rpcProvider
        );

        try {
            const _name = await tokenContract.name();
            const _symbol = await tokenContract.symbol();
            const _decimals = await tokenContract.decimals();

            setName(_name.toString());
            setSymbol(_symbol.toString());
            setDecimals(Number(_decimals));

        } catch (error) {
            console.error("Error fetching Token data:", error);
        }
    }

    async function addTokenToWallet() {
        if (!window.ethereum) {
            alert("Browser Wallet not found. Please install it.");
            return;
        }

        // Check if token is already added
        const tokenKey = `token_added_${process.env.REACT_APP_TOKEN_CONTRACT_ADRESS}`;
        if (localStorage.getItem(tokenKey)) {
            console.log("Token already added. Skipping...");
            return false; // Exit early
        }

        try {
            const wasAdded = await window.ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: process.env.REACT_APP_TOKEN_CONTRACT_ADRESS,  // Replace with your token contract address
                        symbol: symbol,               // Token symbol (max 5 characters)
                        decimals: decimals,                  // Token decimals
                        image: "https://yourtokenlogo.com/logo.png" // Token logo URL (optional)
                    },
                },
            });

            if (wasAdded) {
                localStorage.setItem(tokenKey, "true"); // Save flag in localStorage
                console.log("Token was added to MetaMask!");
            } else {
                console.log("User rejected the token addition.");
            }
        } catch (error) {
            console.error("Error adding token:", error);
        }
    }


    return { name, symbol, decimals, addTokenToWallet, fetchTokenData }
}

export default useTokenData;
