import { createSlice } from "@reduxjs/toolkit";

// initialDisplayCartState = { cartIsVisible: false };

const displayCartSlice = createSlice({
  name: "displayCart",
  initialState: { cartIsVisible: false },
  reducers: {
    toggleDisplay(state, action) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export default displayCartSlice;
export const displayCartActions = displayCartSlice.actions;
