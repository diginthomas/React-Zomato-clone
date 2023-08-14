import React from "react";
import "../deliveryCollection/deliveryCollection.css";
import NextArrow from "../../common/carousel/nextArrow";
import PreviousArrow from "../../common/carousel/previousArrow";
import Slider from "react-slick/lib/slider";
import DeliveryItem from "../deliveryItem";
const deliveryItems = [
  {
    id: 1,
    title: "Pizza",
    image:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 2,
    title: "Chicken",
    image:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 3,
    title: "Fried Rice",
    image:
      "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
  },
  {
    id: 4,
    title: "Burger",
    image:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id: 5,
    title: "Pothichoru",
    image:
      "https://b.zmtcdn.com/data/dish_photos/8e9/86238a8a24ca33856778c406639748e9.jpg",
  },
  {
    id: 6,
    title: "Chicken Mandhi",
    image:
      "https://b.zmtcdn.com/data/dish_photos/d7c/d68f90bbf43c59ca6b09a0fcd2595d7c.jpg",
  },
];
const DeliveryCollection = () => {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PreviousArrow></PreviousArrow>,
  };
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Inspiration for your first order</div>
        <Slider {...settings}>
            {deliveryItems.map((item)=>{
                return <DeliveryItem deliveryItem = {item}></DeliveryItem>
            })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollection;
