import { createSlice } from "@reduxjs/toolkit";


const initialState={
    selectedProduct:null,
};


const productSlice=createSlice({
    name:'eachProduct',
    initialState,
    reducers:{
        selectedProduct:(state,action)=>{
            state.selectedProduct = action.payload;
        }
    }
});



export const { selectProduct } = productSlice.actions;
export default productSlice.reducer;