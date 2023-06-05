import React from "react";
import HeaderComponent from "../Header/header";
import { Layout } from "antd";
import "./topPage.css";
import SliderCover from "./sliderCover";
import FooterComponent from "../Footer/footer";

const { Content } = Layout;

function TopPage() {
  return (
    <>
      <Layout>
        <Layout>
          <HeaderComponent />
          <SliderCover />
        </Layout>
        <Content style={{ height: "30vh" }}>main content</Content>
        <FooterComponent />
      </Layout>
    </>
  );
}

export default TopPage;
