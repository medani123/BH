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
        <Accordion>
          <Link to="/AboutCompany">
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>About Us</Typography>
            </AccordionSummary>
          </Link>
        </Accordion>

        <Accordion className={Data2 === "button1" ? "hide" : "show"}>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Link to="/Governance">
              <Typography>Governance</Typography>
            </Link>
          </AccordionSummary>
        </Accordion>

        <Accordion className={Data2 === "button1" ? "hide" : "show"}>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Link to="/Sustainability">
              <Typography>Sustainability</Typography>
            </Link>
          </AccordionSummary>
        </Accordion>

        <Accordion className={Data2 === "button1" ? "hide" : "show"}>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Link to="/Safety">
              <Typography>Safety & Security</Typography>
            </Link>
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
};

export default MobileHeader;
