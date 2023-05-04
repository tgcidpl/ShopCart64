import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [{id: nanoid(), name:"shoe", price: 11.11, quantity: 3},{id: nanoid(), name:"shirt", price: 22.22, quantity: 4} ]

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers: {
    newItemAdded(state, action) {
  state.push(action.payload)
}

    // itemRemoved: (state, action) => {
    //   const itemToRemove = state.find(item => item.id === action.payload)
    //   state.filter(itemToRemove)
  }
})

export const {newItemAdded} = cartSlice.actions

export default cartSlice.reducer