import React from "react";
import HeaderComponent from "../Header/header";
import { Layout } from "antd";
import "./topPage.css";
import SliderCover from "./sliderCover";

const { Content, Footer } = Layout;

function TopPage() {
  return (
    <>
      <Layout>
        <Layout>
          <HeaderComponent />
          <SliderCover />
        </Layout>
        {/* <Content>main content</Content>
        <Footer>footer</Footer> */}
      </Layout>
    </>
  );
}

export default TopPage;
