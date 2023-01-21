import React, { useState } from "react";
import "./HomePageCard.css";
import HomeTabs from "./HomeTabs";
import { Link } from "react-router-dom";
import meet from "../../Images/meet.jpeg";
import bod from "../../Images/bod.jpeg";

const Home__Middle__Cards = () => {
  const [data, setdata] = useState("button1");

  const HandleClick = (id) => {
    setdata(id);
  };

  return (
    <div className="py-0">
      <div className="maintab-container">
        <div className="container MainTab mt-5 gx-lg-0">
          <div className="row ">
            <div className="col-lg-3 ">
              <div
                className={data === "button2" ? "home_mini2" : "home_mini"}
                id="button2"
                onClick={() => HandleClick("button2")}
              >
                <Link className="homemibi">
                  <div className="HomeMiniCard">
                    <h6>Supply Chain Management</h6>
                  </div>
                </Link>
              </div>
              <div
                className={data === "button3" ? "home_mini2" : "home_mini"}
                id="button3"
                onClick={() => HandleClick("button3")}
              >
                <Link className="homemibi">
                  <div className="HomeMiniCard">
                    <h6>Cybersecurity</h6>
                  </div>
                </Link>
              </div>
              <div
                className={data === "button4" ? "home_mini2" : "home_mini"}
                id="button4"
                onClick={() => HandleClick("button4")}
              >
                <Link className="homemibi">
                  <div className="HomeMiniCard">
                    <h6>Sustainability</h6>
                  </div>
                </Link>
              </div>
              <div
                className={data === "button5" ? "home_mini2" : "home_mini"}
                id="button5"
                onClick={() => HandleClick("button5")}
              >
                <Link className="homemibi">
                  <div className="HomeMiniCard">
                    <h6>Our Business</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 ms-lg-5 mt-3">
              {data === "button1" && (
                <HomeTabs
                  topText="Our oilfield technology and services help you operate efficiently and predictably, ensuring that projects are executed right the first time and assets consistently perform at peak productivity. Our portfolio is enriched by digitalization, artificial intelligence and automation capabilities that enable remote operations, reduce risk, and drive decarbonization efforts."
                  title="Featured"
                  img="https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/Subsea-Connect-Baker-Hughes-Landscape.webp?itok=au5r-EY9"
                  SubTitle="
Subsea connect"
                  subText="Helping our customers with production enhancement, maximizing recovery over the life-of-field, and reducing costs."
                  text="Read More"
                  img2="https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2022-10/execution_team.webp?itok=yeEmlszf"
                  subText1="Delivering solutions to maximize total asset value"
                  SubTitle2="
Maximizing Return on Efficiency"
                />
              )}
              {data === "button2" && (
                <HomeTabs
                  topText="At Supply Chain Management, our aim is to add value for Arabian Summit Petroleum Services Company and its customers and clients. Our actions are consistently based on striving for productivity, quality, availability and digitalization. "
                  title="Featured"
                  img="https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/what%20we%20do_LNG%20card%201.webp?itok=SN4OtRpc"
                  SubTitle="Collaborating with the Clients"
                  subText="Experience in industry-leading solutions for long-term reliability, availability, and project success."
                />
              )}
              {data === "button3" && (
                <HomeTabs
                  topText="What comes to mind when you think of cybersecurity? Hackers and firewalls? It's about much more. It's about protecting valuable assets, securing the operation of critical infrastructure, and protecting sensitive data and intellectual property. At Arabian Summit Petroleum Services Company, a large number of top experts work day-to-day to ensure such security and make the difference."
                  title="Featured"
                  img="https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/what%20we%20do_industrial%20tech%20image%201.webp?itok=qejJFcjt"
                  SubTitle="Industrial Cybersecurity"
                  subText="Solutions to improve efficiency and uptime in processing and manufacturing industries.."
                  img2="https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/gas%20turbine%20detail.webp?itok=Gg6cs_T6"
                  subText1="Setting standards in efficiency, availability, reliability, and flexibility while minimizing costs of ownership."
                  SubTitle2="
NovaLT gas turbines"
                />
              )}
              {data === "button4" && (
                <HomeTabs
                  topText="Sustainability is at the core of what we do as we harness the good in energy to elevate and enrich lives. People are our strength and partners for growth, driving our passion for innovation to progress towards the future of energy sustainability."
                  title="Featured"
                  img="https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/what%20we%20do_ET%20image%201.webp?itok=XSEw3fg1"
                  SubTitle="Sustainability is at the core of our strategy"
                  subText="Arabian Summit Petroleum Services Company is in the business of innovating in the oil market to solve problems for our contractors and society. "
                  img2="https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/NNNova%20LT12%20approved%20external%20use%20ALE_5181.webp?itok=4mG0Q7TO"
                  subText1="Setting standards in efficiency, availability, reliability, and flexibility while minimizing costs of ownership."
                  SubTitle2="Hydrogen technologies"
                />
              )}
              {data === "button5" && (
                <HomeTabs
                  topText="Our solutions transform operations by bringing together Upstream, midstream, and downstream oil and gas operations are three related parts related to the position of an oil and gas company in the supply chain."
                  title="Featured"
                  img="https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/refineries%20and%20petrochemical%20plants_iStock-943356040%20%2861%29.webp?itok=KYafTCwI"
                  SubTitle="Our Business"
                  subText="Upstream, Downstream, Midstream."
                  img2="https://www.bakerhughes.com/sites/bakerhughes/files/styles/scale_and_crop_360_240/public/2021-01/refineries%20and%20petrochemical%20plants_iStock-943356040%20%2864%29.webp?itok=wcUL6CCj"
                  subText1="Predict assets at risk of failure to improve maintenance and planning."
                  SubTitle2="Predictive asset maintenance"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="subtab p-1">
        <div className="container  my-5 mt-5">
          <div className="row">
            <div className="col-md-6 ">
              <div className="leadership__img">
                <img src={bod} alt="" className="img-thumbnail " />

                <div className="about__dash mb-3 mt-5">
                  <div className="about__dash-line  me-3"></div>
                  <div className="text-white">LEADERSHIP</div>
                </div>
                <h3 className="text-white">
                  <b>Management</b>
                </h3>
                <p className="text-gray">
                  At ASPS Our management provides long-term support the
                  interests of our shareholders, employees, customers and
                  suppliers; and the communities in which we operate.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="leadership__img">
                <img src={meet} alt="" className="img-thumbnail" />

                <div className="about__dash mb-3 mt-5">
                  <div className="about__dash-line  me-3"></div>
                  <div className="text-light">COMPANY </div>
                </div>
                <h3 className="text-white">
                  <b>Board of directors</b>
                </h3>
                <p className="text-gray">
                  The Board represents and is accountable to the shareholders of
                  the company. The Board's responsibilities are to regularly
                  evaluate the strategic direction of the company, management
                  policies and the effectiveness with which management
                  implements them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home__Middle__Cards;
