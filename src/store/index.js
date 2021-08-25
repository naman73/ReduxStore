import { configureStore } from "@reduxjs/toolkit";
import displayCartSlice from "./displayCart-slice";
import cartSlice from "./cart-slice";
// import detailsSlice from "./details-slice";
import fillDetailsSlice from "./fillDetails-slice";
import renderProductsSlice from "./renderProducts-slice";
import checkOutSlice from "./checkOut-slice";
// import confirmationSlice from "./confirmation-slice";

const store = configureStore({
  reducer: {
    displayCart: displayCartSlice.reducer,
    updateCart: cartSlice.reducer,
    // displayDetails: detailsSlice.reducer,
    updateDetails: fillDetailsSlice.reducer,
    updateRenderProducts: renderProductsSlice.reducer,
    updateCheckOut: checkOutSlice.reducer,
    // updateConfirmation: confirmationSlice.reducer,
  },
});

export default store;
