import React, { useState } from "react";
import "../../container/ProductServices.css";
import { KeyboardArrowRightIcon } from "../../constant/index";
import CloseIcon from "@material-ui/icons/Close";
import { ProductServiceSamllCard } from "../../Compoents/index";
import CenterCenterSection from "../Company/CenterCenterSection";
import { Link } from "react-router-dom";
const Com = () => {
  const [currentButton, setCurrentButton] = useState(null);
  const [data, setData] = useState(null);

  const handleButtonClick = (id) => {
    setCurrentButton(id);
  };
  const handleData = (data) => {
    setData(data);
  };
  return (
    <section className="">
      <div className="d-flex  Featture__mn_left">
        <div className=" ProductLeftSection">
          <ul className="Product__items mt-5 ">
            <button
              id="button1"
              onClick={() => handleButtonClick("button1")}
              className="text-start "
            >
              <li>
                <Link to="#">
                  Overview <KeyboardArrowRightIcon />
                </Link>
              </li>
            </button>
            <button
              id="button2"
              className="text-start"
              onClick={() => handleButtonClick("button2")}
            >
              <li>
                <Link to="#" className="text-start">
                  Our Strategy
                  <KeyboardArrowRightIcon />
                </Link>
              </li>
            </button>
            <button
              className="text-start"
              id="button3"
              onClick={() => handleButtonClick("button3")}
            >
              <li>
                <Link>
                  Core Purpose <KeyboardArrowRightIcon />
                </Link>
              </li>
            </button>
            <button className="text-start">
              <li>
                <Link to="#">
                  Supply Chain Management
                  <KeyboardArrowRightIcon />
                </Link>
              </li>
            </button>
          </ul>
        </div>
        <div className="Product__middle_Section">
          {currentButton === "button1" && (
            <CenterCenterSection
              title1="About Us "
              title2="Innovation and Technnology"
              title3="Company Leadership"
              title4="Consultancy Services"
              title5="Upcoming Events"
              title6="Completions"
              title7="Production"
              title8="Event Proceedings"
              onData={handleData}
            />
          )}

          {currentButton === "button2" && (
            <CenterCenterSection
              title1="Sustainablity "
              title2="People "
              title3="Planet"
              title4=" Principles            "
              title5="Reports & Policies"
            />
          )}
        </div>
        <div className="Last__Product__Section ">
          <div className="row ms-5 mt-5 "></div>
          {data === "button4" && <ProductServiceSamllCard />}
        </div>
      </div>
    </section>
  );
};

export default Com;
