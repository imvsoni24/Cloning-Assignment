import React from 'react';
import ImageSlider from '../Components/Slider/ImageSlider';
import BrandSlider from '../Components/Slider/BrandSlider';
import Bottom from "../Components/Bottom"
import CommunitySlider from '../Components/Slider/CommunitySlider';
import OfferSlider from '../Components/Slider/OfferSlider';
import NewDealSlider from '../Components/Slider/NewDealSlider';
import TrendingSlider from '../Components/Slider/TrendingSlider';


const Womens = () => {
  return (
    <div>
      
      <ImageSlider/>
      <BrandSlider/>
      <NewDealSlider/>
      <OfferSlider/>
      <TrendingSlider/>
      <CommunitySlider/>
      <Bottom/>
    </div>
  )
}

export default Womens


















