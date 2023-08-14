import React from "react";
import "../brandItem/brandItem.css";
export const BrandItem = (props) => {
  const { brand } = props;
  return (
    <div>
      <div className="brand-item-cover">
        <img
          src={brand.image}
          alt="brand image"
          className="brand-item-image"
        ></img>
      </div>
      <div className='brand-info'>
          <span className="brand-info-title">{brand.title}</span>
          <span className="brand-info-time">{brand.time}</span>
        </div>
    </div>
  );
};
