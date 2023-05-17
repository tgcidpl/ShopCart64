import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import navbarReducer from "../features/navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    navbar: navbarReducer,
  },
});
