import React from "react";
import "./energy__commitment-head.css"

const FeatureCarouselCards = (props) => {
  return (
    <div>
      <div className="feature__card mx-2 ">
      <img src={props.img} alt={props.title}/>
      </div>
      <p className="feature__title">{props.title}</p>
    </div>
  );
};

export default FeatureCarouselCards;
