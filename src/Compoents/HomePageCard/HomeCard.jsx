import React from "react";
import { Link } from "react-router-dom";
import "./HomePageCard.css";
const HomeCard = () => {
  return (
    <div className="Home__Card p-3">
      <Link>
        <p>
          Press Release <br /> <span>january 9,2023</span>
        </p>
        <h6>
          ASPS Names Ganesh Ramaswamy as Executive Vice President of Industrial
          & Energy Technology
        </h6>
      </Link>
    </div>
  );
};

export default HomeCard;
