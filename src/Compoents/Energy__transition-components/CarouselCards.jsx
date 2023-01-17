import React from "react";
import "./energy__commitment-head.css"

const CarouselCards = (props) => {
  return (
    <div>
      <div className="container mx-2 ">
        <div className="cards">
          <img src={props.img} alt={props.title} className="img-fluid mb-3" />
          <div className="hr mb-1">{props.greenBorder}</div>
          <p className="card__title">{props.title}</p>
          <span className="date">{props.date}</span>
          <p className="feature__about">{props.about}</p>
          <p className="card__description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCards;
