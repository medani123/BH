import React from "react";
import "./energy__commitment-head.css";
import { HomeSectionTwo } from "../../constant";
import GetAppIcon from "@material-ui/icons/GetApp";

function SectionTwo() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="sectionTwo-text mt-5">
              <hr />
              <h3>
                Delivering value along the <br />
                supply chain to power progress for the business.
              </h3>
              <p className="mt-3">
                At Supply Chain Management, our aim is to add value for Arabian
                Summit Petroleum Services Company and its customers and clients.
                Our actions are consistently based on striving for productivity,
                quality, availability and digitalization. Together with our
                suppliers, we rely on a competitive and transparent supply
                chain, which we develop to ultimately generate affordable clean
                energy. We aim to create sustainable diversity & safety for our
                people and for the people in our supply chain.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-fluid mt-2  HomeSectionTwo ">
              <img src={HomeSectionTwo} alt="" className="w-100 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
