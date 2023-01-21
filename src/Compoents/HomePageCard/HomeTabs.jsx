import React from "react";
import "./HomeTab.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const HomeTabs = (props) => {
  const {
    topText,
    title,
    img,
    SubTitle,
    SubTitle2,
    subText,
    text,
    img2,
    subText1,
  } = props;
  return (
    <div>
      <div className="container  ">
        <div className="row">
          <p className="TopText">{topText}</p>
        </div>
        <div className="row">
          <div className="col-lg-1">
            <div className="hr"></div>
          </div>
          <div className="row mt-4">
            <h6 className="">{title}</h6>
          </div>
          <div className="row mt-5 d-flex justify-centent-center">
            <div className="col-lg-4">
              <img src={img} alt="imge" className="img-fluid" />
            </div>
            <div className="col-lg-7 ms-lg-3">
              <h5>{SubTitle}</h5>
              <p className="TopText">{subText}</p>
              <p className="text1">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTabs;
