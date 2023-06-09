import { Col, Radio, Row } from "antd";
import React from "react";
import ImageCover from "../Header/imageCover";
import simulation_top_mv from "../../assets/Images/simulation/simulation_top_mv.jpg";
import "./simulation.css";
import SimulationItem from "./simulationItem";

const infoHeader = {
  image: simulation_top_mv,
  title: "Simulation",
  subTitle: "料金シミュレーション",
};

function Simulation() {
  return (
    <div>
      <ImageCover infoHeader={infoHeader} />
      <Row className="simulation__wrapper">
        <Col span={24} className="simulation__col_container">
          <h3 className="simulation__heading">修正箇所はどこですか？</h3>
          <SimulationItem />
        </Col>
      </Row>
    </div>
  );
}

export default Simulation;
