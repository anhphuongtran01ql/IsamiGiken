import { Col, Row } from "antd";
import React from "react";
import ImageCover from "../Header/imageCover";
import simulation_top_mv from "../../assets/Images/simulation/simulation_top_mv.jpg";

const infoHeader = {
  image: simulation_top_mv,
  title: "Simulation",
  subTitle: "料金シミュレーション",
};

function Simulation() {
  return (
    <div>
      <ImageCover infoHeader={infoHeader} />
      <Row>
        <Col>
          <Row>
            <Col>Title</Col>
          </Row>
          <Row>
            <Col span={8}>1</Col>
            <Col span={8}>1</Col>
            <Col span={8}>1</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Simulation;
