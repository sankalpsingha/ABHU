import { configureStore } from "@reduxjs/toolkit";
import scanReducer from "./src/slices/scanSlice";

export const store = configureStore({
    reducer: {
        scan: scanReducer,
    }
})