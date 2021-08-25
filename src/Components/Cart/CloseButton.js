import React from "react";
import "./CloseButton.css";
import { useDispatch } from "react-redux";
import { displayCartActions } from "../../store/displayCart-slice";

export const CloseButton = () => {
  const dispatch = useDispatch();
  const toggleCartDisplayHandler = () => {
    dispatch(displayCartActions.toggleDisplay());
  };
  return (
    <div className="closeBtnContainer">
      <button onClick={toggleCartDisplayHandler} className="closeButton">
        X
      </button>
    </div>
  );
};

export default CloseButton;
