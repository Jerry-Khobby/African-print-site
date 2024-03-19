import { createSlice } from "@reduxjs/toolkit";


const initialState={
    selectedProduct: JSON.parse(localStorage.getItem("selectedProduct")) || null,
};


export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        selectedProduct:(state,action)=>{
            state.selectedProduct = action.payload;
            localStorage.setItem("selectedProduct", JSON.stringify(action.payload));
        }
    }
});



export const { selectedProduct } = productSlice.actions;
export default productSlice.reducer;