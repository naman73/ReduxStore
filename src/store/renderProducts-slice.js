import { createSlice } from "@reduxjs/toolkit";

const renderProductsSlice = createSlice({
  name: "productRenderPage",
  initialState: {
    renderedProductsArray: [
      //   {
      //     id: 1,
      //     price: 6,
      //     title: "My first product",
      //     description: "djh djhdjhd dg jsjs",
      //   },
      //   {
      //     id: 2,
      //     price: 5,
      //     title: "My second product",
      //     description: "jd sjhjh aj dj a",
      //   },
    ],
  },
  reducers: {
    renderProducts(state, { type, payload }) {
      return {
        ...state,
        renderedProductsArray: payload /*[action.payload] */,
      };
    },
  },
});

export default renderProductsSlice;
export const renderProductsActions = renderProductsSlice.actions;
