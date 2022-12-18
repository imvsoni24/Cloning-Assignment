import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "./slider.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{ ...style,
        display: "block",
        color: "grey",
        height: "2.5rem",
        width: "2.5rem",
        marginRight:"-17px",
        marginTop:"60px"
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "grey",
        height: "2.5rem",
        width: "2.5rem",
        marginLeft:"-12px",
        marginTop:"60px"
      }}
      onClick={onClick}
    />
  );
}

const BrandSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (<>
   
    <div style={{ width: "72%", margin: "auto", marginTop: "20px" }}>
     
      <Slider {...settings}>
        
     
        <div  className="card2">
           
          <img  src="https://i.ibb.co/7rY4vQF/Screenshot-311.png"
            alt=""
            width="100%"
          />
        </div>
        <div  className="card2">
          <img src="https://i.ibb.co/hLxZWHt/Screenshot-310.png"
            alt=""
            width="100%"
          />
        </div>
        <div  className="card2">
          <img src="https://i.ibb.co/nsCfHGf/Screenshot-309.png"
            alt=""
            width="100%"
          />
        </div>
      </Slider>
    </div>
    </>
  );
};

export default BrandSlider;
