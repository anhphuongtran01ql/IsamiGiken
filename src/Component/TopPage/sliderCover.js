import React from "react";
import "../Header/header.css";

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

function SliderCover() {
  return (
    <Slider {...settings} arrows={false} className="header__carousel">
      <div className="header_image-container">
        <img className="header_image" src={header_bg_1} alt="功美技建"></img>
      </div>
      <div>
        <img className="header_image" src={header_bg_2} alt="功美技建"></img>
      </div>
      <div>
        <img className="header_image" src={header_bg_3} alt="功美技建"></img>
      </div>
      <div>
        <img className="header_image" src={header_bg_4} alt="功美技建"></img>
      </div>
      <div>
        <img className="header_image" src={header_bg_5} alt="功美技建"></img>
      </div>
    </Slider>
  );
}

export default SliderCover;
