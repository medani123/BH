import React from "react";
import "./CyberSecurity.css";
import { HomeSectionTwo } from "../../constant";
import Card from "../../Compoents/Bekar__home/Card";
import image from "../../Images/sec.jpg";
import image3 from "../../Images/image3.jpeg";
import image4 from "../../Images/image4.jpeg";
import cr from "../../Images/cyber/cr.png";
import gr from "../../Images/cyber/gr.png";
import lr from "../../Images/cyber/lr.png";
import ph from "../../Images/cyber/ph.png";
import tc from "../../Images/cyber/tc.png";
import ts from "../../Images/cyber/ts.png";

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
import HeroSecComp from "../../Compoents/Hero__Sec-component";

function EnergyTransition() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="sectionTwo-text mt-5">
              <hr />
              <h3>Protecting What We Value.</h3>
              <p className="mt-3">
                What comes to mind when you think of cybersecurity? Hackers and
                firewalls? It's about much more. It's about protecting valuable
                assets, securing the operation of critical infrastructure, and
                protecting sensitive data and intellectual property. At Arabian
                Summit Petroleum Services Company, a large number of top experts
                work day-to-day to ensure such security and make the difference.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-fluid mt-2  HomeSectionTwo ">
              <img src={image} alt="" className="w-100 " />
            </div>
          </div>
        </div>
      </div>

      <div className="ChallengesA">
        <div>
          <div className="container">
            <div className="our__framework-all ">
              <h1>Why cybersecurity? </h1>
            </div>
            <h2 className="text-center mb-5 ">
              A topic that’s growing in importance Malicious hacker attacks on
              companies, industrial plants and infrastructure facilities are
              unfortunately commonplace these days. With the growing level of
              digitalization and expanding Industrial Internet of Things, risks
              of hacking attacks are increasing not only on a company’s IT but
              especially on its operational technology.
            </h2>
            <br />
            <h2 className="our__framework-all ">
              <strong>
                Six key global trends making cybersecurity a top priority
              </strong>
            </h2>
            <div className="row">
              <div className="col-md-4">
                <Card
                  img={gr}
                  title={<span>Growing risks for business</span>}
                  description="For the first time ever, cyber incidents ranked globally as the most important business risk in the ninth Allianz Risk Barometer 2020. Cyber incidents have become increasingly damaging and expensive for companies – and often lead to lawsuits and litigation after the event."
                />
              </div>

              <div className="col-md-4">
                <Card
                  img={tc}
                  title={<span>Technological changes</span>}
                  description="By 2023, there will be over three times more networked devices on our planet than humans, according to Cisco’s Annual Internet Report analysis and forecast. Roughly half of all global connections will be from machine to machine."
                />
              </div>

              <div className="col-md-4">
                <Card
                  img={ts}
                  title={<span>Talent shortage</span>}
                  description="The 2022 Cybersecurity Workforce Study examined the global talent shortage in the field and found that companies could use 3.1 million additional cybersecurity experts, nearly double the number that is available today."
                />
              </div>

              <div className="col-md-4">
                <Card
                  img={ph}
                  title={<span>Professional hacking</span>}
                  description="Nation-state players and cybercrime organizations are intensifying their activities in cyberspace in 2022. The ongoing COVID-19 pandemic is providing them with new opportunities to target businesses, government organizations, infrastructures, and individuals worldwide."
                />
              </div>

              <div className="col-md-4">
                <Card
                  img={lr}
                  title={<span>Laws and regulations </span>}
                  description="Personal data protection and privacy laws are rapidly evolving in the United States & other countries around the world. While some regions have adopted a more rigid and comprehensive approach, other countries are embracing more sectoral & self-regulated ideologies."
                />
              </div>

              <div className="col-md-4">
                <Card
                  img={cr}
                  title={<span>Customer requirements</span>}
                  description="Cybersecurity is becoming an essential baseline requirement for contracting in both the public and private sectors. Only companies that are able to prove they meet high cybersecurity requirements will be shortlisted for contracts."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ChallengesA">
        <div className="container my-5">
          <div className="our__framework-all ">
            <h1>Applying a holistic security concept:</h1>
          </div>
          <h2 className="mb-5 ">
            Cybersecurity must be viewed as a whole. At Arabian Summit Petroleum
            Services Company, our job is to ensure the security of entire value
            chains and system lifecycles. We are exposed to and must neutralize
            an increasing number of security risks. Similarly, our customers
            have to deal with security risks, and they don’t want to have these
            risks increased by the use of our products, solutions, and services.{" "}
            <br />
            <br /> Providing secure products, solutions, and services for our
            customers not only requires secure development, engineering and
            operation from our side. We ensure that all relevant components and
            processes are seamlessly integrated into a well-fortified overall
            system to ensure fully protected operation. <br />
            <br /> Our Cybersecurity Risk Management Framework is based on ISO
            27005 and aligned with industry best practices. By constantly
            evolving our tools, methods, and processes, we support the
            achievement of corporate objectives, the protection of company
            assets and financial sustainability.
          </h2>
          <div className="row">
            <div className="col-md-6">
              <Card
                img={image4}
                title={<span>Industrial Cybersecurity</span>}
                description={
                  <span>
                    Our Product and Solution Security (PSS) initiative enables
                    our customers to securely operate and maintain their
                    facilities. As an integrator and contractor, we provide
                    state-of-the-art cybersecurity solutions including secure
                    products that meet all legal requirements. To address risks,
                    challenges and opportunities, Arabian Summit Petroleum
                    Services Company maintains a management system for PSS and
                    controls risks in a systematic way.
                  </span>
                }
              />
            </div>

            <div className="col-md-6">
              <Card
                img={image3}
                title={<span>Active cyber risk management</span>}
                description={
                  <span>
                    The integrated Cybersecurity Risk Management Framework at
                    Arabian Summit Petroleum Services Company aims at
                    safeguarding all relevant company assets against cyber
                    threats by managing associated risks. We combine information
                    from various sources to actively monitor, communicate and
                    mitigate critical cyber risks in close collaboration with
                    our colleagues from within the business.
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnergyTransition;
