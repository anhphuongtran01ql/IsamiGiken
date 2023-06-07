import React from "react";
import "./textComponent.css";
import { Divider } from "antd";
import SliderContent from "./SliderGroup/sliderContent";

function TextComponent(props) {
  const item = props.item;

  return (
    <div className="ig__info_group">
      <h3 className="ig__info_heading">
        {item.title} <span className="span__text">- {item.text}</span>
      </h3>
      <Divider className="ig__divider" />
      <div className="ig__info_text">
        <p className="ig__info_para">{item.paragraph1}</p>
        <p className="ig__info_para">{item.paragraph2}</p>
      </div>
      <SliderContent title={item.title} />
    </div>
  );
}

export default TextComponent;
