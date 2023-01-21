import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="container">
        <div className="cards">
          <img src={props.img} alt={props.title} />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
