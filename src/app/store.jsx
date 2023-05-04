import { configureStore } from "@reduxjs/toolkit";
import itemListReducer from '../features/itemList/itemListSlice'
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    itemList: itemListReducer,
    cart: cartReducer
  }
})