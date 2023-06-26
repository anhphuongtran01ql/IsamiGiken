import { Col, Radio, Row } from "antd";
import React, { useState } from "react";
import ImageCover from "../Header/imageCover";
import simulation_top_mv from "../../assets/Images/simulation/simulation_top_mv.jpg";
import "./simulation.css";
import SimulationItem from "./simulationItem";

const infoHeader = {
  image: simulation_top_mv,
  title: "Simulation",
  subTitle: "料金シミュレーション",
};

const items = [
  {
    id: 1,
    title: "修正箇所はどこですか？",
    option1: "屋根",
    option2: "外壁",
    option3: "バルコニー",
  },
  {
    id: 2,
    title: "何階建てですか？",
    option1: "屋根",
    option2: "外壁",
    option3: "バルコニー",
  },
  {
    id: 3,
    title: "屋根面はいくつありますか？",
    option1: "屋根",
    option2: "外壁",
    option3: "バルコニー",
  },
  {
    id: 4,
    title: "現在使われている屋根材はどれですか？",
    option1: "屋根",
    option2: "外壁",
    option3: "バルコニー",
  },
];

function Simulation() {
  return (
    <>
      <ImageCover infoHeader={infoHeader} />
      <section className="container simulation">
        <SimulationItem item={items[0]} />
      </section>
    </>
  );
}

export default Simulation;
