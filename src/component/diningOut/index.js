import React from "react";
import "../diningOut/diningOut.css";
import { DiningOutCollection } from "./diningOutCollection";
import { Filters } from "../common/filters";
import { Banner } from "../common/banner";
import { Explore } from "../common/explore";
import { restaurants } from '../../service/data'
const restaurantList = restaurants
const filters= [
  {
    id :1,
    icon:<i class="fa fa-filter" aria-hidden="true"></i>,
    name:"Filters",

  },
  {
    id :6,
    icon:<i class="fa fa-money" aria-hidden="true"></i>,
    name:"Gold",
    
  },
  {
    id :2,
    icon:"",
    name:"Rating 4.0+",
    
  },
  {
    id :3,
    icon:"",
    name:"Open Now",
    
  },
  {
    id :4,
    icon:"",
    name:"Outdoor Seating",
    
  },
]
export const DiningOut = () => {
  return (
    <div>
      <DiningOutCollection></DiningOutCollection>
      <div className="max-width"> 
      <Filters filters ={filters}></Filters>
      </div>
      <Banner></Banner>
      <Explore restaurantList ={restaurantList} collectionName = "Trending dining restaurants in  Kochi, Kerala"></Explore>
    </div>
  );
};
