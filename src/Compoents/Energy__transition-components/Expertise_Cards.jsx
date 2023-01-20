import React from "react";
import "./energy__commitment-head.css";
import { ExpertiseCard } from "./../index";
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8 } from "../../constant";

function ExpertiseCards() {
  return (
    <>
      <section className="cards-container ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="cards-head text-center">
                <div className="hr mb-3 mt-5" />
                <p></p>
                <h2>Learn more about our energy technology and services</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <ExpertiseCard
                CardImg={Img1}
                CardTitle="Hydrogen technologies"
                Description="Advanced technologies to transform hydrogen into a significant alternative energy source.
                "
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <ExpertiseCard
                CardImg={Img2}
                CardTitle="Carbon capture, use, and storage"
                Description="A suite of technologies to capture, process, store and monitor CO2 emissions produced from fossil fuels.
                "
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <ExpertiseCard
                CardImg={Img3}
                CardTitle="Geothermal solutions"
                Description="Advanced technology solutions to deliver geothermal projects for direct use or renewable power generation.
                "
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <ExpertiseCard
                CardImg={Img4}
                CardTitle="Emissions management"
                Description="Reduce methane venting, fugitives and flaring where they happen most.
                "
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <ExpertiseCard
                CardImg={Img5}
                CardTitle="AI by BakerHughesC3.ai"
                Description="BHC3 simplifies the development and delivery of enterprise-scale AI to energy operations.
                "
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <ExpertiseCard
                CardImg={Img6}
                CardTitle="Remote operations"
                Description="Deploying digital operations, monitoring and testing capabilities to securely serve critical industries.
                "
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <ExpertiseCard
                CardImg={Img7}
                CardTitle="High efficiency gas turbines"
                Description="Industry-leading gas turbine technologies for mechanical drive and power generation.
                "
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <ExpertiseCard
                CardImg={Img8}
                CardTitle="Asset management"
                Description="Transform operations with analytics and automation for more with less impact.
                "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExpertiseCards;
