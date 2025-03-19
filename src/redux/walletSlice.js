import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";

// Function to load initial state from localStorage
const loadState = () => {
    const defaultState = {
        isConnected: false,
        walletAddress: null,
        provider: null,
        signer: null,
        chainId: null,
    }
    try {
        const serializedState = localStorage.getItem("walletState");

        return {
            ...serializedState,
            provider: null,
            signer: null,
            chainId: null,
        }
    } catch (e) {
        return defaultState;
    }
}

// Function to save state to localStorage
const saveState = (state) => {
    try {
        localStorage.setItem("walletState", JSON.stringify(state));
    } catch (e) {
        console.error("Could not save state", e);
    }
};

// Async thunk to handle wallet connection
const connectWallet = createAsyncThunk("wallet/connectWallet", async (_, { rejectWithValue }) => {
    try {
        if (window.ethereum) {
            try {
                const rpcProvider = new ethers.JsonRpcProvider(process.env.INFURA_RPC_ENDPOINT)
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();

                console.log(signer);

                return { provider: rpcProvider, signer: signer, address: signer.address, }; // Only store serializable data
            } catch (error) {
                console.error("Wallet connection failed:", error);
                throw error;
            }
        } else {
            alert("MetaMask not found. Please install it.");
        }

        return { provider: null, signer: null, address: null, };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Creat Wallet Slice
const walletSlice = createSlice({
    name: "wallet",
    initialState: {
        isConnected: false,
        walletAddress: null,
        provider: null,
        signer: null,
        chainId: null,
    },
    reducers: {
        // connectWallet: async (state) => {
        //     if (window.ethereum) {
        //         try {
        //             const rpcProvider = new ethers.JsonRpcProvider(process.env.INFURA_RPC_ENDPOINT)
        //             const provider = new ethers.BrowserProvider(window.ethereum);
        //             const signer = await provider.getSigner();

        //             console.log(signer);

        //             state.isConnected = true;
        //             state.provider = rpcProvider;
        //             state.signer = signer;
        //             state.walletAddress = signer.address;

        //             saveState(state);
        //         } catch (error) {
        //             console.error("Wallet connection failed:", error);
        //         }
        //     } else {
        //         alert("MetaMask not found. Please install it.");
        //     }
        // },
        disconnectWallet: (state) => {
            state.isConnected = false;
            state.walletAddress = null;
            state.provider = null;
            state.signer = null;
            state.chainId = null;

            saveState(state); // Clear state in localStorage
        },
        switchNetwork: (state) => {

            saveState(state);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(connectWallet.pending, (state) => {
                state.status = "loading";
            })
            .addCase(connectWallet.fulfilled, (state, action) => {
                state.isConnected = true;
                state.provider = action.payload.provider;
                state.signer = action.payload.signer;
                state.walletAddress = action.payload.address;

                saveState({
                    isConnected: true,
                    walletAddress: action.payload.address,
                });
            })
            .addCase(connectWallet.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

// Export Actions
export { connectWallet };
export const { disconnectWallet } = walletSlice.actions;

// Export Reducer
export default walletSlice.reducer;