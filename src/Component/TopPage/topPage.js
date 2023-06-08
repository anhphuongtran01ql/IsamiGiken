import React from "react";
import "./topPage.css";
import SliderCover from "./sliderCover";
import ContentComponent from "./Content/content";

function TopPage() {
  return (
    <div className="top-page__container">
      <SliderCover />
      <ContentComponent />
    </div>
  );
}

export default TopPage;
