
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

const CommunitySlider = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "72%", margin: "auto", marginTop: "50px" }}>
      <div style={{display:"flex", justifyContent:"center"}}><h1 style={{fontSize:"25px",fontWeight:"bold"}}>Community Posts</h1></div>
      <Slider {...settings}>
        <div className="card3">
          <img src="https://cdn.modesens.com/umedia/1685597s?w=400"   alt=""
           
            width="100%"
          
          />
        </div>
        <div  className="card3">
          <img src="https://cdn.modesens.com/umedia/1685556s?w=400"
            alt=""
        
            width="100%"
          />
        </div>
        <div  className="card3">
          <img  src="https://cdn.modesens.com/umedia/1685542s?w=400"
            alt=""
          
            width="100%"
          />
        </div>
        <div  className="card3">
          <img src="https://cdn.modesens.com/umedia/1684927s?w=400"
            alt=""
      
            width="100%"
          />
        </div>
        <div  className="card3">
          <img src="https://cdn.modesens.com/umedia/1684416s?w=400"
            alt=""
            
            width="100%"
          />
        </div>
        <div  className="card3">
          <img src="https://cdn.modesens.com/umedia/1684387s?w=400"
            alt=""
        
            width="100%"
          />
        </div>
        <div  className="card3">
          <img src="https://cdn.modesens.com/umedia/1683611s?w=400"
            alt=""
    
            width="100%"
          />
        </div>
        <div  className="card3">
          <img src="https://cdn.modesens.com/umedia/1683621s?w=400"
            alt=""
            
            width="100%"
          />
          
        </div>
        <div  className="card3">
          <img src="https://cdn.modesens.com/umedia/1707018s?w=400"
            alt=""
      
            width="100%"
          />
        </div>
        <div  className="card3">
          <img src="https://cdn.modesens.com/umedia/1707030s?w=400"
            alt=""
    
            width="100%"
          />
        </div>
        <div  className="card3">
          <img src="https://cdn.modesens.com/umedia/1707011s?w=400"
            alt=""
      
            width="100%"
          />
        </div>
        <div  className="card3">
          <img src="https://cdn.modesens.com/umedia/1686127s?w=400"
            alt=""
        
            width="100%"
          />
        </div>
      </Slider>
      <div className="view">VIEW ALL</div>
    </div>
  );
};

export default CommunitySlider;