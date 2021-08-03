import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scan: null,
};

export const scanSlice = createSlice({
    name: 'scan',
    initialState,
    reducers: {
        setScan: (state, action) => {
            state.scan = action.payload;
        },
    },
});

export const { setScan } = scanSlice.actions;

export const selectScan = (state) => state.scan.scan;

export default scanSlice.reducer;