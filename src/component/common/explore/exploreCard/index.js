import React from "react";
import "../exploreCard/exploreCard.css";
 const ExploreCard = (props) => {
  const { restaurant } = props;
  const name = restaurant?.info?.name ?? "";
  const coverImage = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisine = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const bottomContainerImage = bottomContainers[0]?.image?.url;
  // console.log(bottomContainers[0]?.image?.url)
  const bottomContainerText = bottomContainers[0]?.text
  const goldOff = restaurant?.gold?.text;
  const promoOffer = offers.length > 1 ? offers[0].text : null;
  const discount = offers.length > 1 ? offers[1].text : null;

  return (
    <div className="explore-card cur-po">
      <div className="explore-card-cover">
        <img src={coverImage} alt={name} className="explore-card-image"></img>
        <div className="promotion">Promoted</div>
        <div className="delivery-time">{deliveryTime}</div>
          <div className="pro-offer">50% OFF up to 100 </div>
         {goldOff && <div className="gold-offer absolute-center">{goldOff}</div> }
         {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="explore-body">
        <div className="explore-body-title">
          <div className="explore-title-text">
            {name}
          </div>
          <div className="explore-rating">{rating}
          <i class="fa fa-star" aria-hidden="true"></i>
</div>
        </div>
        <div className="explore-body-title">
          <div className="explore-cuisine"> {cuisine}</div>
          <div className="explore-price">{approxPrice} </div>
        </div>
        <div className="explore-footer">
          <img src={bottomContainerImage} className="explore-footer-image">
          </img>
          <div className="explore-footer-text">{bottomContainerText}</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
