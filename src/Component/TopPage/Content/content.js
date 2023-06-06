import React from "react";
import { Layout } from "antd";
import "./content.css";
import IsamiGikenComponent from "./IsamiGiken";
import InfoComponent from "./info";

const { Content } = Layout;

function ContentComponent() {
  return (
    <Content className="content__container">
      <IsamiGikenComponent />
      <InfoComponent />
    </Content>
  );
}

export default ContentComponent;
