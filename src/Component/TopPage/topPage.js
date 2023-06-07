import React from "react";
import HeaderComponent from "../Header/header";
import { Layout } from "antd";
import "./topPage.css";
import SliderCover from "./sliderCover";
import FooterComponent from "../Footer/footer";
import ContentComponent from "./Content/content";

function TopPage() {
  return (
    <Layout className="top-page__container">
      <HeaderComponent className="top-page__header" />
      <SliderCover className="top-page__slider" />
      {/* <ContentComponent className="top-page__content" /> */}
      {/* <FooterComponent className="top-page__footer" /> */}
    </Layout>
  );
}

export default TopPage;
