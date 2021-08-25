import { createSlice } from "@reduxjs/toolkit";

const fillDetailsSlice = createSlice({
  name: "fillDetailsPage",
  initialState: {
    title: "",
    description: "",
    image: "",
    detailsVisible: false,
  },
  reducers: {
    addToDetails(state, action) {
      const newDetails = action.payload;
      state.title = newDetails.title;
      state.description = newDetails.description;
      state.detailsVisible = !state.detailsVisible;
      state.image = newDetails.image;
    },
  },
});

export const fillDetailsActions = fillDetailsSlice.actions;
export default fillDetailsSlice;
