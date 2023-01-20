import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import { ButtonBase } from "@material-ui/core";
import CarouselCards from "./CarouselCards";

const ResourceCarousel = () => {
  let settings_3 = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 822,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  return (
    <div>
      <div
        className="mx-lg-5 px-lg-5"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
          marginRight: "2rem",
          marginTop: "1rem",
        }}
      >
        <div>
          <div className="resource__border ms-lg-4"></div>
          <h2 style={{ marginLeft: "1.5rem" }}>Resources</h2>
        </div>
        <div style={{ display: "flex" }}>
          <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <ArrowBackIos className="button__icon" />
          </ButtonBase>
          <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickNext()}
          >
            <ArrowForwardIos className="button__icon" />
          </ButtonBase>
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <Slider
          {...settings_3}
          dots
          dotsClass="slick-dots line-indicator"
          ref={sliderRef}
          slidesToShow={4}
          slidesToScroll={4}
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-10px",
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          <CarouselCards
            img="https://www.bakerhughes.com/sites/bakerhughes/files/styles/product_services_thumbnail/public/2020-12/Nature%20Conservancy%20Indonesia.jpg?itok=Tnwqc9XV"
            title="PRESS RELEASE"
            date="NOVEMBER 1, 2020"
            description="The Baker Hughes Foundation Contributes $250,000 to The Nature Conservancy for Nature-Based Climate Solutions"
          />
          <CarouselCards
            img="https://www.bakerhughes.com/sites/bakerhughes/files/styles/product_services_thumbnail/public/2020-12/3C.png?itok=KkBu80pL"
            title="PRESS RELEASE"
            date="NOVEMBER 2, 2020"
            description="Würth and Baker Hughes Announce Joint Service Offering to Expand Additive Manufacturing Solutions for Customers Globally"
          />
          <CarouselCards
            img="https://www.bakerhughes.com/sites/bakerhughes/files/styles/product_services_thumbnail/public/2020-07/Additive_0.webp?itok=O_1pGJVz"
            title="PRESS RELEASE"
            date="NOVEMBER 3, 2020"
            description="Würth and Baker Hughes Announce Joint Service Offering to Expand Additive Manufacturing Solutions for Customers Globally"
          />
          <CarouselCards
            img="https://www.bakerhughes.com/sites/bakerhughes/files/styles/product_services_thumbnail/public/2020-07/La%20turbina%20NovaLT12%20di%20Baker%20Hughes%20nello%20stabilimento%20di%20Firenze.webp?itok=4hqGs50y"
            title="PRESS RELEASE"
            date="NOVEMBER 4, 2020"
            description="Würth and Baker Hughes Announce Joint Service Offering to Expand Additive Manufacturing Solutions for Customers Globally"
          />
          <CarouselCards
            img="https://www.bakerhughes.com/sites/bakerhughes/files/styles/product_services_thumbnail/public/2020-12/Nature%20Conservancy%20Indonesia.jpg?itok=Tnwqc9XV"
            title="PRESS RELEASE"
            date="NOVEMBER 5, 2020"
            description="The Baker Hughes Foundation Contributes $250,000 to The Nature Conservancy for Nature-Based Climate Solutions"
          />
        </Slider>
      </div>
    </div>
  );
};

export default ResourceCarousel;
