import React from "react";
import "./sliderCover.css";

import Slider from "react-slick";
import header_bg_1 from "../../assets/Images/top/header-bg-1.webp";
import header_bg_2 from "../../assets/Images/top/header-bg-2.webp";
import header_bg_3 from "../../assets/Images/top/header-bg-3.webp";
import header_bg_4 from "../../assets/Images/top/header-bg-4.webp";
import header_bg_5 from "../../assets/Images/top/header-bg-5.webp";
import header_bg_6 from "../../assets/Images/top/header-bg-6.webp";
import header_bg_7 from "../../assets/Images/top/header-bg-7.webp";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const images = [
  { id: 1, image: header_bg_1, text: "功美技建" },
  { id: 2, image: header_bg_2, text: "功美技建" },
  { id: 3, image: header_bg_3, text: "功美技建" },
  { id: 4, image: header_bg_4, text: "功美技建" },
  { id: 5, image: header_bg_5, text: "功美技建" },
  { id: 6, image: header_bg_6, text: "功美技建" },
  { id: 7, image: header_bg_7, text: "功美技建" },
];

function SliderCover() {
  return (
    <Slider {...settings} className="slider-cover__slider" arrows={false}>
      {images.map((item) => (
        <img key={item.id} src={item.image} alt={item.text} />
      ))}
    </Slider>
  );
}

export default SliderCover;
