import React from "react";
import "../diningOutItem/diningOutItem.css";

export const DiningOutItem = ({ collection }) => {
  return (
    <div className="dining-collection-item ">
      <div className="dining-collection-cover cur-po ">
        <img
          src={collection.image}
          className="dining-collection-image"
          alt="dining image"
        ></img>
        <div className="dining-item-collection-title">{collection.title}</div>
        <div className="dining-item-collection-subtitle">
          {collection.subtitle}
          <span className="dining-out-item-icon">
            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
