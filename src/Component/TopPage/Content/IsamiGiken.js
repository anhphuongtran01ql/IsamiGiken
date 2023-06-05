import React from "react";
import { Divider, Layout, Row } from "antd";
import "./content.css";
import Slider from "react-slick";
import slider_bg_1 from "../../../assets/Images/top/header-bg-1_sp.png";
import slider_bg_2 from "../../../assets/Images/top/header-bg-7_sp.png";
import slider_bg_3 from "../../../assets/Images/top/header-bg-8_sp.png";
import slider_bg_4 from "../../../assets/Images/top/header-bg-9_sp.png";
import simulation_bg from "../../../assets/Images/top/simulation_bg.jpg";
import simulation_image from "../../../assets/Images/top/simulation_img.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function IsamiGikenComponent() {
  return (
    <Layout className="ig__container">
      <Row>
        <h3>IsamiGiken - 功美技建</h3>
        <Divider />
      </Row>
      <Row style={{ display: "block" }}>
        <p>屋根・外壁の補修・雨漏り修理リフォームのご相談ならお任せ！</p>
        <p>建築のことなら何でもご相談ください！</p>
      </Row>
      <Slider {...settings} arrows={false} className="ig__carousel">
        <div className="ig_image-container">
          <img className="ig_image" src={slider_bg_1} alt="slider 1"></img>
        </div>
        <div>
          <img className="ig_image" src={slider_bg_2} alt="slider 2"></img>
        </div>
        <div>
          <img className="ig_image" src={slider_bg_3} alt="slider 3"></img>
        </div>
        <div>
          <img className="ig_image" src={slider_bg_4} alt="slider 4"></img>
        </div>
      </Slider>
      <Row>
        <img
          style={{ width: "100%", position: "relative" }}
          src={simulation_bg}
          alt="simulation background"
        />
        <img
          style={{
            width: "50vw",
            position: "absolute",
          }}
          src={simulation_image}
          alt="simulation background"
        />
      </Row>
    </Layout>
  );
}

export default IsamiGikenComponent;
