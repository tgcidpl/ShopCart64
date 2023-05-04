import { createSlice } from "@reduxjs/toolkit"

const initialState = [{id: 1, name:"shoe", price: 11.11, quantity: 3},{id: 2, name:"shirt", price: 22.22, quantity: 4} ]

export const cartSlice = createSlice({
  name:'cart',
  lastId: 0,
  initialState,
  reducers: {
    itemAdded: (state, action) => {
      state.push({
        id: ++lastId,
      name: action.payload.name,
      price: action.payload.price,
      quantity: action.payload.quantity
      })
    },
    itemRemoved: (state, action) => {
      const itemToRemove = state.find(item => item.id === action.payload)
      state.filter(itemToRemove)
    }
  }
})

export const {itemAdded, itemRemoved} = cartSlice.actions

export default cartSlice.reducer