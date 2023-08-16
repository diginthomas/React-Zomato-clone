import React from "react";
import "../diningOut/diningOut.css";
import { DiningOutCollection } from "./diningOutCollection";
import { Filters } from "../common/filters";
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
    </div>
  );
};
