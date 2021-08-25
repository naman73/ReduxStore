import React from "react";
import "./CheckOut.css";
import { useDispatch } from "react-redux";
import { checkOutActions } from "../../store/checkOut-slice";
import { useState } from "react";

export const CheckOut = () => {
  const dispatch = useDispatch();

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredMail, setEnteredMail] = useState("");

  // const nameChangehandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const mailChangehandler = (event) => {
  //   setEnteredMail(event.target.value);
  // };

  const formHandler = (/*event*/) => {
    // event.preventDefault();
    // dispatch(
    //   checkOutActions.addNewClient({
    //     name: enteredName,
    //     mail: enteredMail,
    //   })
    // );
    // dispatch(confirmationActions.toggleConfirmation());
    dispatch(checkOutActions.toggleCheckOutPage());
  };

  // const toggleCheckouthandler = () => {
  //   dispatch(checkOutActions.toggleCheckOutPage());
  // };

  // const toggleConfirmation = (event) => {
  //   preventDefault(event);
  //   dispatch(confirmationActions.toggleConfirmation());
  // };

  return (
    <div>
      <div className="checkOutContainer">
        <h2>Your Order is Confirmed</h2>
        {/* <input
          onChange={nameChangehandler}
          type="text"
          placeholder="Enter your Name"
        ></input>
        <input
          onChange={mailChangehandler}
          type="email"
          placeholder="Enter your Email"
        ></input> */}
        {/* <input type="checkbox" name="m" /> */}
        <button className="checkOutPageBtn" onClick={formHandler}>
          Continue Shopping
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default CheckOut;
