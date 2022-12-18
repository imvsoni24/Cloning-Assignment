
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "./slider.css";
const offer = [
    {
        src : "https://modesens.com/banner/12036/getimg/?img=%2Fbanner%2F20220602-modesens-LuisaViaRoma-364x484-F.jpg",
        heading: "Best of the Best at LUISAVIAROMA",
        sub: "Up to 50% off",
        btn1title:"SHOP NOW",
    },
    {
        src : "https://modesens.com/banner/12487/getimg/?img=%2Fbanner%2F20220615Designer-Collab-modesens364x484-F.jpg",
        heading: "Our Kind of Dream Teams",
        sub: "Collabration id So in fashion",
        btn1title:"READ NOW",
    },
    {
        src : "https://modesens.com/banner/11005/getimg/?img=%2Fbanner%2F20220531-modesens-Sale-364x484.jpg",
        heading: "New To Sale",
        sub: "Fresh Cut",
        btn1title:"SHOP NOW",
    },
    {
        src : "https://modesens.com/banner/12496/getimg/?img=%2Fbanner%2F20220616-modesens-Neutrals-364x484-F.jpg",
        heading: "Your Style Wants a Summer Tan",
        sub: "Neutrals are the only way to glow",
        btn1title:"SHOP NOW",
    },
    {
        src : "https://modesens.com/banner/12478/getimg/?img=%2Fbanner%2F20220615-modesens-SummerFashionGuide-364x484.jpg",
        heading: "ModeSens Fashion Guide",
        sub: "2022 Summer Trends",
        btn1title:"SHOP NOW",
    },
   

]

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

const OfferSlider = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "72%", margin: "auto", marginTop: "50px" }}>
      <div style={{width:"20%",margin:"auto"}}><h1 style={{fontSize:"25px",fontWeight:"bold"}}>Special Offers</h1></div>
      <Slider {...settings}>
        {offer.map((item)=>(
            <div className="card5">
            <img src={item.src}   alt=""
             
              width="100%"
            
            />
            <div>
              <h1 style={{fontSize:"20px"}}>{item.heading}</h1>
              <h3 style={{fontSize:"15px",marginTop:"15px"}}>{item.sub}</h3>
              <div style={{margin:"auto",marginTop:"18px",width:"40%",border: "1px solid",
    padding: "5px 10px"}}>{item.btn1title}</div>
            </div>
          </div>
        ))}
       
       
      
      </Slider>
      <div className="view">VIEW ALL</div>
    </div>
  );
};

export default OfferSlider;