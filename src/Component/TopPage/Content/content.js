import React from "react";
import "./content.css";
import InfoComponent from "./info";
import Simulation from "./simualtion";
import TextComponent from "./textComponent";
import News from "./news";

const igItem = {
  title: "IsamiGiken",
  text: "功美技建",
  paragraph1: "屋根・外壁の補修・雨漏り修理リフォームのご相談ならお任せ！",
  paragraph2: "建築のことなら何でもご相談ください！",
};

const renovation = {
  title: "Renovation",
  text: "施工事例",
  paragraph1:
    "施工事例についてのテキスト施工事例についてのテキスト施工事例についてのテキスト施",
  paragraph2: "工事例についてのテキスト",
};

function ContentComponent() {
  return (
    <>
      <section className="section_IsamiGiken">
        <TextComponent item={igItem} />
      </section>
      <section className="section_simulation">
        <Simulation />
      </section>
      <section className="section_renovation">
        <TextComponent item={renovation} />
      </section>
      <section className="section_info">
        <InfoComponent />
      </section>
      <section className="section_news">
        <News />
      </section>
    </>
  );
}

export default ContentComponent;
