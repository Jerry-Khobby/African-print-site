import { createSlice } from "@reduxjs/toolkit";


const initialState={
    selectedProduct:null,
};


const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        selectedProduct:(state,action)=>{
            state.selectedProduct = action.payload;
        }
    }
});



export const { selectProduct } = productSlice.actions;
/* export const selectedProductSelector = (state) => state.product.selectedProduct; */

export default productSlice.reducer;