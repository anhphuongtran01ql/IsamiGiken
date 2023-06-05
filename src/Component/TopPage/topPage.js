import React from "react";
import HeaderComponent from "../Header/header";
import { Layout } from "antd";
import "./topPage.css";
import SliderCover from "./sliderCover";
import FooterComponent from "../Footer/footer";
import ContentComponent from "./Content/content";

function TopPage() {
  return (
    <>
      <Layout>
        <Layout>
          <HeaderComponent />
          <SliderCover />
        </Layout>
        <ContentComponent />
        <FooterComponent />
      </Layout>
    </>
  );
}

export default TopPage;
