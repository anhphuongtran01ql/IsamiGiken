import React from "react";
import "./sliderCover.css";

import Slider from "react-slick";
import header_bg_1 from "../../assets/Images/top/header-bg-1.png";
import header_bg_2 from "../../assets/Images/top/header-bg-2.jpg";
import header_bg_3 from "../../assets/Images/top/header-bg-3.jpg";
import header_bg_4 from "../../assets/Images/top/header-bg-4.jpg";
import header_bg_5 from "../../assets/Images/top/header-bg-5.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const images = [
  { id: 1, image: header_bg_1, text: "header background 1" },
  { id: 2, image: header_bg_2, text: "header background 2" },
  { id: 3, image: header_bg_3, text: "header background 3" },
  { id: 4, image: header_bg_4, text: "header background 4" },
  { id: 5, image: header_bg_5, text: "header background 5" },
];

function SliderCover() {
  return (
    <Slider {...settings} className="slider-cover__slider" arrows={false}>
      {images.map((item) => (
        <div key={item.id} className="slider-cover__image-wrapper">
          <img
            className="slider-cover__image"
            src={item.image}
            alt={item.text}
          />
        </div>
      ))}
    </Slider>
  );
}

export default SliderCover;
