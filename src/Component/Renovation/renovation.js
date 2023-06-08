import { Col, Row } from "antd";
import React from "react";
import ImageCover from "../Header/imageCover";
import renovation_mv from "../../assets/Images/renovation/renovation_mv.jpg";
import "./renovation.css";

const infoHeader = {
  image: renovation_mv,
  title: "Renovation",
  subTitle: "施工事例",
};

function Renovation() {
  return (
    <div className="renovation__container">
      <ImageCover infoHeader={infoHeader} />
      <Row className="renovation__row">
        <Col className="renovation__col">
          <p className="renovation__text">現在、施工事例のデータがありません</p>
        </Col>
      </Row>
    </div>
  );
}

export default Renovation;
