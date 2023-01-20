import React from "react";
import "./AboutCompany.css";

import AboutHealth from "../Compoents/Company/AboutHealth";

import AboutStories from "../Compoents/Company/AboutStories";

import SouthIcon from "@mui/icons-material/South";
import AboutBrands from "../Compoents/Company/AboutBrands";
import image01 from "../Images/Culture.png";

const AboutCompany = () => {
  return (
    <>
      <div class="hero-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero ms-lg-5 ps-lg-2">
                <div className="hero__text ps-lg-1">
                  <h1 className="mb-5 about__head">About Us</h1>
                  <p className="about__para">
                    We are the leading energy technology company.
                    <br />
                    We design, manufacture and service transformative
                    technologies to help take energy forward.
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
              <div className="about__dast-text">ABOUT US</div>
            </div>
          </div>

          <div className="col-md-8">
            <h3 className="about__description-middle mb-4 ">
              Arabian SPSC has the industry-leading technologies, solutions, and
              support necessary for a wide range of upstream technologies,
              downstream services and water-based applications, including
              dewatering, industrial systems.
            </h3>
          </div>

          <div className="button d-flex mb-5">
            <button type="button" class="btn btn-success about__button">
              <SouthIcon />
            </button>
            <p className="mt-3 ms-4">EXPLORE</p>
          </div>
        </div>
      </div>

      {/* <div className="about__bg-img">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="about__dash-line2 mb-5"></div>
              <div className="about__global-desc px-0 mb-4 mt-3">
                <h1 className=""> We are global</h1>
                <p className="mb-5">
                  But we're local too. With business conducted in more than 120
                  countries we work in partnership with our customers, wherever
                  they are, to deliver better outcomes. We are proud that our
                  people and our businesses are part of the fabric of the
                  communities in which they work.
                </p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4 about__global-achived">
              <div className="about-global-text px-5">
                <h1 className="mb-5">204</h1>
                <p>
                  We achieved 204 Perfect HSE Days in 2021. The Perfect HSE Day
                  means all employees go home safely to their families and the
                  environment is not harmed.
                </p>
              </div>
            </div>
            <div className="col-md-4 about__global-achived">
              <div className="about-global-text px-5">
                <h1 className="mb-5">120+</h1>
                <p>
                  We conduct business in 120+ countries worldwide. A company of
                  global scale with local know-how and commitment to service.
                </p>
              </div>
            </div>
            <div className="col-md-4 about__global-achived">
              <div className="about-global-text px-5">
                <h1 className="mb-5">54,000</h1>
                <p>
                  We are committed to an inclusive and collaborative culture,
                  helping our ~54,000 employees develop their careers and thrive
                  at work every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container my-5">
        <div className="row">
          <div className="about__dash-line2 mb-5 ms-3"></div>
          <h1 className="mt-3 mb-5">Company leadership</h1>
          <div className="col-md-6">
            <div className="leadership__img">
              <img
                src="https://www.bakerhughes.com/sites/bakerhughes/files/styles/max_650x650/public/2019-09/09272019_aboutus_i3%402x.jpg?itok=-zPXDRLJ"
                alt=""
                className="img-fluid"
              />

              <div className="about__dash mb-3 mt-5">
                <div className="about__dash-line  me-3"></div>
                <div className="about__dast-text">COMPANY LEADERSHIP</div>
              </div>
              <h3>
                <b>Management team</b>
              </h3>
              <p>
                Our executive management team supports the long-term <br />{" "}
                interests of shareholders, employees, customers, suppliers, and{" "}
                <br /> the communities where we do business.
              </p>

              <div className="protect__button my-4">
                <button
                  class="m-auto variable-button h6"
                  data-text="LEARN MORE"
                  data-texthover=">"
                ></button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="leadership__img">
              <img
                src="https://www.bakerhughes.com/sites/bakerhughes/files/styles/max_650x650/public/2019-09/09242019_aboutus_i4%402x.jpg?itok=zZNSIpD4"
                alt=""
                className="img-fluid"
              />

              <div className="about__dash mb-3 mt-5">
                <div className="about__dash-line  me-3"></div>
                <div className="about__dast-text">COMPANY LEADERSHIP</div>
              </div>
              <h3>
                <b>Management teamBoard of directors</b>
              </h3>
              <p>
                Our board is active and engaged, and supports a culture of{" "}
                <br /> open dialogue, collaboration, and rigorous
                decision-making to <br /> create long-term stakeholder value.
              </p>

              <div className="protect__button my-4">
                <button
                  class="m-auto variable-button h6"
                  data-text="LEARN MORE"
                  data-texthover=">"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="about__dash-line2  ms-2"></div>
            <h1 className="mt-3 mb-3 ">Overview</h1>
            <div className="about__organized-text">
              <h5 className="my-3 ms-2 "> We define energy in human terms</h5>
              <p>
                Access to energy helps improve lives by driving human progress
                and enabling the benefits of modern society. That’s why we’re
                constantly working to provide reliable, affordable and
                ever-cleaner energy for the millions around the world that rely
                on us.
              </p>

              <h5>We believe humanity can solve any challenge</h5>
              <p>
                Our greatest resource is our people. Their ingenuity, creativity
                and collaboration have met the complex challenges of energy’s
                past. Together, we’ll take on the future.
              </p>

              <h5>We deliver results responsibly</h5>
              <p>
                We’re leaders in energy because we value responsibility, trust
                and integrity. This unwavering dedication to quality drives our
                company culture and will keep us ahead for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="about__dash-line2  ms-2"></div>
            <h1 className="mt-3 mb-3 ">Our Strategy</h1>
            <div className="about__organized-text">
              <h5> Our Purpose:</h5>
              <p>
                Responsibly produce energy for our communities and Stakeholders.
              </p>

              <h5>Our Vision</h5>
              <p>
                To become a mid-cap energy company within 3 – 5 years.
                Integrity, Excellence and Sustainability will always be your
                vision.
                <br /> We will achieve excellence in providing safe, efficient
                and high-quality services, as well as local knowledge and
                skills, along with developing potential local talent.
              </p>

              <h5>Our Mission</h5>
              <p>
                After in consultation with management and staff on how we
                envision our vision and company values, Arabian SPSC has created
                the following integrated elements. Moreover, isn’t just a tablet
                on the wall, she used these insights and values every day to
                guide her decision making.
              </p>
              <h5>
                Our strategy is to access low cost, high margin opportunities
                which generate stable cash flows and self-funded upside. <br />
                We aim to achieve this by identifying relevant opportunities by
                utilizing our strong organizational and technical capabilities
                across five core areas, outlined below, which are underpinned by
                our ESG values:
              </h5>
              <h6>
                1- Technical: Low cost drilling & project development,
                Subsurface expertise with track record of exploration succes.
                <br />
                <br />
                2- Operation: Safe, experienced North African Operator, low cost
                onshore operator. <br />
                <br /> 3- Financial: Strong financial discipline, Long term
                fixed-price gas contracts & low opex/bbl mitigates risk
                commodity price risk, <br />
                shareholder support for growth.
                <br />
                <br />
                4- Cultural: Strong HSE, Entreprenuerial Commercially agile,
                Dynamic capability to respond to environment.
                <br />
                <br /> 5- Management: Clear strategy, Strong leadership, Focused
                on risk management, Commited to ESG.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="about__dash-line2  ms-2"></div>
            <h1 className="mt-3 mb-3 ">Core Purpose</h1>
            <div className="about__organized-text">
              <h5 className="">
                {" "}
                To be business leaders through technical distinction and
                superior customer service.
              </h5>

              <h5>Core Values</h5>
              <ul className="my-3 ms-2 ">
                <li>
                  <strong> People</strong> – At UNIQUE, PEOPLE come first - our
                  customers, partners and employees.
                </li>
                <li>
                  <strong> Excellence </strong> – We provide optimum, most
                  COST-EFFECTIVE SOLUTIONS to our customers.
                </li>
                <li>
                  <strong>Effectiveness</strong> – We are HONEST, QUICK THINKING
                  AND EFFICIENT which means that our commitments can be trusted.
                </li>
                <li>
                  <strong>Innovation</strong> – As empowered entrepreneurs, our
                  teams CREATE WORLD leading products and solutions.
                </li>
                <li>
                  <strong>Growth</strong> – By embracing change, WE GROW, LEARN
                  AND DRIVE the business towards a secure future.
                </li>
              </ul>
              <img src={image01} alt="culture" style={{ marginInline: 320 }} />

              <h5>We deliver results responsibly</h5>
              <p>
                We’re leaders in energy because we value responsibility, trust
                and integrity. This unwavering dedication to quality drives our
                company culture and will keep us ahead for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="about__dash-line2  ms-2"></div>
            <h1 className="mt-3 mb-3 ">Supply Chain</h1>
            <div className="about__organized-text">
              <h5 className="">
                {" "}
                To be business leaders through technical distinction and
                superior customer service.
              </h5>

              <h5>Supply Chain</h5>
              <ul className="my-3 ms-2 ">
                <li>
                  <strong> People</strong> – At UNIQUE, PEOPLE come first - our
                  customers, partners and employees.
                </li>
                <li>
                  <strong> Excellence </strong> – We provide optimum, most
                  COST-EFFECTIVE SOLUTIONS to our customers.
                </li>
                <li>
                  <strong>Effectiveness</strong> – We are HONEST, QUICK THINKING
                  AND EFFICIENT which means that our commitments can be trusted.
                </li>
                <li>
                  <strong>Innovation</strong> – As empowered entrepreneurs, our
                  teams CREATE WORLD leading products and solutions.
                </li>
                <li>
                  <strong>Growth</strong> – By embracing change, WE GROW, LEARN
                  AND DRIVE the business towards a secure future.
                </li>
              </ul>
              <img src={image01} alt="culture" style={{ marginInline: 320 }} />

              <h5>We deliver results responsibly</h5>
              <p>
                We’re leaders in energy because we value responsibility, trust
                and integrity. This unwavering dedication to quality drives our
                company culture and will keep us ahead for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <AboutHealth />
        <AboutStories />
        <AboutBrands />
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
              <div className="protect__button my-4">
                <button
                  class="m-auto variable-button h6"
                  data-text="LEARN MORE"
                  data-texthover=">"
                ></button>
              </div>
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
