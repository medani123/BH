import React from "react";
import "./Footer.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { Energycase } from "../Compoents";

function Footer() {
  return (
    <div>
      <div className="mt-5 "> {/* <Energycase /> */}</div>
      <div className="footer_container">
        <div className="container">
          <div className="row footer_row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="footer_img">
                <img
                  className="img-fluid"
                  src="https://www.bakerhughes.com/themes/custom/bh/dist/images/logo-rev-tm.svg"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="footer_ul">
                <h6 className="footer_heading">More ASPS </h6>
                <ul className="pt-4">
                  <li>
                    Rig Count
                    <span>
                      <ArrowForwardIcon className="arrow ms-2" />
                    </span>
                  </li>
                  <li>
                    Digital Solutions
                    <span>
                      <ArrowForwardIcon className="arrow ms-2" />
                    </span>
                  </li>
                  <li>
                    BakerHughesC3.ai
                    <span>
                      <ArrowForwardIcon className="arrow ms-2" />
                    </span>
                  </li>
                  <li>
                    Shop Baker Hughes
                    <span>
                      <ArrowForwardIcon className="arrow ms-2" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="footer_ul">
                <h6 className="footer_heading">Helpful Links</h6>
                <ul className="pt-4">
                  <li>Newsroom</li>
                  <li>Company Leadership</li>
                  <li>
                    Energy Forward Stories
                    <span>
                      <ArrowForwardIcon className="arrow ms-2" />
                    </span>
                  </li>
                  <li>Digital Transformation</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12">
              <div className="footer-social-media">
                <h2>Social</h2>
                <div className="mt-4 footer_last">
                  <span className="footer_icon_border">
                    <LinkedInIcon className="footer_icon" />
                  </span>
                  <span className="footer_icon_border">
                    <TwitterIcon className="footer_icon" />
                  </span>
                  <span className="footer_icon_border">
                    <YouTubeIcon className="footer_icon" />
                  </span>
                  <span className="footer_icon_border">
                    <PinterestIcon className="footer_icon" />
                  </span>
                </div>
              </div>
            </div>
            <hr className="mx-auto mt-4 footer-divider" />
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
