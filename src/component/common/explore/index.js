import React from "react";
import "../explore/explore.css";
import ExploreCard from "./exploreCard";

export const Explore = (props) => {
  const { restaurantList, collectionName } = props;
  return (
    <div className="explore-section">
      <div className="max-width">
        <div className="collection-title">{collectionName}</div>
        <div className="explore-grid">
          {restaurantList.map((restaurant) => {
            return <ExploreCard restaurant={restaurant}></ExploreCard>;
          })}
        </div>
      </div>
    </div>
  );
};
