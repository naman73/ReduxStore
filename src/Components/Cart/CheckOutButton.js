import React from "react";
import "./CheckOutButton.css";
import { useDispatch } from "react-redux";
import { checkOutActions } from "../../store/checkOut-slice";

export const CheckOutButton = () => {
  const dispatch = useDispatch();
  const toggleCheckOutPagehandler = () => {
    dispatch(checkOutActions.toggleCheckOutPage());
  };
  return (
    <button onClick={toggleCheckOutPagehandler} className="checkoutButton">
      Checkout
    </button>
  );
};

export default CheckOutButton;
