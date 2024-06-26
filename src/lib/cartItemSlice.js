import { createSlice } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
  cartItems: [], // Each cart item should have id, name, image, price, and quantity.
  searchItem:null,
  notification:true, // this to help me display a green background light 
  message:'',
  cashAmount:0, // I will have to create a new for the subtotal amount gotten 


};

// Load cart data from localStorage if available
const loadCartFromStorage = () => {
  // Check if localStorage is available (only execute in the browser)
  if (typeof window !== 'undefined') {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : initialState;
  }
  return initialState;
};

// Create a cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart: (state, action) => {
      const { id, name, group, price, imageUrl, description } = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        // If the item is already in the cart, do nothing (or update other properties if needed)
        // In this case, we'll just return the state without changing anything
        existingItem.quantity++;
      } else {
        // If the item is not in the cart, add it with a quantity of 0
        state.notification=true;
        state.message="Product added to cart successfully";
        state.cartItems.push({
          id,
          name,
          group,
          price,
          quantity: 1, // Set initial quantity to 0
          imageUrl,
          description,
        });
       
      }
      // Update localStorage (only in the browser)
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      
      if (item) {
        // Increase quantity by 1
        item.quantity++;
      }

      // Update localStorage (only in the browser)
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      
      if (item && item.quantity > 0) {
        // Decrease quantity by 1, but not below 0
        item.quantity--;
        if(item.quantity===0){
          state.cartItems=state.cartItems.filter((item)=>item.id!==id);
          state.notification=true;
          state.message="Product removed from cart successfully";
        }
      }
      // Update localStorage (only in the browser)
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    removeItem:(state,action)=>{
      const {id}=action.payload;
      const item=state.cartItems.find((item)=>item.id===id);
      if(item){
        state.cartItems=state.cartItems.filter((item)=>item.id!==id);
        state.notification=true;
        state.message="Product removed from cart successfully";
      }
      if(typeof window !=='undefined'){
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    setSearchItem:(state,action)=>{
      state.searchItem=action.payload;
    },
    hideNotification: (state) => {
      state.notification=false;
      state.message=" ";
    },
    setSubtotal:(state,action)=>{ // New action to set the subtotal 
      state.cashAmount=action.payload;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity,removeItem,setSearchItem,hideNotification,setSubtotal } = cartSlice.actions;
export default cartSlice.reducer;
