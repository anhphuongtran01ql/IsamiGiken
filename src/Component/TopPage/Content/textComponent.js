import React from "react";
import "./textComponent.css";
import { Divider } from "antd";
import SliderContent from "./SliderGroup/sliderContent";

function TextComponent(props) {
  const igItem = props.igItem;

  return (
    <div className="ig__info_group">
      <h3 className="ig__info_heading">
        {igItem.title} <span className="span__text">- {igItem.text}</span>
      </h3>
      <Divider className="ig__divider" />
      <div className="ig__info_text">
        <p className="ig__info_para">{igItem.paragraph1}</p>
        <p className="ig__info_para">{igItem.paragraph2}</p>
      </div>
      <SliderContent />
    </div>
  );
}

export default TextComponent;
