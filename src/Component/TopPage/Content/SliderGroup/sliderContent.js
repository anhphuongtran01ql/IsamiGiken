import Slider from "react-slick";
import "./sliderContent.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import slider_bg_1 from "../../../../assets/Images/top/ss_slider_img1.png";
import slider_bg_2 from "../../../../assets/Images/top/ss_slider_img2.png";
import slider_bg_3 from "../../../../assets/Images/top/ss_slider_img3.jpg";
import slider_bg_4 from "../../../../assets/Images/top/ss_slider_img4.jpg";
import slider_icon_1 from "../../../../assets/Images/top/ss_slider_icon1.png";
import slider_icon_2 from "../../../../assets/Images/top/ss_slider_icon2.png";
import slider_icon_3 from "../../../../assets/Images/top/ss_slider_icon3.png";
import slider_icon_4 from "../../../../assets/Images/top/ss_slider_icon4.png";
import ImageComponent from "./imageComponent";

const slidesData = [
  {
    id: 1,
    src: slider_bg_1,
    title: "古い外壁を新しくしたい",
    label: slider_icon_1,
  },
  {
    id: 2,
    src: slider_bg_2,
    title: "屋根の劣化が気になる",
    label: slider_icon_2,
  },
  {
    id: 3,
    src: slider_bg_3,
    title: "納屋の壁を綺麗にしたい",
    label: slider_icon_3,
  },
  {
    id: 4,
    src: slider_bg_4,
    title: "ベランダで水漏れがある",
    label: slider_icon_4,
  },
];

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
};

function SliderContent() {
  const handlePrevious = () => {
    sliderRef.slickPrev();
  };

  const handleNext = () => {
    sliderRef.slickNext();
  };

  // Reference to the Slider component
  let sliderRef;

  return (
    <div className="slider-content__container">
      <Slider
        className="slider-content__slider"
        {...settings}
        ref={(slider) => (sliderRef = slider)}
        arrows={false}
      >
        {slidesData.map((slide) => (
          <ImageComponent items={slide} />
        ))}
      </Slider>

      <div className="slider-content__button_group">
        <button
          className="slider-content__button button-left"
          onClick={handlePrevious}
        >
          <LeftOutlined className="slider-content__button_icon" />
        </button>
        <button className="slider-content__button" onClick={handleNext}>
          <RightOutlined className="slider-content__button_icon" />
        </button>
      </div>
    </div>
  );
}

export default SliderContent;
