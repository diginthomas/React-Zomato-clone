import React from "react";
import "../deliveryItem/deliveryItem.css";
const DeliveryItem = (props) => {
  const { deliveryItem } = props;
  return (
    <div>
      <div className="delivery-item-cover">
        <img src={deliveryItem.image} alt="delivery item"  className="delivery-item-image"/>
      </div>
      <div className="delivery-item-title"> {deliveryItem.title} </div> 
    </div>
  );
};

export default DeliveryItem;
