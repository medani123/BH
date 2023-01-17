import React from "react";
import "./HydrogenTechnologies.css";

import {
  SectionTwo,
  EnergyCommitmentHead,
  EnergyCommitmentBody,
  EnergyCommitmentCounters,
  ExpertiseCards,
  FeatureCarousel,
  ResourceCarousel,
  EnergyTransitionHead,
  ChallengeCards,
  FrameworkCards,
} from "../../Compoents";

function HydrogenTechnologies() {
  return (
    <>
      <div className="energy__head">
        <EnergyTransitionHead />
      </div>
      <div className="Energy__About my-5">
        <SectionTwo />
      </div>
      <div className="ChallengesA">
        <ChallengeCards />
      </div>
      <div className="Energy__commitment">
        <EnergyCommitmentHead />
        <EnergyCommitmentBody />
        <EnergyCommitmentCounters />
      </div>
      <div className="ChallengesA">
        <FrameworkCards />
      </div>
      <div className="Energy__Expertise ">
        <ExpertiseCards />
      </div>
      <div className="Energy__Feature-carousel pt-5">
        <FeatureCarousel />
      </div>
      <div className="Energy__Resource-carousel pt-5">
        <ResourceCarousel />
      </div>
    </>
  );
}

export default HydrogenTechnologies;
