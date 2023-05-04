import { configureStore } from "@reduxjs/toolkit";
import itemListReducer from '../features/itemList/itemListSlice'

export const store = configureStore({
  reducer: {
    itemList: itemListReducer
  }
})