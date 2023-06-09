import { Col, Radio, Row } from "antd";
import React from "react";
import "./simulationItem.css";

function SimulationItem() {
  return (
    <Radio.Group buttonStyle="solid" className="simulation__radio_group">
      <Row>
        <Col xs={12} sm={12} md={8} className="simulation__radio-item-group">
          <Radio.Button className="simulation__radio_button" value="a">
            屋根
          </Radio.Button>
        </Col>
        <Col xs={12} sm={12} md={8} className="simulation__radio-item-group">
          <Radio.Button className="simulation__radio_button" value="b">
            外壁
          </Radio.Button>
        </Col>
        <Col xs={24} sm={24} md={8} className="simulation__radio-item-group">
          <Radio.Button className="simulation__radio_button" value="c">
            バルコニー
          </Radio.Button>
        </Col>
      </Row>
    </Radio.Group>
  );
}

export default SimulationItem;
