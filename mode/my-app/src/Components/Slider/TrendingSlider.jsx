import React from "react";
import Slider from "react-slick";
import styled, { css } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "./slider.css";
const Button = styled.button`
  border: 1px solid black;
  margin: 0 auto;
  width: 85%;
  position: absolute;
  font-weight: bold;
  top: 56%;
  bottom: 34%;
  display: none;
  background: rgba(255, 255, 255, 0.6) none repeat scroll 0% 0% / auto
    padding-box border-box;
  z-index: 99;
`;
const Container = styled.div`
  border: 1px solid #f5f5f5;
  position: relative;
  padding: 0 20px;
  overflow: hidden;
  height: 390px;
  &:hover ${Button} {
    display: block;
  }
`;

const SlideItem = styled.img`
  height: 100%;
  width: 90%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: auto;
`;
const HeartDIv = styled.div`
  position: absolute;
  left: 88%;
  bottom: 93%;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  text-align: center;
  margin-top: -40px;

  & span {
    font-size: 12px;
    color: gray;
  }
  & h6 {
    font-size: 13px;
    font-weight: bold;
    margin: 0;
  }
`;
const HeartImg = styled.img``;

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

const TrendingSlider = () => {
  const [data,setData] = React.useState([])
  React.useEffect(()=>{
    getData()
   },[])
   const getData=async()=>{
    let res = await fetch(`http://localhost:3000/trending`)
    res = await res.json()
    setData(res)
   }


  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "72%", margin: "auto", marginTop: "50px" }}>
      <div style={{width:"20%",margin:"auto"}}><h1 style={{fontSize:"25px",fontWeight:"bold"}}>Trending Now</h1></div>
      <Slider {...settings}>
        {data.map((e)=>(
               <Container
               >
                   <HeartDIv>
                     <HeartImg
                       src="https://cdn.modesens.com/static/img/20210601heart.svg"
                       alt=""
                     />
                   </HeartDIv>
                   <div
                     style={{
                       display: "flex",
                       border: "none",
                       justifyContent: "center",
                       padding: "20px 8px",
                     }}
                   >
                     <div
                       style={{
                         width: "100%",
                         height: "240px",
                         overflow: "hidden",
                       }}
                     >
                       <SlideItem src={e.src} />
                     </div>
                   </div>
                   <div style={{ display: "flex", justifyContent: "center" }}>
                     <Button>Quick View</Button>
                   </div>
                   <TextDiv>
                     <h5
                       style={{
                         color: "black",
                         fontSize: "17px",
                         textAlign: "center",
                         fontWeight: "bold",
                         marginTop:"17px"
                       }}
                     >
                       {e.title}
                     </h5>
                     <p
                       style={{
                         fontSize: "15px",
                         textAlign: "center",
                         color: "gray",
                         marginTop:"5px",
                         lineHeight:"normal"
                       }}
                     >
                       {e.sub}
                     </p>
                     <h6
                       style={{
                         fontSize: "15px",
                         color: "black",
                         marginTop:"5px"
                       }}
                     >
                       ${e.rate}-${e.rate*2}
                     </h6>
                     <span style={{ color: "gray",marginTop:"5px" }}>
                       {Math.floor(Math.random() * (20 - 5 + 1)) + 5}-store
                     </span>
                   </TextDiv>
               </Container>
        ))}
       
       
      
      </Slider>
      <div className="view">SHOP MORE</div>
    </div>
  );
};

export default TrendingSlider;