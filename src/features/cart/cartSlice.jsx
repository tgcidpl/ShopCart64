import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addedToCart(state, action){
      state.push(action.payload)
    }
  }
})

export const {addedToCart} = cartSlice.actions

export default cartSlice.reducer

