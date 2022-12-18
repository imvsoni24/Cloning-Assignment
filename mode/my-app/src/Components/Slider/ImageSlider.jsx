
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
        marginRight:"-25px"
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
        marginLeft:"-25px"
      }}
      onClick={onClick}
    />
  );
}

const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "72%", margin: "auto", marginTop: "20px" }}>
      <Slider {...settings}>
        <div className="card">
          <img src="https://modesens.com/banner/14398/getimg/?img=%2Fbanner%2F20221212-modesens-HolidaySale-1140x400-EN_1670831157.jpg"   alt=""
            height="100px"
            width="100%"
          />
        </div>
        <div  className="card">
          <img src="https://modesens.com/banner/14454/getimg/?img=%2Fbanner%2F20221214-modesens-Prada-1140x400-F-EN.jpg"
            alt=""
            height="100px"
            width="100%"
          />
        </div>
        <div  className="card">
          <img  src="https://modesens.com/banner/14454/getimg/?img=%2Fbanner%2F20221214-modesens-Prada-1140x400-F-EN.jpg"
            alt=""
            height="100px"
            width="100%"
          />
        </div>
        <div  className="card">
          <img src="https://modesens.com/banner/14477/getimg/?img=%2Fbanner%2F20221213-modesens-Coltorti-1140x400-F-EN.jpg"
            alt=""
            height="100px"
            width="100%"
          />
        </div>
        <div  className="card">
          <img src="https://modesens.com/banner/14509/getimg/?img=%2Fbanner%2F20221215-modesens-Moda-1140x400-F-EN.jpg"
            alt=""
            height="100px"
            width="100%"
          />
        </div>
        <div  className="card">
          <img src="https://modesens.com/banner/14475/getimg/?img=%2Fbanner%2F20221213-modesens-D2-1140x400-EN.jpg"
            alt=""
            height="100px"
            width="100%"
          />
        </div>
        <div  className="card">
          <img src="https://modesens.com/banner/14237/getimg/?img=%2Fbanner%2F20221123-modesens-LJ-holiday-1140x400_1669184089.jpg"
            alt=""
            height="100px"
            width="100%"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;

