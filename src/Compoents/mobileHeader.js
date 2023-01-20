import React from "react";

import "./TobNavBar.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
const MobileHeader = ({ HandleClick1, Data2 }) => {
  return (
    <div>
      <div>
        <Accordion className={Data2 === "button1" ? "hide" : "show"}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>About Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul style={{ listStyleType: "none" }}>
                <li
                  className="my-3"
                  onClick={() => HandleClick1("button1")}
                  id="buttton1"
                >
                  <Link
                    className="text-dark"
                    to="/SupplyChain"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    Energy Transition
                  </Link>
                </li>
                <li className="my-3" onClick={() => HandleClick1("button1")}>
                  <Link
                    className="text-dark"
                    to="/HydrogenTechnologies"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    Hydrogen Technologies
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    Geothermal Solutions
                  </Link>
                </li>
                <li className="my-3" onClick={() => HandleClick1("button1")}>
                  <Link
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    Carbon Caliture, Utilization, and Storage (CCUS)
                  </Link>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={Data2 === "button1" ? "hide" : "show"}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Cybersecurity</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Oilfield</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>on-Demand Solutions</Typography>
                      </AccordionSummary>
                      <AccordionDetails onClick={() => HandleClick1("button1")}>
                        <Typography>
                          <h5>on-Demand Solutions</h5>
                          <p>Go beyond equipment sales</p>
                          <Link
                            className="text-success"
                            style={{ textDecoration: "none" }}
                            href="#"
                          >
                            Explore
                          </Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>Evaluation</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <h5>Evaluation</h5>
                          <p>Know your rock, make better decisions.</p>
                          <Link
                            className="text-success"
                            style={{ textDecoration: "none" }}
                            href="#"
                          >
                            Explore
                          </Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>Pre-Commissioning & Maintenance</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <h5>Pre-Commissioning & Maintenance</h5>
                          <p>
                            Safe operations, reduced downtime and maximum
                            throughput.
                          </p>
                          <Link
                            className="text-success"
                            style={{ textDecoration: "none" }}
                            href="#"
                          >
                            Explore
                          </Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Turbomachinery & Process Solutions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>Gas Turbines</Typography>
                      </AccordionSummary>
                      <AccordionDetails onClick={() => HandleClick1("button1")}>
                        <Typography>
                          <h5>Gas Turbines</h5>
                          <p>
                            Industry-leading gas turbine technologies for
                            mechanical drive and power generation (50/60 Hz)
                          </p>
                          <a
                            className="text-success"
                            style={{ textDecoration: "none" }}
                            href="#"
                          >
                            Explore
                          </a>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>Steam Turbines</Typography>
                      </AccordionSummary>
                      <AccordionDetails onClick={() => HandleClick1("button1")}>
                        <Typography>
                          <h5>Steam Turbines</h5>
                          <p>
                            Proven modular designs with the flexibility to meet
                            operating challenges across the oil and gas, and
                            power generation industries.
                          </p>
                          <a
                            className="text-success"
                            style={{ textDecoration: "none" }}
                            href="#"
                          >
                            Explore
                          </a>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={Data2 === "button1" ? "hide" : "show"}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Governance</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>ASPS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul style={{ listStyleType: "none" }}>
                      <li
                        className="my-3"
                        onClick={() => HandleClick1("button1")}
                      >
                        <Link
                          to="/AboutCompany"
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                          href="#"
                        >
                          About Us
                        </Link>
                      </li>
                      <li
                        className="my-3"
                        onClick={() => HandleClick1("button1")}
                      >
                        <Link
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                          href="#"
                        >
                          Innovation and Technology
                        </Link>
                      </li>
                      <li
                        className="my-3"
                        onClick={() => HandleClick1("button1")}
                      >
                        <Link
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                          href="#"
                        >
                          Company Leadership
                        </Link>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Corporate Responsibility</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul style={{ listStyleType: "none" }}>
                      <li
                        className="my-3"
                        onClick={() => HandleClick1("button1")}
                      >
                        <Link
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                          href="#"
                        >
                          Sustainability
                        </Link>
                      </li>
                      <li
                        className="my-3"
                        onClick={() => HandleClick1("button1")}
                      >
                        <Link
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                          href="#"
                        >
                          People
                        </Link>
                      </li>
                      <li
                        className="my-3"
                        onClick={() => HandleClick1("button1")}
                      >
                        <Link
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                          href="#"
                        >
                          Planet
                        </Link>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default MobileHeader;
