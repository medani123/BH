import React from "react";
import "./AboutHealth.css";
import "../../container/AboutCompany.css";
function AboutBrands() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-5">
            <div className="img-fluid mt-2  HomeSectionTwo1 ">
              <img
                src="https://www.bakerhughes.com/sites/bakerhughes/files/styles/max_650x650/public/2019-09/Logoimage.png?itok=kQ0tdwvp"
                alt=""
              />
            </div>
          </div>
          <div className="col"></div>
          <div className="col-md-6 my-5">
            <div className="sectionTwo-text1  ">
              <div className="about__dash mb-3">
                <div className="about__dash-line  me-3"></div>
              </div>
              <div className="about__dast-text">
                <h4>
                  <b>Brand assets</b>
                </h4>
              </div>
              <h3 className="my-4">
                To download our logo suite and brand guidelines click
                <br /> below.
              </h3>
              <p className="mt-3">
                We believe in doing the right thing always. Our teams strive{" "}
                <br /> to make every day one with no injuries, accidents or harm
                to <br /> the environment.{" "}
              </p>
              <div className="protect__button my-4">
                <button
                  class="m-auto variable-button h6"
                  data-text="Download Brand Assets"
                  data-texthover="⇩"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutBrands;
