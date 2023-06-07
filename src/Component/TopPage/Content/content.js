import React from "react";
import { Layout } from "antd";
import "./content.css";
import InfoComponent from "./info";
import Simulation from "./simualtion";
import TextComponent from "./textComponent";

const { Content } = Layout;

const igItem = {
  title: "IsamiGiken",
  text: "功美技建",
  paragraph1: "屋根・外壁の補修・雨漏り修理リフォームのご相談ならお任せ！",
  paragraph2: "建築のことなら何でもご相談ください！",
};

function ContentComponent() {
  return (
    <Content className="content__container">
      <TextComponent igItem={igItem} />
      <Simulation />
      <InfoComponent />
    </Content>
  );
}

export default ContentComponent;
