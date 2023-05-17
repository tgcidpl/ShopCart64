import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    toggleCartOpen: false,
  },
  reducers: {
    toggleCartOpen: (state) => {
      state.toggleCartOpen = !state.toggleCartOpen;
    },
  },
});

export const { toggleCartOpen } = navbarSlice.actions;

export default navbarSlice.reducer;
