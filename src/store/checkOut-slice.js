import { createSlice } from "@reduxjs/toolkit";

const checkOutSlice = createSlice({
  name: "checkOutPage",
  initialState: {
    clientName: "",
    email: "",
    checkOutVisible: false,
  },
  reducers: {
    addNewClient(state, action) {
      const newClient = action.payload;
      state.name = newClient.name;
      state.email = newClient.email;
      // state.checkOutVisible = !state.checkOutVisible;
    },

    toggleCheckOutPage(state, action) {
      state.checkOutVisible = !state.checkOutVisible;
    },
  },
});

export const checkOutActions = checkOutSlice.actions;
export default checkOutSlice;

// import { createSlice } from "@reduxjs/toolkit";

// const confirmationSlice = createSlice({
//   name: "confirmationPage",
//   initialState: {
//     title: "",
//     description: "",
//     image: "",
//     confirmationVisible: true,
//   },
//   reducers: {
//     toggleConfirmation(state, action) {
//         const newDetails = action.payload;
//         state.title = newDetails.title;
//         state.description = newDetails.description;
//       state.confirmationVisible = !state.confirmationVisible;
//     },
//   },
// });

// export const confirmationActions = confirmationSlice.actions;
// export default confirmationSlice;
