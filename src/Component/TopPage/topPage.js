import React, { useEffect } from "react";
import "./topPage.css";
import SliderCover from "./sliderCover";
import ContentComponent from "./Content/content";

function TopPage() {
  useEffect(() => {
    document.title = "功美技建";
  }, []);

  return (
    <section className="top-page__container">
      <SliderCover />
      <ContentComponent />
    </section>
  );
}

export default TopPage;
