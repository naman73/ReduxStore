import React from "react";
import DetailsButton from "./DetailsButton";
import { useSelector } from "react-redux";
import "./DetailsPage.css";

export const DetailPage = (props) => {
  const detailTitle = useSelector((state) => state.updateDetails.title);
  const detailDescription = useSelector(
    (state) => state.updateDetails.description
  );
  const detailImage = useSelector((state) => state.updateDetails.image);

  return (
    <div className="detailsContainer">
      <h1 className="detailsPageHeader">{detailTitle}</h1>
      <div className="detailsBodyContainer">
        <img src={detailImage} alt={detailTitle} />
        <p className="detailsPageDescription">{detailDescription}</p>
      </div>
      <div className="detailsPageButtonContainer">
        <DetailsButton />
      </div>
    </div>
  );
};

export default DetailPage;
