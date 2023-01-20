import React from "react";
import "./energy__commitment-head.css";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { video } from "../../constant";

import HeroSecComp from "./../Hero__Sec-component";

const EnergyTransitionHead = (props) => {
  return (
    <div className="energy_head">
      <HeroSecComp
        video={video}
        title="Supply Chain"
        desc="Delivering value along the supply chain to power progress for the business."
        //linkIcon={<ArrowDownwardIcon />}
        //link="Explore"
      />
    </div>
  );
};

export default EnergyTransitionHead;
