import React from "react";
import { useDispatch } from "react-redux";
import { fillDetailsActions } from "../../store/fillDetails-slice";
import "./DetailsButton.css";

export const DetailsButton = () => {
  const dispatch = useDispatch();
  const detailsHandler = () => {
    dispatch(
      fillDetailsActions.addToDetails({
        title: "",
        description: "",
      })
    );
  };
  return (
    <button className="detailsPageButton" onClick={detailsHandler}>
      ←
    </button>
  );
};

export default DetailsButton;
