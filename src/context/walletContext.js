import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {



    const walletState = JSON.parse(localStorage.getItem("walletState"));
    const rpcProvider = new ethers.JsonRpcProvider(process.env.REACT_APP_ALCHEMY_RPC_ENDPOINT);

    const [isConnected, setIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState(null);

    const [signer, setSigner] = useState(null);

    const connectWallet = useCallback(async () => {
        if (!window.ethereum) {
            alert("Browser Wallet not found. Please install it.");
            return;
        }

        try {
            const web3Provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await web3Provider.getSigner();
            const address = await signer.getAddress();
            const network = await web3Provider.getNetwork();
            const chainId = Number(process.env.REACT_APP_CHAIN_ID);

            if (chainId !== Number(network.chainId)) {
                switchNetwork(chainId);
            }

            setIsConnected(true);
            setSigner(signer);
            setWalletAddress(address);

            localStorage.setItem("walletState", JSON.stringify({
                isConnected: true,
                savedAddress: address,
            }));
        } catch (error) {
            console.error("Wallet connection failed:", error);
        }
    }, []);




    async function switchNetwork(chainId) {
        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x" + chainId.toString(16) }], // Chain ID must be in HEX format
            });

            console.log("Network switched successfully!");
        } catch (error) {
            console.error("Error switching network:", error);
            // If network is not added, prompt to add it
            if (error.code === 4902) {
                console.error("Network not added yet!");
            }
        }
    }



    const disconnectWallet = () => {
        localStorage.removeItem("walletState");

        setIsConnected(false);
        setSigner(null);
        setWalletAddress(null);
    }

    // Automatically check if user was connected before
    useEffect(() => {
        if (window.ethereum && walletState?.isConnected && walletState?.savedAddress) {
            connectWallet(); // Reconnect wallet
        }
    }, [connectWallet, walletState?.isConnected, walletState?.savedAddress]);

    return (
        <WalletContext.Provider value={{ isConnected, rpcProvider, signer, walletAddress, connectWallet, disconnectWallet }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWalletContext = () => useContext(WalletContext);
