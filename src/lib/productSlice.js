import { createSlice } from "@reduxjs/toolkit";

const getInitialSelectedProduct = () => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("selectedProduct")) {
        return JSON.parse(localStorage.getItem("selectedProduct"));
    }
    return null;
};

const initialState = {
    selectedProduct: getInitialSelectedProduct(), // Call the function to get the initial value
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        selectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
            if (typeof localStorage !== "undefined") {
                localStorage.setItem("selectedProduct", JSON.stringify(action.payload));
            }
        },
    },
});

export const { selectedProduct} = productSlice.actions;
export default productSlice.reducer;
