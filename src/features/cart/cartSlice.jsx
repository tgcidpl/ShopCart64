import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addedToCart(state, action){
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    }
  }
})

export const {addedToCart} = cartSlice.actions

export default cartSlice.reducer

