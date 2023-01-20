import React from "react";
import "./TobNavBar.css";
import CallMadeIcon from "@material-ui/icons/CallMade";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <section className="top__Nav__Bar">
      <div className="container">
        <div className=" d-flex flex-row-reverse ">
          {/* <div className="Top__Items text-white Earth">
            <LanguageIcon />
          </div>
          <div className="  Top__Items">
            <a href="">English</a>
          </div> */}

          <div className="  Top__Items">
            <Link to="/Careers">
              <a href="">
                Careers
                <span>
                  <CallMadeIcon />
                </span>
              </a>
            </Link>
          </div>
          <Link to="/ContactUs">
            <div className="  Top__Items ">
              <a href="">Contact Us</a>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopNavBar;
