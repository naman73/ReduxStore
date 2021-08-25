import React from "react";
// import classes from "./CartItem.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./CartItem.css";

export const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, qty, total, price, id } = props.item;
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title,
        price,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div className="item">
      <div className="cartItemHeader">
        <div className="cartItemH3">{title}</div>
        <div className="price">
          ₹{total.toFixed(2)} <span className="itemprice">₹{price}</span>
        </div>
      </div>
      <div className="details">
        <div className="quantity">
          <div>x{qty}</div>
        </div>
        <div className="actions">
          <button className="minus" onClick={removeItemHandler}>
            -
          </button>
          <button className="add" onClick={addItemHandler}>
            +
          </button>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default CartItem;
