import { Col, Row } from "antd";
import React from "react";
import ImageCover from "../Header/imageCover";
import info_mv from "../../assets/Images/about/info_mv.jpg";

const infoHeader = {
  image: info_mv,
  title: "About",
  subTitle: "会社概要",
};

function About() {
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

export default About;
