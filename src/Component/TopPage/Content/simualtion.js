import React from "react";
import "./simulation.css";
import simulation_bg from "../../../assets/Images/top/simulation_bg.jpg";
import simulation_image from "../../../assets/Images/top/simulation_img.png";

const Simulation = () => {
  return (
    <div className="simulation__container">
      <div
        className="simulation__background"
        style={{
          backgroundImage: `url(
        ${simulation_bg}
      )`,
        }}
      >
        <img
          className="simulation__image"
          src={simulation_image}
          alt="simulation background"
        />
      </div>
    </div>
  );
};

export default Simulation;
