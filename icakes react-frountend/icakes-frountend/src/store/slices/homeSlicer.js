import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productQuickView: false
}

const quickViewSlice = createSlice({
    name: 'quickView',
    initialState,
    reducers: {
        setQuickView: (state, action) => {
            console.log(action);
            state.productQuickView = action.payload;
        }
    }
});

export const { setQuickView } = quickViewSlice.actions;
export default quickViewSlice.reducer;
