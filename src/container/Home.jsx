/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BekarHomeHead, HomeCard, HomeTabs } from "../Compoents";
import Home__Middle__Cards from "../Compoents/HomePageCard/Home__Middle__Cards";
import "./Footer.css";
const Home = () => {
  return (
    <div>
      <BekarHomeHead />
      {/* <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md- border-end mt-3'>
            <HomeCard />
          </div>
          <div className='col-lg-4 col-md-4 border-end mt-3'>
            <HomeCard />
          </div>
          <div className='col-lg-4 col-md-4 border-end mt-3'>
            <HomeCard />
          </div>
        </div>
      </div> */}
      <div className="container mt-5">
        <div className="row "></div>
        <div className="col-lg-12">
          <div className="Home__What">
            <h1>What we do</h1>
            <p>
              We develop and deploy the most advanced technologies to serve
              energy and industrial companies looking for more efficient, more
              reliable and cleaner solutions. Our diverse portfolio of
              technologies and solutions are transforming how industry works
              today and in the future.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-0 tasb">
        <div className="mt-0">
          <Home__Middle__Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
