import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
    const walletState = JSON.parse(localStorage.getItem("walletState"));

    const [isConnected, setIsConnected] = useState(walletState?.isConnected || false);
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [walletAddress, setWalletAddress] = useState(walletState?.walletAddress || null);

    // Automatically check if user was connected before
    useEffect(() => {
        const walletState = JSON.parse(localStorage.getItem("walletState"));

        if (window.ethereum && walletState.isConnected && walletState.savedAddress) {
            connectWallet(); // Reconnect wallet
        }
    }, []);

    const connectWallet = async () => {
        if (!window.ethereum) {
            alert("MetaMask not found. Please install it.");
            return;
        }

        try {
            const web3Provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await web3Provider.getSigner();
            const address = await signer.getAddress();

            setIsConnected(true);
            setProvider(web3Provider);
            setSigner(signer);
            setWalletAddress(address);

            localStorage.setItem("walletState", JSON.stringify({
                isConnected: true,
                savedAddress: address,
            }));
        } catch (error) {
            console.error("Wallet connection failed:", error);
        }
    };

    const disconnectWallet = () => {
        //
    }

    return (
        <WalletContext.Provider value={{ isConnected, provider, signer, walletAddress, connectWallet, disconnectWallet }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => useContext(WalletContext);
