import React from "react";
import "./Careers.css";

const AboutCompany = () => {
  return (
    <>
      <div class="hero-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero ms-lg-5 ps-lg-2">
                <div className="hero__text ps-lg-1">
                  <h1 className="mb-5 about__head">Careers</h1>
                  <p className="about__para">
                    A Progressive Energy and Solutions Partner <br />
                    Enriching Lives for a Sustainable Future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row about__all-middle">
          <div className="col-md-5">
            <div className="about__dash mb-3">
              <div className="about__dash-line  me-3"></div>
              <div className="about__dast-text">Careers</div>
            </div>
          </div>

          <div className="col-md-8">
            <h5 className="about__description-middle mb-4 ">
              Bring your passion to Life
            </h5>
            <p>
              Passion is what makes progress possible. In Arabian SPSC
              environment you will achieve and take the opportunity to learn and
              getting the experience. Connect with us and share your passion
              today!{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid border_top">
        <div className="row">
          <div className="col-md-6">
            <div className="margin__left-find">
              <h2 className="my-4">
                <b>Want to find out more?</b>
              </h2>
              <p className="my-3 find__para">
                We have a team of experts ready to answer your <br /> questions
                and help you get what you need.{" "}
              </p>
              <strong>Email:</strong> info@arabiansps.com
              <div className="protect__button my-4"></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="find__img ">
              <img
                src="https://www.bakerhughes.com/sites/bakerhughes/files/styles/medium_2_1_2x_1920x951_/public/2019-09/Innovation%20and%20Ventures%20I10_0.jpg?itok=DhC198xX"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
