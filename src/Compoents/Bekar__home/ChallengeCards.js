import React from "react";
import Card from "./Card";
import education from "../../Images/education.jpeg";
import eth from "../../Images/eth.jpeg";
import team from "../../Images/team.jpeg";
import stake from "../../Images/stake.jpeg";
import saf from "../../Images/saf.jpeg";

const ChallengeCards = () => {
  return (
    <div>
      {" "}
      <div className="container">
        <div className="our__framework-all ">
          <h1>Collaborating with the Clients </h1>
        </div>
        <h2 className="text-center mb-5 ">
          Our partners are among the best in the marketplace
          <br /> and create value for themselves, for us, and for our customers.
        </h2>
        <div className="row">
          <div className="col-md-4">
            <Card
              img="	https://www.bakerhughes.com/sites/bakerhughes/files/styles/small_3_2_768x512_/public/2020-11/3-column%20image%20card%201.jpg?h=2ce5e5b3&itok=R2mDEkJH"
              title={<span>Environment & Sustainability</span>}
              description="Care for people always implies caring for the environment. Our outlook and strategy are dominated by the need to implement and use sustainable solutions, in line with the present concerns for preserving the environment."
            />
          </div>

          <div className="col-md-4">
            <Card
              img={team}
              title={<span>In the Community</span>}
              description="We believe as much in doing good as we do in doing well. (CSR) practices bring innovation, enhanced brand value and improved relationships with our stakeholders and the communities we work in."
            />
          </div>

          <div className="col-md-4">
            <Card
              img={education}
              title={<span>Education</span>}
              description="ASPS invests in education and takes on the task to spread and diversify the existing oil and gas industry knowledge. The sector we represent is in constant need of well prepared specialists to suit our wide range of integrated businesses."
            />
          </div>

          <div className="col-md-4">
            <Card
              img={saf}
              title={<span>Safety</span>}
              description="Safety is a primary concern and consideration in all activities conducted at ASPS. We discover, extract, handle, refine and distribute hydrocarbons and their derivatives in ways that minimise the danger to our staff, our collaborators and clients."
            />
          </div>

          <div className="col-md-4">
            <Card
              img={stake}
              title={<span>Stakeholders</span>}
              description="ASPS aims to maintain a strong and transparent bond with our stakeholders, which promotes constructive and sustainable development. We will always promote respect, equality, and diversity among our stakeholders by proliferating a non-discriminatory relationship and professional climate."
            />
          </div>

          <div className="col-md-4">
            <Card
              img={eth}
              title={<span>Ethics</span>}
              description="ASPS is firmly committed to not only following but promoting fair, ethical, and socially responsible business practices in our offices, sites, and partner facilities. We accept no less than industry standard and best practices in all of our operations and services."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCards;
