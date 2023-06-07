import React from "react";
import "./topPage.css";
import SliderCover from "./sliderCover";
import ContentComponent from "./Content/content";

function TopPage() {
  return (
    <div className="top-page__container">
      <SliderCover className="top-page__slider" />
      <ContentComponent />
    </div>
  );
}

export default TopPage;
