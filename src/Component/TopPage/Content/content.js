import React from "react";
import { Layout } from "antd";
import "./content.css";
import IsamiGikenComponent from "./IsamiGiken";

const { Content } = Layout;

function ContentComponent() {
  return (
    <Content className="content__container">
      <IsamiGikenComponent />
    </Content>
  );
}

export default ContentComponent;
