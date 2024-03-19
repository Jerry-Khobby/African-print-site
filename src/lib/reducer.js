import { createSlice } from "@reduxjs/toolkit";


const initialState={
    selectedProduct:null,
};


export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        selectedProduct:(state,action)=>{
            state.selectedProduct = action.payload;
        }
    }
});



export const { selectedProduct } = productSlice.actions;
export default productSlice.reducer;