import { Banner } from "../common/banner";
import { Filters } from "../common/filters";
import "../nightLife/nightLife.css";
import React from "react";
import { restaurants } from '../../service/data'
import {Explore} from "../common/explore"
const restaurantList = restaurants
const filters = [
  {
    id: 1,
    icon: <i class="fa fa-filter" aria-hidden="true"></i>,
    name: "Filters",
  },
  {
    id: 6,
    icon: <i class="fa fa-money" aria-hidden="true"></i>,
    name: "Gold",
  },
  {
    id: 2,
    icon: "",
    name: "Rating 4.0+",
  },
  {
    id: 3,
    icon:<span className="rotate-90"> <i class="fa fa-exchange "  aria-hidden="true"></i></span>,
    name: "Distance",
  },
  {
    id: 4,
    icon: "",
    name: "Pubs & Bars",
  },
];
export const NightLife = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filters={filters}></Filters>
        <Banner></Banner>
        <Explore restaurantList ={restaurantList} collectionName = "Nightlife Restaurants in Kochi, Kerala"></Explore>
      </div>
    </div>
  );
};
