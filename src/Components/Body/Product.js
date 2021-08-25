import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
// import { detailsActions } from "../../store/details-slice";
import { fillDetailsActions } from "../../store/fillDetails-slice";
import { useSelector } from "react-redux";

export const Product = () => {
  const products = useSelector(
    (state) => state.updateRenderProducts.renderedProductsArray
  );
  const dispatch = useDispatch();

  const renderList = products.map((product) => {
    const { id, title, price, image, description } = product;
    const addToCartHandler = () => {
      dispatch(
        cartActions.addItemToCart({
          id,
          title,
          price,
        })
      );
    };

    const detailsHandler = () => {
      dispatch(
        fillDetailsActions.addToDetails({
          title,
          description,
          image,
        })
      );
    };
    return (
      <div>
        <div className="productContainer" key={id}>
          <div className="productBody">
            <div className="productImage">
              <img src={image} alt={title} />
            </div>
            <div className="productHeading">
              <h2>{title}</h2>
              <hr />
            </div>
            <div className="productFooter">
              ₹{price.toFixed(2)}
              <span>
                <button onClick={detailsHandler} className="detailsButton">
                  View
                </button>
                <button onClick={addToCartHandler} className="productButton">
                  Add to Cart
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default Product;
