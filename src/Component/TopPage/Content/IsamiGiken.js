import React from "react";
import { Divider, Layout } from "antd";
import "./content.css";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import slider_bg_1 from "../../../assets/Images/top/ss_slider_img1.png";
import slider_bg_2 from "../../../assets/Images/top/ss_slider_img2.png";
import slider_bg_3 from "../../../assets/Images/top/ss_slider_img3.jpg";
import slider_bg_4 from "../../../assets/Images/top/ss_slider_img4.jpg";
import slider_icon_1 from "../../../assets/Images/top/ss_slider_icon1.png";
import slider_icon_2 from "../../../assets/Images/top/ss_slider_icon2.png";
import slider_icon_3 from "../../../assets/Images/top/ss_slider_icon3.png";
import slider_icon_4 from "../../../assets/Images/top/ss_slider_icon4.png";
import simulation_bg from "../../../assets/Images/top/simulation_bg.jpg";
import simulation_image from "../../../assets/Images/top/simulation_img.png";

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

const settingsThumbs = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  centerPadding: "5vw",
};

function IsamiGikenComponent() {
  const handlePrevious = () => {
    sliderRef.slickPrev();
  };

  const handleNext = () => {
    sliderRef.slickNext();
  };

  // Reference to the Slider component
  let sliderRef;

  return (
    <Layout className="ig__container">
      <div className="ig__info">
        <div className="ig__info_group">
          <div className="ig__info_title">
            <h3 className="ig__info_heading">
              IsamiGiken <span className="span__text">- 功美技建</span>
            </h3>
            <Divider className="ig__divider" />
          </div>
          <div className="ig__info_text">
            <p className="ig__info_para">
              屋根・外壁の補修・雨漏り修理リフォームのご相談ならお任せ！
            </p>
            <p className="ig__info_para">
              建築のことなら何でもご相談ください！
            </p>
          </div>
        </div>

        <div className="slider-wrapper">
          <div className="thumbnail-slider-wrap">
            <Slider
              {...settingsThumbs}
              ref={(slider) => (sliderRef = slider)}
              arrows={false}
            >
              {slidesData.map((slide) => (
                <div className="slick-item" key={slide.id}>
                  <div className="slick-slide-info">
                    <img
                      style={{
                        height: "100%",
                        width: "auto",
                        maxWidth: "100%",
                        display: "inline-block",
                      }}
                      className="slick-slide-icon"
                      src={slide.label}
                      alt="slider icon"
                    />
                    <h2 className="slick-slide-title">{slide.title}</h2>
                  </div>
                  <img
                    className="slick-slide-image"
                    src={slide.src}
                    alt="slides"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="slider__button_group" style={{ textAlign: "center" }}>
            <button
              className="slider__button button-left"
              onClick={handlePrevious}
            >
              <LeftOutlined className="button__slide_icon" />
            </button>
            <button className="slider__button" onClick={handleNext}>
              <RightOutlined className="button__slide_icon" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="simulation__container"
        style={{ height: "35vw", margin: "10vw 0" }}
      >
        <div
          className="bg__simulation"
          style={{
            backgroundImage: `url(
              ${simulation_bg}
            )`,
          }}
        >
          <img
            className="img__simulation"
            src={simulation_image}
            alt="simulation background"
          />
        </div>
      </div>
    </Layout>
  );
}

export default IsamiGikenComponent;
