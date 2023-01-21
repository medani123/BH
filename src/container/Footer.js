import React from "react";
import "./Footer.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { Energycase } from "../Compoents";
import { logo } from "../constant";

function Footer() {
  return (
    <div>
      <div className="mt-5 "> {/* <Energycase /> */}</div>
      <div className="footer_container">
        <div className="container">
          <div className="row footer_row">
            <div className="col-lg-2 col-md-12 col-sm-12">
              <div className="footer_img">
                <img className="img-fluid" src={logo} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="footer-text">
                <p className="text-secondary mt-3">© 2023 ASPS Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
