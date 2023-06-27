import React from "react";
import "./textComponent.css";
import SliderContent from "./SliderGroup/sliderContent";

function TextComponent(props) {
  const item = props.item;

  return (
    <>
      <div className="content">
        <h2 className="heading">
          {item.title} <strong className="span__text">- {item.text}</strong>
        </h2>
        <div className="info_text">
          <p>{item.paragraph1}</p>
          <p>{item.paragraph2}</p>
        </div>
      </div>
      <SliderContent title={item.title} />
    </>
  );
}

export default TextComponent;
