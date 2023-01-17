import React from "react";
import "./Bekar__home-comp.css";

import HeroSecComp from "../Hero__Sec-component";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { videoTwo } from "../../constant/index";

const BekarHomeHead = () => {
  return (
    <div>
      <HeroSecComp
        video={videoTwo}
        title={
          <span>
            We are ASPS,
            <br /> an energy technology company
          </span>
        }
        desc="We take energy forward - making it safer, cleaner, and more efficient for people and the planet."
        linkIcon={<ArrowDownwardIcon />}
        link="Explore"
      />
    </div>
  );
};

export default BekarHomeHead;
