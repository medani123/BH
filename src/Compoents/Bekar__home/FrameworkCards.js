import React from "react";

import Card from "./Card";
import s1 from "../../Images/s1.jpeg";
import s2 from "../../Images/s2.jpeg";
import s3 from "../../Images/s3.jpeg";

import s6 from "../../Images/s6.jpeg";

import s8 from "../../Images/s8.jpeg";
import s9 from "../../Images/s9.jpeg";

const FrameworkCards = () => {
  return (
    <>
      <div className="container my-5">
        <div className="our__framework-all ">
          <h1>Sustainability in the Supply Chain</h1>
        </div>
        <h2 className="text-center mb-5 ">
          Integrity is the foundation of responsible and entrepreneurial
          behavior. It forms the heart and the basis of sustainable work.
        </h2>
        <div className="row">
          <div className="col-md-6">
            <Card
              img={s3}
              title={<span>Seize opportunities, minimize risks</span>}
              description={
                <span>
                  Sustainability is our guiding principle, supporting us in our
                  day-to-day work and ensuring our long-term growth. Both
                  integrity and sustainability are closely linked to our four
                  company values: caring, agile, respectful, and accountable. In
                  this way, we aim to live and breathe our socially responsible
                  company culture – for the good of society
                </span>
              }
            />
          </div>

          <div className="col-md-6">
            <Card
              img={s1}
              title={<span>Sustainability in the Supply Chain</span>}
              description={
                <span>
                  “Sustainability in the Supply Chain” is based on a holistic
                  approach that comprises the steps “Prevent – Detect – Respond”
                  and concentrates on minimizing risks. It is also reflected in
                  our Business Conduct Guidelines, which are binding for all
                  employees.
                </span>
              }
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="our__framework-all "></div>
        <div className="row">
          <div className="col-md-6">
            <Card
              img={s8}
              title={<span>Risk Awareness in our Supply Chain</span>}
              description={
                <span>
                  ASPS has implemented a system of interconnected processes and
                  tools to ensure full transparency and awareness for our spend,
                  within our supplier base and for our supply chain risks and
                  opportunities. Risk awareness within ASPS Supply Chain
                  Management follows three steps: Definition of sustainability
                  risks and categories, Identification of the relevant
                  suppliers, Development and implementation of necessary
                  procurement processes to cover these risks. Risk categories
                  can include particular suppliers: Based in higher-risk
                  countries, Providing products subject to “Responsible Minerals
                  Sourcing (RMS)”, Relevant for CO2 reduction engagement.
                </span>
              }
            />
          </div>

          <div className="col-md-6">
            <Card
              img={s9}
              title={<span>Risk Exposure in our Supply Chain </span>}
              description={
                <span>
                  We have established risk analysis procedures for each of our
                  defined risk groups to systematically identify potential
                  hazards in our supply chain. By using these risk
                  identification processes, we identify the specific suppliers
                  which we want to detect by one of our detection modules.
                  Detection Modules - Monitoring adherence to the principles of
                  the Code of Conduct, and consequences of non-adherence.{" "}
                </span>
              }
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="our__framework-all "></div>
        <div className="row">
          <div className="col-md-6">
            <Card
              img={s2}
              title={
                <span>
                  Supplier communications and extending our values further into
                  supply chains.{" "}
                </span>
              }
              description={
                <span>
                  We firmly believe that our sustainability principles are at
                  their most effective when they are applied voluntarily on the
                  basis of personal conviction. The key elements here are
                  broadening our suppliers’ capability and intensifying the
                  transfer of knowledge about sustainability. We support our
                  suppliers through our “Sustainability in the Supply Chain” and
                  “Code of Conduct” brochures, and we explicitly encourage them
                  to extend these values and sustainability requirements further
                  into their own supply chain in order to create a network of
                  interactions and business relations that are built on trust.
                </span>
              }
            />
          </div>

          <div className="col-md-6">
            <Card
              img={s6}
              title={
                <span>
                  Principles of the Code of Conduct for ASPS Suppliers &
                  Third-Party Intermediaries.
                </span>
              }
              description={
                <span>
                  The Code of Conduct defines ASPS sustainability standards and
                  principles for our partners, who are obliged to comply with
                  its provisions: Legal compliance Prohibition of corruption and
                  bribery Fair competition, anti-trust laws and intellectual
                  property rights Conflicts of interest Respect for the basic
                  human rights of employees Prohibition of child labor Health
                  and safety of employees Environmental protection Transparency
                  in the supply chain Responsible Minerals Sourcing.
                </span>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameworkCards;
