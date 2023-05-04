import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [{id: nanoid(), name:"shoe", price: 11.11, quantity: 3},{id: nanoid(), name:"shirt", price: 22.22, quantity: 4} ]

export const itemListSlice = createSlice({
  name:'itemList',
  initialState,
  reducers: {
    newItemAdded(state, action) {
  state.push(action.payload)
}
  }
})

export const {newItemAdded} = itemListSlice.actions

export default itemListSlice.reducer