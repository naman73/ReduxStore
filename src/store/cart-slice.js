import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    totalCost: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const alreadyInCart = state.items.find((item) => item.id === newItem.id);
      state.totalQty++;
      state.totalCost += newItem.price;
      if (!alreadyInCart) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
        });
      } else {
        alreadyInCart.qty++;
        alreadyInCart.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const alreadyInCart = state.items.find((item) => item.id === id);
      state.totalQty--;
      if (alreadyInCart.qty === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        alreadyInCart.qty--;
        alreadyInCart.totalPrice =
          alreadyInCart.totalPrice - alreadyInCart.price;
      }
      state.totalCost -= alreadyInCart.price;
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
