import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addedToCart(state, action) {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart && itemInCart.quantity === itemInCart.maxQuantity) return;
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementedQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementedQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removedFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addedToCart,
  incrementedQuantity,
  decrementedQuantity,
  removedFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
