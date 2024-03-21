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
        increaseQuantity: (state, action) => {
            const { id } = action.payload;
            const productToUpdate = state.selectedProduct.find(item => item.id === id);
            if (productToUpdate) {
                productToUpdate.quantity += 1;
                // Update localStorage
                localStorage.setItem("selectedProduct", JSON.stringify(state.selectedProduct));
            }
        },
        decreaseQuantity: (state, action) => {
            const { id } = action.payload;
            const productToUpdate = state.selectedProduct.find(item => item.id === id);
            if (productToUpdate && productToUpdate.quantity > 0) {
                productToUpdate.quantity -= 1;
                // Update localStorage
                localStorage.setItem("selectedProduct", JSON.stringify(state.selectedProduct));
            }
        },
    },
});

export const { selectedProduct, increaseQuantity, decreaseQuantity } = productSlice.actions;
export default productSlice.reducer;
