import React, { useEffect } from "react";
import Product from "./Product";
import "./ProductPage.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { renderProductsActions } from "../../store/renderProducts-slice";

export const ProductPage = () => {
  const products = useSelector(
    (state) => state.updateRenderProducts.renderedProductsArray
  );

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    // console.log(response.data);
    dispatch(renderProductsActions.renderProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log("PRODUCTS:", products);
  return (
    <div className="productPageContainer">
      <Product />
    </div>
  );
};

export default ProductPage;
