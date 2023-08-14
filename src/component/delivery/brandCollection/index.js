import React from "react";
import Slider from "react-slick/lib/slider";
import "../brandCollection/brandCollection.css";
import NextArrow from "../../common/carousel/nextArrow";
import PreviousArrow from "../../common/carousel/previousArrow";
import { BrandItem } from "../brandItem";
const brands = [
    {
        id: 1,
        title : "Chicking",
        image : "https://b.zmtcdn.com/data/brand_creatives/logos/3bf3424f71561092add2087da7c68459_1599801129.png",
        time : "25 min"

    },
    {
        id: 2,
        title : "Al Taza",
        image : "https://b.zmtcdn.com/data/brand_creatives/logos/9cbf230b4128d7eb39ec5717b1d6d286_1617920031.png",
        time : "27 min"

    },
    {
        id: 3,
        title : "KFC",
        image : "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433844.png",
        time : "25 min"

    }, {
        id: 4,
        title : "Domino's Pizza",
        image : "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1550059625.png",
        time : "24 min"

    }, {
        id: 5,
        title : "McDonald's",
        image : "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983699.png",
        time : "17 min"

    }, {
        id: 6,
        title : "Ceylon Bake House",
        image : "https://b.zmtcdn.com/data/brand_creatives/logos/fa7df5f0a33f6171e7ce6131de3c3806_1617920053.png",
        time : "10 min"

    }
]
const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PreviousArrow></PreviousArrow>,
  };
const BrandCollection = () => {
  return (
    <div className="brand-collection">
      <div className="max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
             {brands.map((brand)=>{
                 return  <BrandItem brand={brand}></BrandItem>
             })}
        </Slider>
      </div>
    </div>
  );
};

export default BrandCollection;
