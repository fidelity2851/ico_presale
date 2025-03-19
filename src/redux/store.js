import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./walletSlice"

const store = configureStore({
    reducer: {
        wallet: walletReducer,
    }
});

// Export Store
export default store;