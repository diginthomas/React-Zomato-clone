import React from "react";
import Slider from "react-slick/lib/slider";
import "../diningOutCollection/diningOutCollection.css";
import NextArrow from "../../common/carousel/nextArrow";
import PreviousArrow from "../../common/carousel/previousArrow";
import { DiningOutItem } from "../diningOutItem";
const collections = [
  {
    id: 1,
    title: "8 Places for art lovers",
    subtitle: "8 Places",
    image:
      "https://b.zmtcdn.com/data/pictures/0/901830/103669d9fbec694c3700aa7d16ff51fc.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
  },
  {
    id: 2,
    title: "14 Great Cafes",
    subtitle: "14 Places",
    image:
      "https://b.zmtcdn.com/data/reviews_photos/a1a/442f841f3237c32df606514fbdf3ba1a_1564924728.jpg",
  },
  {
    id: 3,
    title: "20 places for Arabian food",
    subtitle: "20 Places",
    image:
      "https://b.zmtcdn.com/data/reviews_photos/7ab/fcb3b09c66f7bff73019ff2bcd55e7ab_1636031739.jpg",
  },
  {
    id: 4,
    title: "4 Places for Kerala food",
    subtitle: "4 Places",
    image:
      "https://b.zmtcdn.com/data/reviews_photos/fa4/50be4b333bba5f05c7ab5eb66c464fa4_1653456477.jpg",
  },
  {
    id: 5,
    title: "70 places for North Indian food",
    subtitle: "70 Places",
    image:
      "https://b.zmtcdn.com/data/reviews_photos/6d5/727a87970f80dd7b8594199a959c06d5_1566266393.jpg",
  },
  {
    id: 6,
    title: "10 Places for Italian ",
    subtitle: "10 Places",
    image:
      "https://b.zmtcdn.com/data/reviews_photos/602/6465b84429139a2b3c72ff77fc997602_1486854071.jpg",
  },
  {
    id: 7,
    title: "17 Places for Sea food",
    subtitle: "17 Places",
    image:
      "https://b.zmtcdn.com/data/reviews_photos/187/b6077dfe320abb3114b80b81124f8187_1514829830.jpg",
  },
];

export const DiningOutCollection = () => {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PreviousArrow></PreviousArrow>,
  };
  return (
    <div className="dining-out-collection">
      <div className="max-width">
        <div className="dining-collection-title">Collections</div>
        <div className="dining-collection-text-body">
          <div className="dining-collection-body-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Kochi, based on trends
          </div>
          <div className="dining-collection-red-body cur-po">
            All Collections in Kochi
            <span className="dining-collection-icon">
              <i class="fa fa-caret-right" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="dining-collection-items">
        <Slider {...settings}>
          {collections.map((item) => {
            return <DiningOutItem collection={item}></DiningOutItem>;
          })}
        </Slider></div>
      </div>
    </div>
  );
};
