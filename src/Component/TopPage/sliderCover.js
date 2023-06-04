import React from "react";
import "../Header/header.css";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function SliderCover() {
  return (
    <Slider {...settings} arrows={false} className="header__carousel">
      <div className="header_image-container">
        <img
          className="header_image"
          src="https://isamigiken.gattscom.com/image/top/header-bg-2.jpg"
          alt="功美技建"
        ></img>
      </div>
      <div>
        <img
          className="header_image"
          src="https://isamigiken.gattscom.com/image/top/header-bg-3.jpg"
          alt="功美技建"
        ></img>
      </div>
      <div>
        <img
          className="header_image"
          src="https://isamigiken.gattscom.com/image/top/header-bg-4.jpg"
          alt="功美技建"
        ></img>
      </div>
      <div>
        <img
          className="header_image"
          src="https://isamigiken.gattscom.com/image/top/header-bg-5.png"
          alt="功美技建"
        ></img>
      </div>
    </Slider>
  );
}

export default SliderCover;
