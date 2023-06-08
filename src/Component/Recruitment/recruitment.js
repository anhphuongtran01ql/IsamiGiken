import { Col, Row } from "antd";
import React from "react";
import ImageCover from "../Header/imageCover";
import recruit_mv from "../../assets/Images/recruit/recruit_mv.jpg";

const infoHeader = {
  image: recruit_mv,
  title: "Recruit",
  subTitle: "採用情報",
};

function Recruitment() {
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

export default Recruitment;
