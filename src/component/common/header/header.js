import "../header/header.css";
import React from "react";

export default function Header() {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo" ></img>
        <div className="header-right">
            <div className="header-location-search-container">
                <div className="location-wrapper">
                    <div className="location-icon-name">
                    <i className="fa fa-map-marker absolute-center location-icon"></i>
                    <div>Kochi</div>
                    </div>
                    <i className="fa fa-caret-down absolute-center location-end"></i>
                    <div className="location-separator"></div>
                    <div className="search-header">
                    <i class="fa fa-search search-icon absolute-center" aria-hidden="true"></i>
                     <input placeholder="Search for food or restaurants" className="search-field"/>
                    </div>

                </div>
            </div>
            <div className="profile-wrapper">
              <img src="https://b.zmtcdn.com/data/dish_photos/4a2/b9ae1735dd5efa851db611a45556b4a2.jpg" className="header-profile-image"></img>
              <span className="header-profile-name">Digin </span>
              <i class="fa fa-angle-down header-profile-icon" aria-hidden="true"></i>

            </div>
        </div>
    </div>
  );
}
