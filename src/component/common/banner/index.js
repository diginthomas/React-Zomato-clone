import React from "react";
import "../banner/banner.css";
const bannerImage =
  "https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png";
export const Banner = () => {
  return (
    <div className="max-width">
      <img src={bannerImage} className="banner-image" alt="banner-image"></img>
    </div>
  );
};
