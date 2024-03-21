import { createSlice } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
  cartItems: [], // Each cart item should have id, name, image, price, and quantity.
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
      const { id, name, group, price, imageUrl, description, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        // If the item is already in the cart, update the quantity
        existingItem.quantity++;
      } else {
        // If the item is not in the cart, add it
        state.cartItems.push({
          id,
          name,
          group,
          price,
          quantity,
          imageUrl,
          description,
        });
      }
      // Update localStorage (only in the browser)
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
