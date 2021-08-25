import CartItem from "./CartItem";
import CloseButton from "./CloseButton";
import "./Cart.css";
import React from "react";
import { useSelector } from "react-redux";
import CheckOutButton from "./CheckOutButton";

export const Cart = (props) => {
  const cartItems = useSelector((state) => state.updateCart.items);
  const cartCost = useSelector((state) => state.updateCart.totalCost);
  return (
    <div className="cartContainer">
      <div className="cartHeader">
        <h1 className="cartHeading">Your Cart</h1>
        <CloseButton />
      </div>
      <hr />
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              qty: item.qty,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <hr />
      <div className="cartCost">
        <h2>{`Total: ₹${cartCost.toFixed(2)}`}</h2>
      </div>
      <hr />
      <div className="checkoutContainer">
        <CheckOutButton />
      </div>
    </div>
  );
};

export default Cart;
