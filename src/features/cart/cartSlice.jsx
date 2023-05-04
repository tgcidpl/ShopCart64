import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [{id: 1, name:"testInitState", price: 11.11, quantity: 1}],
  reducers: {
    addedToCart(state, action){
      state.push(action.payload)
    }
  }
})

export const {addedToCart} = cartSlice.actions

export default cartSlice.reducer

