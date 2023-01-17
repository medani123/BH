import React, { useState, useEffect } from "react";
import "../Compoents/TobNavBar.css";

import {
  logo,
  ExpandMoreIcon,
  KeyboardArrowUpIcon,
  SearchIcon,
} from "../constant/index";
import { Link } from "react-router-dom";
import MobileHeader from "./mobileHeader";
const MainHeader = () => {
  const [selectedElements, setSelectedElements] = useState([]);
  const [Path, setPath] = useState(true);
  const [Data2, setData] = useState("");
  const HandleClick = (elementId) => {
    setPath(!Path);
    if (selectedElements.includes(elementId)) {
      setSelectedElements(selectedElements.filter((id) => id !== elementId));
    } else {
      setSelectedElements([...selectedElements, elementId]);
    }
  };
  const HandleClick1 = (id) => {
    setData(id);
    console.log("hello");
  };
  return (
    <>
      <div className="main__Header">
        <div className="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container">
              <Link class="navbar-brand" to="/">
                <div className="main__item ">
                  <img src={logo} alt="Brand logo" className="img-fluid " />
                </div>
              </Link>
              <button
                onClick={() => HandleClick1("button2")}
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="container">
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 DesktopHeader">
                    <li class="nav-item  ms-5">
                      <Link
                        to={
                          selectedElements.includes(1)
                            ? "/FeaturedCapabilities"
                            : "/"
                        }
                        className="  mt-1"
                        id="button3"
                        onClick={() => HandleClick(1)}
                      >
                        Featured Capabilities
                        <span>
                          {selectedElements.includes(1) ? (
                            <ExpandMoreIcon />
                          ) : (
                            <KeyboardArrowUpIcon />
                          )}
                        </span>
                      </Link>
                    </li>
                    <li class="nav-item ms-5 ">
                      <Link
                        to="/ProductsServices"
                        onClick={() => HandleClick(2)}
                      >
                        Products & Services
                        <span>
                          {selectedElements.includes(2) ? (
                            <ExpandMoreIcon />
                          ) : (
                            <KeyboardArrowUpIcon />
                          )}
                        </span>
                      </Link>
                      <br />
                    </li>
                    <li class="nav-item  ms-5 ">
                      <Link
                        to={Path ? "/Company" : "/"}
                        onClick={() => HandleClick(3)}
                      >
                        Company
                        <span>
                          {selectedElements.includes(3) ? (
                            <ExpandMoreIcon />
                          ) : (
                            <KeyboardArrowUpIcon />
                          )}
                        </span>
                      </Link>
                    </li>
                    <li class="nav-item ms-5 ">
                      <Link to="#">{/* <SearchIcon /> */}</Link>
                    </li>
                  </ul>
                  <ul className="MobileHeadera navbar-nav ms-auto mb-2 mb-lg-0">
                    <MobileHeader HandleClick1={HandleClick1} Data2={Data2} />
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
