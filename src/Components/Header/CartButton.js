import React from "react";
import "./CartButton.css";
import { useDispatch, useSelector } from "react-redux";
import { displayCartActions } from "../../store/displayCart-slice";

export const CartButton = () => {
  const cartQty = useSelector((state) => state.updateCart.totalQty);
  const dispatch = useDispatch();
  const toggleCartDisplayHandler = () => {
    dispatch(displayCartActions.toggleDisplay());
  };

  return (
    <button onClick={toggleCartDisplayHandler} className="navButton">
      <span className="btnName">Cart</span>
      <span className="btnNotif">{cartQty}</span>
    </button>
  );
};

export default CartButton;
