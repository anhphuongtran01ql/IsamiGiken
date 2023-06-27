import React from "react";
import "./simulation.css";
import simulation_bg from "../../../assets/Images/top/simulation_bg.jpg";
import simulation_image from "../../../assets/Images/top/simulation_img.png";

const Simulation = () => {
  return (
    <>
      <img
        className="simulation__background"
        src={simulation_bg}
        alt="簡単料金シミュレーション"
      />
      <a className="simulation__wrapper" href="/simulation">
        <img
          className="simulation__image"
          src={simulation_image}
          alt="簡単料金シミュレーション"
        />
      </a>
    </>
  );
};

export default Simulation;
